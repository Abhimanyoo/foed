import nWithApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

export const withApollo = nWithApollo({
  client: new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URL }),
});
