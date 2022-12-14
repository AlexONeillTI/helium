import express from 'express';
import cookieParser from 'cookie-parser';
import { createPageRenderer } from 'vite-plugin-ssr';
import findTiInstance from './../utilities/find-ti-instance';
import { fetchUserAndAppearance, fetchUser } from './../utilities/fetch-user-and-appearance';
import initPageContext from './../utilities/init-page-context';
import fetch, { Response } from 'node-fetch';
import expressPlayground from 'graphql-playground-middleware-express';

const isProduction = process.env.NODE_ENV === 'production';
const instanceName = process.env.INSTANCE || '';
const heliumEndpoint = process.env.HELIUM_ENDPOINT;

export default async function setupHeliumServer(root: string, viteDevServer: any, port: number) {
  if (!heliumEndpoint) {
    throw new Error(`
    HELIUM_ENDPOINT environment variable is not set.
    The development server should be started 'helium dev'
    `);
  }

  const app = express();
  app.use(cookieParser());
  const tiInstance = await findTiInstance(instanceName);

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }));
  } else {
    app.use(viteDevServer.middlewares);
    app.use(express.json());

    app.get('/graphiql', expressPlayground({ endpoint: '/graphql' }));
    // proxying graphql requests in dev environment because of CORS errors
    app.post('/graphql', async (req, res) => {
      const reqBody = req.body;

      if (Array.isArray(reqBody)) {
        reqBody.push({ user: tiInstance.email });
      } else {
        reqBody.user = tiInstance.email;
      }

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
      };

      fetch(heliumEndpoint, options)
        .then((tiRes: Response) => {
          // forward authToken in header if set
          const tiCookies = tiRes.headers.raw()['set-cookie'];
          const tiAuthTokenCookie = tiCookies.find(c => /authToken=/.test(c));
          if (tiAuthTokenCookie) {
            res.setHeader('set-cookie', tiAuthTokenCookie);
          }
          res.status(tiRes.status);
          return tiRes;
        })
        .then((r: Response) => r.json())
        .then((data: Record<string, any>) => {
          res.send(data);
        });
    });
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });

  // company appearance is bound to server lifetime
  let appearanceBlock = {};

  app.get('*', async (req, res, next) => {
    // current user is bound to each server request
    let currentUser = {};
    const shouldFetchAppearance = !Object.keys(appearanceBlock).length;
    const requestCookieAuthToken = req.cookies['authToken'];

    // fetch appearance (batch operation to fetch current user if applied)
    if (shouldFetchAppearance) {
      const userAndAppearance = await fetchUserAndAppearance(tiInstance, requestCookieAuthToken);
      currentUser = userAndAppearance.currentUser;
      appearanceBlock = userAndAppearance.appearanceBlock;
    }

    // fetch current user
    const shouldFetchUser = !!requestCookieAuthToken && !Object.keys(currentUser).length;
    if (shouldFetchUser) {
      currentUser = await fetchUser(tiInstance, requestCookieAuthToken);
    }

    const url = req.originalUrl;
    const result = await initPageContext(
      url,
      renderPage,
      currentUser,
      appearanceBlock,
      heliumEndpoint,
      isProduction,
      null,
      requestCookieAuthToken,
      port
    );

    const { httpResponse } = result;

    if (!httpResponse) return next();

    const { statusCode, body } = httpResponse;
    res.status(statusCode).send(body);
  });

  return app;
}
