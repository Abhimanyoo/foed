import { forwardTo } from '@volst/prisma-auth';

export const Mutation = {
  createRestaurant: forwardTo({}),
  updateRestaurant: forwardTo({}),
  deleteRestaurant: forwardTo({}),
  createOrganization: forwardTo({}),
  updateOrganization: forwardTo({}),
  deleteOrganization: forwardTo({}),
  deleteEmployment: forwardTo({}),
  createCard: forwardTo({}),
  updateCard: forwardTo({}),
  deleteCard: forwardTo({}),
};
