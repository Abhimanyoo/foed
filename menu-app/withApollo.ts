import nWithApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

const uri = process.env.REACT_APP_GRAPHQL_URL;

// TODO: typings appear to be wrong, maybe send PR to fix.
export const withApollo = (nWithApollo as any)(() => new ApolloClient({ uri }));
