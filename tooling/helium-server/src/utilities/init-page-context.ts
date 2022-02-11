import fetch from 'isomorphic-unfetch';
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { setContext } from '@apollo/client/link/context';

type PageContextInit = {
  url: string;
  apolloClient: ApolloClient<NormalizedCacheObject>;
  heliumEndpoint: string;
  appearance: Record<string, unknown>;
  currentUser: Record<string, unknown>;
  isProduction: boolean;
  authToken: string | undefined;
};

export default async function initPageContext(
  url: string,
  renderPage: (pageContextInit: PageContextInit) => Promise<string>,
  currentUser: Record<string, unknown>,
  appearance: Record<string, unknown>,
  heliumEndpoint: string,
  isProduction: boolean,
  sha256: () => string,
  authToken: string | undefined
) {
  const apolloClient = makeApolloClient(heliumEndpoint, isProduction, sha256, authToken);
  const pageContextInit = {
    url,
    apolloClient,
    heliumEndpoint,
    appearance,
    currentUser,
    isProduction,
    authToken
  };

  const pageContext = await renderPage(pageContextInit);

  return pageContext;
}

function makeApolloClient(
  heliumEndpoint: string,
  isProduction: boolean,
  sha256: () => string,
  authToken: string | undefined
) {
  let link = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authToken: authToken ? `${authToken}` : ''
      }
    };
  });

  if (isProduction && sha256) {
    link = createPersistedQueryLink({
      sha256
    }).concat(link);
  }

  link = new BatchHttpLink({
    uri: heliumEndpoint,
    fetch: (uri, options: RequestInit | undefined) => {
      let endpoint = uri;

      if (!isProduction) {
        // proxy mutations in dev to avoid CORS errors
        const reqBody =
          options && options.body && typeof options.body === 'string' ? options.body : null;

        if (reqBody) {
          const body = JSON.parse(reqBody);
          const hasMutation = body.some((doc: Record<string, string>) =>
            doc.query.includes('mutation ')
          );
          endpoint = hasMutation ? '/graphql' : uri;
        }
      }

      return fetch(endpoint, options);
    }
  }).concat(link);

  return new ApolloClient({
    ssrMode: true,
    link: link as any,
    cache: new InMemoryCache()
  });
}
