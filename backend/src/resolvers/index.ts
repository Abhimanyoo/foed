import { Query } from './Query';
import { Mutation } from './Mutation';
import { authQueries, authMutations } from '@volst/prisma-auth';

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
