import nWithApollo from 'next-with-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const uri = process.env.REACT_APP_GRAPHQL_URL;

export const withApollo = nWithApollo({
  client: () =>
    ({
      cache: new InMemoryCache(),
    } as any), // workaround for https://github.com/lfades/next-with-apollo/issues/12
  link: {
    http: new HttpLink({
      uri,
    }),
  },
});
