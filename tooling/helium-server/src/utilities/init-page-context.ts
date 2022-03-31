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
  httpResponse?: {
    statusCode: number;
    body: string;
  };
};

type SHA256 = () => string;

export default async function initPageContext(
  url: string,
  renderPage: (pageContextInit: PageContextInit) => Promise<PageContextInit>,
  currentUser: Record<string, unknown>,
  appearance: Record<string, unknown>,
  heliumEndpoint: string,
  isProduction: boolean,
  sha256?: SHA256 | null,
  authToken?: string | null,
  port?: number | undefined
) {
  const apolloClient = makeApolloServerClient(
    heliumEndpoint,
    isProduction,
    sha256,
    authToken,
    port
  );

  const pageContextInit = {
    url,
    apolloClient,
    heliumEndpoint,
    appearance,
    currentUser,
    isProduction,
    authToken
  };

  const pageContext = await renderPage(pageContextInit as PageContextInit);

  return pageContext;
}

function makeApolloServerClient(
  heliumEndpoint: string,
  isProduction: boolean,
  sha256?: SHA256 | null,
  authToken?: string | null,
  port?: number | undefined
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
    link = link.concat(
      createPersistedQueryLink({
        sha256
      })
    );
  }

  const endpoint = !isProduction && port ? `http://localhost:${port}/graphql` : heliumEndpoint;

  link = link.concat(
    new BatchHttpLink({
      uri: endpoint,
      fetch
    })
  );

  return new ApolloClient({
    ssrMode: true,
    link: link as any,
    cache: new InMemoryCache()
  });
}
