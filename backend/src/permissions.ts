import { rule, shield } from 'graphql-shield';
import { isAuthResolver } from 'graphql-authentication';

const isAuth = rule()(isAuthResolver);

export const permissions = shield({
  Query: {
    user: isAuth,
    users: isAuth,
    usersConnection: isAuth,
    employments: isAuth,
    employmentsConnection: isAuth,
    card: isAuth,
    cards: isAuth,
    cardsConnection: isAuth,
    generateRestaurantSlug: isAuth,
    generateOrganizationSlug: isAuth,
  },
  Mutation: {
    createRestaurant: isAuth,
    updateRestaurant: isAuth,
    deleteRestaurant: isAuth,
    createOrganization: isAuth,
    updateOrganization: isAuth,
    deleteOrganization: isAuth,
    deleteEmployment: isAuth,
    createCard: isAuth,
    updateCard: isAuth,
    deleteCard: isAuth,
    imageUpload: isAuth,
  },
});
