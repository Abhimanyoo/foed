import { forwardTo } from 'prisma-binding';

export const Mutation = {
  deleteEmployment: forwardTo('db'),
};

export const Query = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  usersConnection: forwardTo('db'),
  employments: forwardTo('db'),
  employmentsConnection: forwardTo('db'),
};
