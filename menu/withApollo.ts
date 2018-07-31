import nWithApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

const uri = process.env.REACT_APP_GRAPHQL_URL;

export const withApollo = nWithApollo(() => new ApolloClient({ uri }));
