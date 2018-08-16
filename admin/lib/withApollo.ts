import nWithApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import cookie from 'cookie';

const uri = process.env.REACT_APP_GRAPHQL_URL;

function parseCookies(headers?: any) {
  return cookie.parse(headers ? headers.cookie || '' : document.cookie);
}

export const withApollo = nWithApollo(options => {
  return new ApolloClient({
    uri,
    async request(operation) {
      const token = parseCookies(options.headers).token;
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
  });
});
