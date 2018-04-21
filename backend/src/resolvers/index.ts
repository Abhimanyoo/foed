import { Query } from './Query';
import { Mutation } from './Mutation';
import { Mutation as auth, AuthPayload } from '../prisma-auth';

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...Mutation,
  },
  AuthPayload,
};
