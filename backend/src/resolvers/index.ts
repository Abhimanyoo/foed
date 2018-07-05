import { Query } from './Query';
import { Mutation } from './Mutation';
import { authQueries, authMutations } from 'graphql-authentication';

module.exports = {
  Query: {
    ...authQueries,
    ...Query,
  },
  Mutation: {
    ...authMutations,
    ...Mutation,
  },
};
