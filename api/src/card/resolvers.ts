import { forwardTo } from 'prisma-binding';

export const Mutation = {
  createCard: forwardTo('db'),
  updateCard: forwardTo('db'),
  deleteCard: forwardTo('db'),
};

export const Query = {
  card: forwardTo('db'),
  cards: forwardTo('db'),
  cardsConnection: forwardTo('db'),
  cardCategory: forwardTo('db'),
};
