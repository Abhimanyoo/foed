import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import { Options } from 'graphql-binding';
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding';

export interface Query {
  organizations: <T = Organization[]>(
    args: {
      where?: OrganizationWhereInput;
      orderBy?: OrganizationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  restaurants: <T = Restaurant[]>(
    args: {
      where?: RestaurantWhereInput;
      orderBy?: RestaurantOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  employments: <T = Employment[]>(
    args: {
      where?: EmploymentWhereInput;
      orderBy?: EmploymentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  users: <T = User[]>(
    args: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cards: <T = Card[]>(
    args: {
      where?: CardWhereInput;
      orderBy?: CardOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardCategories: <T = CardCategory[]>(
    args: {
      where?: CardCategoryWhereInput;
      orderBy?: CardCategoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardItems: <T = CardItem[]>(
    args: {
      where?: CardItemWhereInput;
      orderBy?: CardItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardSubitems: <T = CardSubitem[]>(
    args: {
      where?: CardSubitemWhereInput;
      orderBy?: CardSubitemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  orders: <T = Order[]>(
    args: {
      where?: OrderWhereInput;
      orderBy?: OrderOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  orderItems: <T = OrderItem[]>(
    args: {
      where?: OrderItemWhereInput;
      orderBy?: OrderItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  organization: <T = Organization | null>(
    args: { where: OrganizationWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  restaurant: <T = Restaurant | null>(
    args: { where: RestaurantWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  employment: <T = Employment | null>(
    args: { where: EmploymentWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  user: <T = User | null>(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  card: <T = Card | null>(
    args: { where: CardWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardCategory: <T = CardCategory | null>(
    args: { where: CardCategoryWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardItem: <T = CardItem | null>(
    args: { where: CardItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardSubitem: <T = CardSubitem | null>(
    args: { where: CardSubitemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  order: <T = Order | null>(
    args: { where: OrderWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  orderItem: <T = OrderItem | null>(
    args: { where: OrderItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  organizationsConnection: <T = OrganizationConnection>(
    args: {
      where?: OrganizationWhereInput;
      orderBy?: OrganizationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  restaurantsConnection: <T = RestaurantConnection>(
    args: {
      where?: RestaurantWhereInput;
      orderBy?: RestaurantOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  employmentsConnection: <T = EmploymentConnection>(
    args: {
      where?: EmploymentWhereInput;
      orderBy?: EmploymentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  usersConnection: <T = UserConnection>(
    args: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardsConnection: <T = CardConnection>(
    args: {
      where?: CardWhereInput;
      orderBy?: CardOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardCategoriesConnection: <T = CardCategoryConnection>(
    args: {
      where?: CardCategoryWhereInput;
      orderBy?: CardCategoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardItemsConnection: <T = CardItemConnection>(
    args: {
      where?: CardItemWhereInput;
      orderBy?: CardItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cardSubitemsConnection: <T = CardSubitemConnection>(
    args: {
      where?: CardSubitemWhereInput;
      orderBy?: CardSubitemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  ordersConnection: <T = OrderConnection>(
    args: {
      where?: OrderWhereInput;
      orderBy?: OrderOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  orderItemsConnection: <T = OrderItemConnection>(
    args: {
      where?: OrderItemWhereInput;
      orderBy?: OrderItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  node: <T = Node | null>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Mutation {
  createOrganization: <T = Organization>(
    args: { data: OrganizationCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createRestaurant: <T = Restaurant>(
    args: { data: RestaurantCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createEmployment: <T = Employment>(
    args: { data: EmploymentCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createUser: <T = User>(
    args: { data: UserCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createCard: <T = Card>(
    args: { data: CardCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createCardCategory: <T = CardCategory>(
    args: { data: CardCategoryCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createCardItem: <T = CardItem>(
    args: { data: CardItemCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createCardSubitem: <T = CardSubitem>(
    args: { data: CardSubitemCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createOrder: <T = Order>(
    args: { data: OrderCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createOrderItem: <T = OrderItem>(
    args: { data: OrderItemCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateOrganization: <T = Organization | null>(
    args: {
      data: OrganizationUpdateInput;
      where: OrganizationWhereUniqueInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateRestaurant: <T = Restaurant | null>(
    args: { data: RestaurantUpdateInput; where: RestaurantWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateEmployment: <T = Employment | null>(
    args: { data: EmploymentUpdateInput; where: EmploymentWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateUser: <T = User | null>(
    args: { data: UserUpdateInput; where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateCard: <T = Card | null>(
    args: { data: CardUpdateInput; where: CardWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateCardCategory: <T = CardCategory | null>(
    args: {
      data: CardCategoryUpdateInput;
      where: CardCategoryWhereUniqueInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateCardItem: <T = CardItem | null>(
    args: { data: CardItemUpdateInput; where: CardItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateCardSubitem: <T = CardSubitem | null>(
    args: { data: CardSubitemUpdateInput; where: CardSubitemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateOrder: <T = Order | null>(
    args: { data: OrderUpdateInput; where: OrderWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateOrderItem: <T = OrderItem | null>(
    args: { data: OrderItemUpdateInput; where: OrderItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteOrganization: <T = Organization | null>(
    args: { where: OrganizationWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteRestaurant: <T = Restaurant | null>(
    args: { where: RestaurantWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteEmployment: <T = Employment | null>(
    args: { where: EmploymentWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteUser: <T = User | null>(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteCard: <T = Card | null>(
    args: { where: CardWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteCardCategory: <T = CardCategory | null>(
    args: { where: CardCategoryWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteCardItem: <T = CardItem | null>(
    args: { where: CardItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteCardSubitem: <T = CardSubitem | null>(
    args: { where: CardSubitemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteOrder: <T = Order | null>(
    args: { where: OrderWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteOrderItem: <T = OrderItem | null>(
    args: { where: OrderItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertOrganization: <T = Organization>(
    args: {
      where: OrganizationWhereUniqueInput;
      create: OrganizationCreateInput;
      update: OrganizationUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertRestaurant: <T = Restaurant>(
    args: {
      where: RestaurantWhereUniqueInput;
      create: RestaurantCreateInput;
      update: RestaurantUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertEmployment: <T = Employment>(
    args: {
      where: EmploymentWhereUniqueInput;
      create: EmploymentCreateInput;
      update: EmploymentUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertUser: <T = User>(
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertCard: <T = Card>(
    args: {
      where: CardWhereUniqueInput;
      create: CardCreateInput;
      update: CardUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertCardCategory: <T = CardCategory>(
    args: {
      where: CardCategoryWhereUniqueInput;
      create: CardCategoryCreateInput;
      update: CardCategoryUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertCardItem: <T = CardItem>(
    args: {
      where: CardItemWhereUniqueInput;
      create: CardItemCreateInput;
      update: CardItemUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertCardSubitem: <T = CardSubitem>(
    args: {
      where: CardSubitemWhereUniqueInput;
      create: CardSubitemCreateInput;
      update: CardSubitemUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertOrder: <T = Order>(
    args: {
      where: OrderWhereUniqueInput;
      create: OrderCreateInput;
      update: OrderUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertOrderItem: <T = OrderItem>(
    args: {
      where: OrderItemWhereUniqueInput;
      create: OrderItemCreateInput;
      update: OrderItemUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyOrganizations: <T = BatchPayload>(
    args: { data: OrganizationUpdateInput; where?: OrganizationWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyRestaurants: <T = BatchPayload>(
    args: { data: RestaurantUpdateInput; where?: RestaurantWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyEmployments: <T = BatchPayload>(
    args: { data: EmploymentUpdateInput; where?: EmploymentWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyUsers: <T = BatchPayload>(
    args: { data: UserUpdateInput; where?: UserWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyCards: <T = BatchPayload>(
    args: { data: CardUpdateInput; where?: CardWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyCardCategories: <T = BatchPayload>(
    args: { data: CardCategoryUpdateInput; where?: CardCategoryWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyCardItems: <T = BatchPayload>(
    args: { data: CardItemUpdateInput; where?: CardItemWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyCardSubitems: <T = BatchPayload>(
    args: { data: CardSubitemUpdateInput; where?: CardSubitemWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyOrders: <T = BatchPayload>(
    args: { data: OrderUpdateInput; where?: OrderWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyOrderItems: <T = BatchPayload>(
    args: { data: OrderItemUpdateInput; where?: OrderItemWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyOrganizations: <T = BatchPayload>(
    args: { where?: OrganizationWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyRestaurants: <T = BatchPayload>(
    args: { where?: RestaurantWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyEmployments: <T = BatchPayload>(
    args: { where?: EmploymentWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyUsers: <T = BatchPayload>(
    args: { where?: UserWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyCards: <T = BatchPayload>(
    args: { where?: CardWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyCardCategories: <T = BatchPayload>(
    args: { where?: CardCategoryWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyCardItems: <T = BatchPayload>(
    args: { where?: CardItemWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyCardSubitems: <T = BatchPayload>(
    args: { where?: CardSubitemWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyOrders: <T = BatchPayload>(
    args: { where?: OrderWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyOrderItems: <T = BatchPayload>(
    args: { where?: OrderItemWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Subscription {
  organization: <T = OrganizationSubscriptionPayload | null>(
    args: { where?: OrganizationSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  restaurant: <T = RestaurantSubscriptionPayload | null>(
    args: { where?: RestaurantSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  employment: <T = EmploymentSubscriptionPayload | null>(
    args: { where?: EmploymentSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  user: <T = UserSubscriptionPayload | null>(
    args: { where?: UserSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  card: <T = CardSubscriptionPayload | null>(
    args: { where?: CardSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  cardCategory: <T = CardCategorySubscriptionPayload | null>(
    args: { where?: CardCategorySubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  cardItem: <T = CardItemSubscriptionPayload | null>(
    args: { where?: CardItemSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  cardSubitem: <T = CardSubitemSubscriptionPayload | null>(
    args: { where?: CardSubitemSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  order: <T = OrderSubscriptionPayload | null>(
    args: { where?: OrderSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  orderItem: <T = OrderItemSubscriptionPayload | null>(
    args: { where?: OrderItemSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
}

export interface Exists {
  Organization: (where?: OrganizationWhereInput) => Promise<boolean>;
  Restaurant: (where?: RestaurantWhereInput) => Promise<boolean>;
  Employment: (where?: EmploymentWhereInput) => Promise<boolean>;
  User: (where?: UserWhereInput) => Promise<boolean>;
  Card: (where?: CardWhereInput) => Promise<boolean>;
  CardCategory: (where?: CardCategoryWhereInput) => Promise<boolean>;
  CardItem: (where?: CardItemWhereInput) => Promise<boolean>;
  CardSubitem: (where?: CardSubitemWhereInput) => Promise<boolean>;
  Order: (where?: OrderWhereInput) => Promise<boolean>;
  OrderItem: (where?: OrderItemWhereInput) => Promise<boolean>;
}

export interface Prisma {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  exists: Exists;
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new (options: BasePrismaOptions): T;
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateCard {
  count: Int!
}

type AggregateCardCategory {
  count: Int!
}

type AggregateCardItem {
  count: Int!
}

type AggregateCardSubitem {
  count: Int!
}

type AggregateEmployment {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateOrganization {
  count: Int!
}

type AggregateRestaurant {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Card implements Node {
  id: ID!
  name: String!
  restaurant(where: RestaurantWhereInput): Restaurant!
  activeRestaurant(where: RestaurantWhereInput): Restaurant
  categories(where: CardCategoryWhereInput, orderBy: CardCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardCategory!]
}

type CardCategory implements Node {
  id: ID!
  name: String!
  ordering: Int!
  description: String!
  items(where: CardItemWhereInput, orderBy: CardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardItem!]
}

"""A connection to a list of items."""
type CardCategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardCategoryEdge]!
  aggregate: AggregateCardCategory!
}

input CardCategoryCreateInput {
  name: String!
  ordering: Int!
  description: String!
  items: CardItemCreateManyInput
}

input CardCategoryCreateManyInput {
  create: [CardCategoryCreateInput!]
  connect: [CardCategoryWhereUniqueInput!]
}

"""An edge in a connection."""
type CardCategoryEdge {
  """The item at the end of the edge."""
  node: CardCategory!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardCategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  ordering_ASC
  ordering_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CardCategoryPreviousValues {
  id: ID!
  name: String!
  ordering: Int!
  description: String!
}

type CardCategorySubscriptionPayload {
  mutation: MutationType!
  node: CardCategory
  updatedFields: [String!]
  previousValues: CardCategoryPreviousValues
}

input CardCategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardCategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardCategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardCategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardCategoryWhereInput
}

input CardCategoryUpdateDataInput {
  name: String
  ordering: Int
  description: String
  items: CardItemUpdateManyInput
}

input CardCategoryUpdateInput {
  name: String
  ordering: Int
  description: String
  items: CardItemUpdateManyInput
}

input CardCategoryUpdateManyInput {
  create: [CardCategoryCreateInput!]
  connect: [CardCategoryWhereUniqueInput!]
  disconnect: [CardCategoryWhereUniqueInput!]
  delete: [CardCategoryWhereUniqueInput!]
  update: [CardCategoryUpdateWithWhereUniqueNestedInput!]
  upsert: [CardCategoryUpsertWithWhereUniqueNestedInput!]
}

input CardCategoryUpdateWithWhereUniqueNestedInput {
  where: CardCategoryWhereUniqueInput!
  data: CardCategoryUpdateDataInput!
}

input CardCategoryUpsertWithWhereUniqueNestedInput {
  where: CardCategoryWhereUniqueInput!
  update: CardCategoryUpdateDataInput!
  create: CardCategoryCreateInput!
}

input CardCategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CardCategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardCategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardCategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  ordering: Int

  """All values that are not equal to given value."""
  ordering_not: Int

  """All values that are contained in given list."""
  ordering_in: [Int!]

  """All values that are not contained in given list."""
  ordering_not_in: [Int!]

  """All values less than the given value."""
  ordering_lt: Int

  """All values less than or equal the given value."""
  ordering_lte: Int

  """All values greater than the given value."""
  ordering_gt: Int

  """All values greater than or equal the given value."""
  ordering_gte: Int
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  items_every: CardItemWhereInput
  items_some: CardItemWhereInput
  items_none: CardItemWhereInput
}

input CardCategoryWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type CardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  name: String!
  restaurant: RestaurantCreateOneWithoutCardsInput!
  activeRestaurant: RestaurantCreateOneWithoutActiveCardInput
  categories: CardCategoryCreateManyInput
}

input CardCreateManyWithoutRestaurantInput {
  create: [CardCreateWithoutRestaurantInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateOneWithoutActiveRestaurantInput {
  create: CardCreateWithoutActiveRestaurantInput
  connect: CardWhereUniqueInput
}

input CardCreateWithoutActiveRestaurantInput {
  name: String!
  restaurant: RestaurantCreateOneWithoutCardsInput!
  categories: CardCategoryCreateManyInput
}

input CardCreateWithoutRestaurantInput {
  name: String!
  activeRestaurant: RestaurantCreateOneWithoutActiveCardInput
  categories: CardCategoryCreateManyInput
}

"""An edge in a connection."""
type CardEdge {
  """The item at the end of the edge."""
  node: Card!

  """A cursor for use in pagination."""
  cursor: String!
}

type CardItem implements Node {
  id: ID!
  name: String!
  description: String!
  ordering: Int!
  price: Float!
  subitems(where: CardSubitemWhereInput, orderBy: CardSubitemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardSubitem!]
}

"""A connection to a list of items."""
type CardItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardItemEdge]!
  aggregate: AggregateCardItem!
}

input CardItemCreateInput {
  name: String!
  description: String!
  ordering: Int!
  price: Float!
  subitems: CardSubitemCreateManyInput
}

input CardItemCreateManyInput {
  create: [CardItemCreateInput!]
  connect: [CardItemWhereUniqueInput!]
}

input CardItemCreateOneInput {
  create: CardItemCreateInput
  connect: CardItemWhereUniqueInput
}

"""An edge in a connection."""
type CardItemEdge {
  """The item at the end of the edge."""
  node: CardItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  ordering_ASC
  ordering_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CardItemPreviousValues {
  id: ID!
  name: String!
  description: String!
  ordering: Int!
  price: Float!
}

type CardItemSubscriptionPayload {
  mutation: MutationType!
  node: CardItem
  updatedFields: [String!]
  previousValues: CardItemPreviousValues
}

input CardItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardItemWhereInput
}

input CardItemUpdateDataInput {
  name: String
  description: String
  ordering: Int
  price: Float
  subitems: CardSubitemUpdateManyInput
}

input CardItemUpdateInput {
  name: String
  description: String
  ordering: Int
  price: Float
  subitems: CardSubitemUpdateManyInput
}

input CardItemUpdateManyInput {
  create: [CardItemCreateInput!]
  connect: [CardItemWhereUniqueInput!]
  disconnect: [CardItemWhereUniqueInput!]
  delete: [CardItemWhereUniqueInput!]
  update: [CardItemUpdateWithWhereUniqueNestedInput!]
  upsert: [CardItemUpsertWithWhereUniqueNestedInput!]
}

input CardItemUpdateOneInput {
  create: CardItemCreateInput
  connect: CardItemWhereUniqueInput
  delete: Boolean
  update: CardItemUpdateDataInput
  upsert: CardItemUpsertNestedInput
}

input CardItemUpdateWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput!
  data: CardItemUpdateDataInput!
}

input CardItemUpsertNestedInput {
  update: CardItemUpdateDataInput!
  create: CardItemCreateInput!
}

input CardItemUpsertWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput!
  update: CardItemUpdateDataInput!
  create: CardItemCreateInput!
}

input CardItemWhereInput {
  """Logical AND on all given filters."""
  AND: [CardItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  ordering: Int

  """All values that are not equal to given value."""
  ordering_not: Int

  """All values that are contained in given list."""
  ordering_in: [Int!]

  """All values that are not contained in given list."""
  ordering_not_in: [Int!]

  """All values less than the given value."""
  ordering_lt: Int

  """All values less than or equal the given value."""
  ordering_lte: Int

  """All values greater than the given value."""
  ordering_gt: Int

  """All values greater than or equal the given value."""
  ordering_gte: Int
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  subitems_every: CardSubitemWhereInput
  subitems_some: CardSubitemWhereInput
  subitems_none: CardSubitemWhereInput
}

input CardItemWhereUniqueInput {
  id: ID
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CardPreviousValues {
  id: ID!
  name: String!
}

type CardSubitem implements Node {
  id: ID!
  type: CardSubitemTypes!
  name: String!
  ordering: Int!
  price: Float!
}

"""A connection to a list of items."""
type CardSubitemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardSubitemEdge]!
  aggregate: AggregateCardSubitem!
}

input CardSubitemCreateInput {
  type: CardSubitemTypes!
  name: String!
  ordering: Int!
  price: Float!
}

input CardSubitemCreateManyInput {
  create: [CardSubitemCreateInput!]
  connect: [CardSubitemWhereUniqueInput!]
}

"""An edge in a connection."""
type CardSubitemEdge {
  """The item at the end of the edge."""
  node: CardSubitem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardSubitemOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  ordering_ASC
  ordering_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CardSubitemPreviousValues {
  id: ID!
  type: CardSubitemTypes!
  name: String!
  ordering: Int!
  price: Float!
}

type CardSubitemSubscriptionPayload {
  mutation: MutationType!
  node: CardSubitem
  updatedFields: [String!]
  previousValues: CardSubitemPreviousValues
}

input CardSubitemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubitemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubitemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubitemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardSubitemWhereInput
}

enum CardSubitemTypes {
  ADDITION
  VARIANT
}

input CardSubitemUpdateDataInput {
  type: CardSubitemTypes
  name: String
  ordering: Int
  price: Float
}

input CardSubitemUpdateInput {
  type: CardSubitemTypes
  name: String
  ordering: Int
  price: Float
}

input CardSubitemUpdateManyInput {
  create: [CardSubitemCreateInput!]
  connect: [CardSubitemWhereUniqueInput!]
  disconnect: [CardSubitemWhereUniqueInput!]
  delete: [CardSubitemWhereUniqueInput!]
  update: [CardSubitemUpdateWithWhereUniqueNestedInput!]
  upsert: [CardSubitemUpsertWithWhereUniqueNestedInput!]
}

input CardSubitemUpdateWithWhereUniqueNestedInput {
  where: CardSubitemWhereUniqueInput!
  data: CardSubitemUpdateDataInput!
}

input CardSubitemUpsertWithWhereUniqueNestedInput {
  where: CardSubitemWhereUniqueInput!
  update: CardSubitemUpdateDataInput!
  create: CardSubitemCreateInput!
}

input CardSubitemWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubitemWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubitemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubitemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: CardSubitemTypes

  """All values that are not equal to given value."""
  type_not: CardSubitemTypes

  """All values that are contained in given list."""
  type_in: [CardSubitemTypes!]

  """All values that are not contained in given list."""
  type_not_in: [CardSubitemTypes!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  ordering: Int

  """All values that are not equal to given value."""
  ordering_not: Int

  """All values that are contained in given list."""
  ordering_in: [Int!]

  """All values that are not contained in given list."""
  ordering_not_in: [Int!]

  """All values less than the given value."""
  ordering_lt: Int

  """All values less than or equal the given value."""
  ordering_lte: Int

  """All values greater than the given value."""
  ordering_gt: Int

  """All values greater than or equal the given value."""
  ordering_gte: Int
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
}

input CardSubitemWhereUniqueInput {
  id: ID
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardWhereInput
}

input CardUpdateInput {
  name: String
  restaurant: RestaurantUpdateOneWithoutCardsInput
  activeRestaurant: RestaurantUpdateOneWithoutActiveCardInput
  categories: CardCategoryUpdateManyInput
}

input CardUpdateManyWithoutRestaurantInput {
  create: [CardCreateWithoutRestaurantInput!]
  connect: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutRestaurantInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutRestaurantInput!]
}

input CardUpdateOneWithoutActiveRestaurantInput {
  create: CardCreateWithoutActiveRestaurantInput
  connect: CardWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CardUpdateWithoutActiveRestaurantDataInput
  upsert: CardUpsertWithoutActiveRestaurantInput
}

input CardUpdateWithoutActiveRestaurantDataInput {
  name: String
  restaurant: RestaurantUpdateOneWithoutCardsInput
  categories: CardCategoryUpdateManyInput
}

input CardUpdateWithoutRestaurantDataInput {
  name: String
  activeRestaurant: RestaurantUpdateOneWithoutActiveCardInput
  categories: CardCategoryUpdateManyInput
}

input CardUpdateWithWhereUniqueWithoutRestaurantInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutRestaurantDataInput!
}

input CardUpsertWithoutActiveRestaurantInput {
  update: CardUpdateWithoutActiveRestaurantDataInput!
  create: CardCreateWithoutActiveRestaurantInput!
}

input CardUpsertWithWhereUniqueWithoutRestaurantInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutRestaurantDataInput!
  create: CardCreateWithoutRestaurantInput!
}

input CardWhereInput {
  """Logical AND on all given filters."""
  AND: [CardWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  restaurant: RestaurantWhereInput
  activeRestaurant: RestaurantWhereInput
  categories_every: CardCategoryWhereInput
  categories_some: CardCategoryWhereInput
  categories_none: CardCategoryWhereInput
}

input CardWhereUniqueInput {
  id: ID
}

scalar DateTime

type Employment implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  restaurant(where: RestaurantWhereInput): Restaurant!
  permission: RestaurantPermission!
}

"""A connection to a list of items."""
type EmploymentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EmploymentEdge]!
  aggregate: AggregateEmployment!
}

input EmploymentCreateInput {
  permission: RestaurantPermission!
  user: UserCreateOneWithoutEmploymentsInput!
  restaurant: RestaurantCreateOneWithoutEmploymentsInput!
}

input EmploymentCreateManyWithoutRestaurantInput {
  create: [EmploymentCreateWithoutRestaurantInput!]
  connect: [EmploymentWhereUniqueInput!]
}

input EmploymentCreateManyWithoutUserInput {
  create: [EmploymentCreateWithoutUserInput!]
  connect: [EmploymentWhereUniqueInput!]
}

input EmploymentCreateWithoutRestaurantInput {
  permission: RestaurantPermission!
  user: UserCreateOneWithoutEmploymentsInput!
}

input EmploymentCreateWithoutUserInput {
  permission: RestaurantPermission!
  restaurant: RestaurantCreateOneWithoutEmploymentsInput!
}

"""An edge in a connection."""
type EmploymentEdge {
  """The item at the end of the edge."""
  node: Employment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EmploymentOrderByInput {
  id_ASC
  id_DESC
  permission_ASC
  permission_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EmploymentPreviousValues {
  id: ID!
  permission: RestaurantPermission!
}

type EmploymentSubscriptionPayload {
  mutation: MutationType!
  node: Employment
  updatedFields: [String!]
  previousValues: EmploymentPreviousValues
}

input EmploymentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EmploymentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EmploymentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EmploymentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EmploymentWhereInput
}

input EmploymentUpdateInput {
  permission: RestaurantPermission
  user: UserUpdateOneWithoutEmploymentsInput
  restaurant: RestaurantUpdateOneWithoutEmploymentsInput
}

input EmploymentUpdateManyWithoutRestaurantInput {
  create: [EmploymentCreateWithoutRestaurantInput!]
  connect: [EmploymentWhereUniqueInput!]
  disconnect: [EmploymentWhereUniqueInput!]
  delete: [EmploymentWhereUniqueInput!]
  update: [EmploymentUpdateWithWhereUniqueWithoutRestaurantInput!]
  upsert: [EmploymentUpsertWithWhereUniqueWithoutRestaurantInput!]
}

input EmploymentUpdateManyWithoutUserInput {
  create: [EmploymentCreateWithoutUserInput!]
  connect: [EmploymentWhereUniqueInput!]
  disconnect: [EmploymentWhereUniqueInput!]
  delete: [EmploymentWhereUniqueInput!]
  update: [EmploymentUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [EmploymentUpsertWithWhereUniqueWithoutUserInput!]
}

input EmploymentUpdateWithoutRestaurantDataInput {
  permission: RestaurantPermission
  user: UserUpdateOneWithoutEmploymentsInput
}

input EmploymentUpdateWithoutUserDataInput {
  permission: RestaurantPermission
  restaurant: RestaurantUpdateOneWithoutEmploymentsInput
}

input EmploymentUpdateWithWhereUniqueWithoutRestaurantInput {
  where: EmploymentWhereUniqueInput!
  data: EmploymentUpdateWithoutRestaurantDataInput!
}

input EmploymentUpdateWithWhereUniqueWithoutUserInput {
  where: EmploymentWhereUniqueInput!
  data: EmploymentUpdateWithoutUserDataInput!
}

input EmploymentUpsertWithWhereUniqueWithoutRestaurantInput {
  where: EmploymentWhereUniqueInput!
  update: EmploymentUpdateWithoutRestaurantDataInput!
  create: EmploymentCreateWithoutRestaurantInput!
}

input EmploymentUpsertWithWhereUniqueWithoutUserInput {
  where: EmploymentWhereUniqueInput!
  update: EmploymentUpdateWithoutUserDataInput!
  create: EmploymentCreateWithoutUserInput!
}

input EmploymentWhereInput {
  """Logical AND on all given filters."""
  AND: [EmploymentWhereInput!]

  """Logical OR on all given filters."""
  OR: [EmploymentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EmploymentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  permission: RestaurantPermission

  """All values that are not equal to given value."""
  permission_not: RestaurantPermission

  """All values that are contained in given list."""
  permission_in: [RestaurantPermission!]

  """All values that are not contained in given list."""
  permission_not_in: [RestaurantPermission!]
  user: UserWhereInput
  restaurant: RestaurantWhereInput
}

input EmploymentWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createOrganization(data: OrganizationCreateInput!): Organization!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  createEmployment(data: EmploymentCreateInput!): Employment!
  createUser(data: UserCreateInput!): User!
  createCard(data: CardCreateInput!): Card!
  createCardCategory(data: CardCategoryCreateInput!): CardCategory!
  createCardItem(data: CardItemCreateInput!): CardItem!
  createCardSubitem(data: CardSubitemCreateInput!): CardSubitem!
  createOrder(data: OrderCreateInput!): Order!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateEmployment(data: EmploymentUpdateInput!, where: EmploymentWhereUniqueInput!): Employment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateCardCategory(data: CardCategoryUpdateInput!, where: CardCategoryWhereUniqueInput!): CardCategory
  updateCardItem(data: CardItemUpdateInput!, where: CardItemWhereUniqueInput!): CardItem
  updateCardSubitem(data: CardSubitemUpdateInput!, where: CardSubitemWhereUniqueInput!): CardSubitem
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteEmployment(where: EmploymentWhereUniqueInput!): Employment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteCardCategory(where: CardCategoryWhereUniqueInput!): CardCategory
  deleteCardItem(where: CardItemWhereUniqueInput!): CardItem
  deleteCardSubitem(where: CardSubitemWhereUniqueInput!): CardSubitem
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  upsertEmployment(where: EmploymentWhereUniqueInput!, create: EmploymentCreateInput!, update: EmploymentUpdateInput!): Employment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  upsertCardCategory(where: CardCategoryWhereUniqueInput!, create: CardCategoryCreateInput!, update: CardCategoryUpdateInput!): CardCategory!
  upsertCardItem(where: CardItemWhereUniqueInput!, create: CardItemCreateInput!, update: CardItemUpdateInput!): CardItem!
  upsertCardSubitem(where: CardSubitemWhereUniqueInput!, create: CardSubitemCreateInput!, update: CardSubitemUpdateInput!): CardSubitem!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  updateManyOrganizations(data: OrganizationUpdateInput!, where: OrganizationWhereInput): BatchPayload!
  updateManyRestaurants(data: RestaurantUpdateInput!, where: RestaurantWhereInput): BatchPayload!
  updateManyEmployments(data: EmploymentUpdateInput!, where: EmploymentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateInput!, where: CardWhereInput): BatchPayload!
  updateManyCardCategories(data: CardCategoryUpdateInput!, where: CardCategoryWhereInput): BatchPayload!
  updateManyCardItems(data: CardItemUpdateInput!, where: CardItemWhereInput): BatchPayload!
  updateManyCardSubitems(data: CardSubitemUpdateInput!, where: CardSubitemWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  updateManyOrderItems(data: OrderItemUpdateInput!, where: OrderItemWhereInput): BatchPayload!
  deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
  deleteManyEmployments(where: EmploymentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  deleteManyCardCategories(where: CardCategoryWhereInput): BatchPayload!
  deleteManyCardItems(where: CardItemWhereInput): BatchPayload!
  deleteManyCardSubitems(where: CardSubitemWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Order implements Node {
  id: ID!
  number: Int
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  tip: Float!
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  number: Int
  tip: Float!
  items: OrderItemCreateManyInput
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

type OrderItem implements Node {
  id: ID!
  cardItem(where: CardItemWhereInput): CardItem!
  subitems(where: CardSubitemWhereInput, orderBy: CardSubitemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardSubitem!]
  restaurant(where: RestaurantWhereInput): Restaurant!
  subtotal: Float!
  completedAt: DateTime
}

"""A connection to a list of items."""
type OrderItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  subtotal: Float!
  completedAt: DateTime
  cardItem: CardItemCreateOneInput!
  subitems: CardSubitemCreateManyInput
  restaurant: RestaurantCreateOneInput!
}

input OrderItemCreateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
}

"""An edge in a connection."""
type OrderItemEdge {
  """The item at the end of the edge."""
  node: OrderItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  subtotal_ASC
  subtotal_DESC
  completedAt_ASC
  completedAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderItemPreviousValues {
  id: ID!
  subtotal: Float!
  completedAt: DateTime
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
}

input OrderItemUpdateDataInput {
  subtotal: Float
  completedAt: DateTime
  cardItem: CardItemUpdateOneInput
  subitems: CardSubitemUpdateManyInput
  restaurant: RestaurantUpdateOneInput
}

input OrderItemUpdateInput {
  subtotal: Float
  completedAt: DateTime
  cardItem: CardItemUpdateOneInput
  subitems: CardSubitemUpdateManyInput
  restaurant: RestaurantUpdateOneInput
}

input OrderItemUpdateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  delete: [OrderItemWhereUniqueInput!]
  update: [OrderItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderItemUpsertWithWhereUniqueNestedInput!]
}

input OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateDataInput!
}

input OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateDataInput!
  create: OrderItemCreateInput!
}

input OrderItemWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  subtotal: Float

  """All values that are not equal to given value."""
  subtotal_not: Float

  """All values that are contained in given list."""
  subtotal_in: [Float!]

  """All values that are not contained in given list."""
  subtotal_not_in: [Float!]

  """All values less than the given value."""
  subtotal_lt: Float

  """All values less than or equal the given value."""
  subtotal_lte: Float

  """All values greater than the given value."""
  subtotal_gt: Float

  """All values greater than or equal the given value."""
  subtotal_gte: Float
  completedAt: DateTime

  """All values that are not equal to given value."""
  completedAt_not: DateTime

  """All values that are contained in given list."""
  completedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  completedAt_not_in: [DateTime!]

  """All values less than the given value."""
  completedAt_lt: DateTime

  """All values less than or equal the given value."""
  completedAt_lte: DateTime

  """All values greater than the given value."""
  completedAt_gt: DateTime

  """All values greater than or equal the given value."""
  completedAt_gte: DateTime
  cardItem: CardItemWhereInput
  subitems_every: CardSubitemWhereInput
  subitems_some: CardSubitemWhereInput
  subitems_none: CardSubitemWhereInput
  restaurant: RestaurantWhereInput
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  tip_ASC
  tip_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderPreviousValues {
  id: ID!
  number: Int
  tip: Float!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  number: Int
  tip: Float
  items: OrderItemUpdateManyInput
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
  tip: Float

  """All values that are not equal to given value."""
  tip_not: Float

  """All values that are contained in given list."""
  tip_in: [Float!]

  """All values that are not contained in given list."""
  tip_not_in: [Float!]

  """All values less than the given value."""
  tip_lt: Float

  """All values less than or equal the given value."""
  tip_lte: Float

  """All values greater than the given value."""
  tip_gt: Float

  """All values greater than or equal the given value."""
  tip_gte: Float
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

type Organization implements Node {
  id: ID!
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant!]
}

"""A connection to a list of items."""
type OrganizationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrganizationEdge]!
  aggregate: AggregateOrganization!
}

input OrganizationCreateInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  restaurants: RestaurantCreateManyWithoutOrganizationInput
}

input OrganizationCreateOneWithoutRestaurantsInput {
  create: OrganizationCreateWithoutRestaurantsInput
  connect: OrganizationWhereUniqueInput
}

input OrganizationCreateWithoutRestaurantsInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
}

"""An edge in a connection."""
type OrganizationEdge {
  """The item at the end of the edge."""
  node: Organization!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrganizationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  visible_ASC
  visible_DESC
  imageUrl_ASC
  imageUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrganizationPreviousValues {
  id: ID!
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
}

type OrganizationSubscriptionPayload {
  mutation: MutationType!
  node: Organization
  updatedFields: [String!]
  previousValues: OrganizationPreviousValues
}

input OrganizationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrganizationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrganizationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrganizationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrganizationWhereInput
}

input OrganizationUpdateInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  restaurants: RestaurantUpdateManyWithoutOrganizationInput
}

input OrganizationUpdateOneWithoutRestaurantsInput {
  create: OrganizationCreateWithoutRestaurantsInput
  connect: OrganizationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OrganizationUpdateWithoutRestaurantsDataInput
  upsert: OrganizationUpsertWithoutRestaurantsInput
}

input OrganizationUpdateWithoutRestaurantsDataInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
}

input OrganizationUpsertWithoutRestaurantsInput {
  update: OrganizationUpdateWithoutRestaurantsDataInput!
  create: OrganizationCreateWithoutRestaurantsInput!
}

input OrganizationWhereInput {
  """Logical AND on all given filters."""
  AND: [OrganizationWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrganizationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrganizationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  visible: Boolean

  """All values that are not equal to given value."""
  visible_not: Boolean
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  restaurants_every: RestaurantWhereInput
  restaurants_some: RestaurantWhereInput
  restaurants_none: RestaurantWhereInput
}

input OrganizationWhereUniqueInput {
  id: ID
  slug: String
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  employments(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  cardCategories(where: CardCategoryWhereInput, orderBy: CardCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardCategory]!
  cardItems(where: CardItemWhereInput, orderBy: CardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardItem]!
  cardSubitems(where: CardSubitemWhereInput, orderBy: CardSubitemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardSubitem]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  organization(where: OrganizationWhereUniqueInput!): Organization
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  employment(where: EmploymentWhereUniqueInput!): Employment
  user(where: UserWhereUniqueInput!): User
  card(where: CardWhereUniqueInput!): Card
  cardCategory(where: CardCategoryWhereUniqueInput!): CardCategory
  cardItem(where: CardItemWhereUniqueInput!): CardItem
  cardSubitem(where: CardSubitemWhereUniqueInput!): CardSubitem
  order(where: OrderWhereUniqueInput!): Order
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  employmentsConnection(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmploymentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  cardCategoriesConnection(where: CardCategoryWhereInput, orderBy: CardCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardCategoryConnection!
  cardItemsConnection(where: CardItemWhereInput, orderBy: CardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardItemConnection!
  cardSubitemsConnection(where: CardSubitemWhereInput, orderBy: CardSubitemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardSubitemConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Restaurant implements Node {
  id: ID!
  organization(where: OrganizationWhereInput): Organization
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  employments(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employment!]
  activeCard(where: CardWhereInput): Card
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
}

"""A connection to a list of items."""
type RestaurantConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  organization: OrganizationCreateOneWithoutRestaurantsInput
  employments: EmploymentCreateManyWithoutRestaurantInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
}

input RestaurantCreateManyWithoutOrganizationInput {
  create: [RestaurantCreateWithoutOrganizationInput!]
  connect: [RestaurantWhereUniqueInput!]
}

input RestaurantCreateOneInput {
  create: RestaurantCreateInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateOneWithoutActiveCardInput {
  create: RestaurantCreateWithoutActiveCardInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateOneWithoutCardsInput {
  create: RestaurantCreateWithoutCardsInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateOneWithoutEmploymentsInput {
  create: RestaurantCreateWithoutEmploymentsInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateWithoutActiveCardInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  organization: OrganizationCreateOneWithoutRestaurantsInput
  employments: EmploymentCreateManyWithoutRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
}

input RestaurantCreateWithoutCardsInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  organization: OrganizationCreateOneWithoutRestaurantsInput
  employments: EmploymentCreateManyWithoutRestaurantInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
}

input RestaurantCreateWithoutEmploymentsInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  organization: OrganizationCreateOneWithoutRestaurantsInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
}

input RestaurantCreateWithoutOrganizationInput {
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
  employments: EmploymentCreateManyWithoutRestaurantInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
}

"""An edge in a connection."""
type RestaurantEdge {
  """The item at the end of the edge."""
  node: Restaurant!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  visible_ASC
  visible_DESC
  imageUrl_ASC
  imageUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum RestaurantPermission {
  EMPLOYEE
  ADMIN
  OWNER
}

type RestaurantPreviousValues {
  id: ID!
  name: String!
  slug: String!
  visible: Boolean
  imageUrl: String
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RestaurantWhereInput
}

input RestaurantUpdateDataInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  organization: OrganizationUpdateOneWithoutRestaurantsInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
}

input RestaurantUpdateInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  organization: OrganizationUpdateOneWithoutRestaurantsInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
}

input RestaurantUpdateManyWithoutOrganizationInput {
  create: [RestaurantCreateWithoutOrganizationInput!]
  connect: [RestaurantWhereUniqueInput!]
  disconnect: [RestaurantWhereUniqueInput!]
  delete: [RestaurantWhereUniqueInput!]
  update: [RestaurantUpdateWithWhereUniqueWithoutOrganizationInput!]
  upsert: [RestaurantUpsertWithWhereUniqueWithoutOrganizationInput!]
}

input RestaurantUpdateOneInput {
  create: RestaurantCreateInput
  connect: RestaurantWhereUniqueInput
  delete: Boolean
  update: RestaurantUpdateDataInput
  upsert: RestaurantUpsertNestedInput
}

input RestaurantUpdateOneWithoutActiveCardInput {
  create: RestaurantCreateWithoutActiveCardInput
  connect: RestaurantWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: RestaurantUpdateWithoutActiveCardDataInput
  upsert: RestaurantUpsertWithoutActiveCardInput
}

input RestaurantUpdateOneWithoutCardsInput {
  create: RestaurantCreateWithoutCardsInput
  connect: RestaurantWhereUniqueInput
  delete: Boolean
  update: RestaurantUpdateWithoutCardsDataInput
  upsert: RestaurantUpsertWithoutCardsInput
}

input RestaurantUpdateOneWithoutEmploymentsInput {
  create: RestaurantCreateWithoutEmploymentsInput
  connect: RestaurantWhereUniqueInput
  delete: Boolean
  update: RestaurantUpdateWithoutEmploymentsDataInput
  upsert: RestaurantUpsertWithoutEmploymentsInput
}

input RestaurantUpdateWithoutActiveCardDataInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  organization: OrganizationUpdateOneWithoutRestaurantsInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
}

input RestaurantUpdateWithoutCardsDataInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  organization: OrganizationUpdateOneWithoutRestaurantsInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
}

input RestaurantUpdateWithoutEmploymentsDataInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  organization: OrganizationUpdateOneWithoutRestaurantsInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
}

input RestaurantUpdateWithoutOrganizationDataInput {
  name: String
  slug: String
  visible: Boolean
  imageUrl: String
  employments: EmploymentUpdateManyWithoutRestaurantInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
}

input RestaurantUpdateWithWhereUniqueWithoutOrganizationInput {
  where: RestaurantWhereUniqueInput!
  data: RestaurantUpdateWithoutOrganizationDataInput!
}

input RestaurantUpsertNestedInput {
  update: RestaurantUpdateDataInput!
  create: RestaurantCreateInput!
}

input RestaurantUpsertWithoutActiveCardInput {
  update: RestaurantUpdateWithoutActiveCardDataInput!
  create: RestaurantCreateWithoutActiveCardInput!
}

input RestaurantUpsertWithoutCardsInput {
  update: RestaurantUpdateWithoutCardsDataInput!
  create: RestaurantCreateWithoutCardsInput!
}

input RestaurantUpsertWithoutEmploymentsInput {
  update: RestaurantUpdateWithoutEmploymentsDataInput!
  create: RestaurantCreateWithoutEmploymentsInput!
}

input RestaurantUpsertWithWhereUniqueWithoutOrganizationInput {
  where: RestaurantWhereUniqueInput!
  update: RestaurantUpdateWithoutOrganizationDataInput!
  create: RestaurantCreateWithoutOrganizationInput!
}

input RestaurantWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  visible: Boolean

  """All values that are not equal to given value."""
  visible_not: Boolean
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  organization: OrganizationWhereInput
  employments_every: EmploymentWhereInput
  employments_some: EmploymentWhereInput
  employments_none: EmploymentWhereInput
  activeCard: CardWhereInput
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
}

input RestaurantWhereUniqueInput {
  id: ID
  slug: String
}

type Subscription {
  organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
  employment(where: EmploymentSubscriptionWhereInput): EmploymentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  cardCategory(where: CardCategorySubscriptionWhereInput): CardCategorySubscriptionPayload
  cardItem(where: CardItemSubscriptionWhereInput): CardItemSubscriptionPayload
  cardSubitem(where: CardSubitemSubscriptionWhereInput): CardSubitemSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  inviteToken: String
  inviteAccepted: Boolean!
  emailConfirmed: Boolean!
  emailConfirmToken: String
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  lastLogin: DateTime
  joinedAt: DateTime!
  isSuper: Boolean!
  employments(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employment!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  inviteToken: String
  inviteAccepted: Boolean
  emailConfirmed: Boolean
  emailConfirmToken: String
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  lastLogin: DateTime
  joinedAt: DateTime!
  isSuper: Boolean
  employments: EmploymentCreateManyWithoutUserInput
}

input UserCreateOneWithoutEmploymentsInput {
  create: UserCreateWithoutEmploymentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEmploymentsInput {
  email: String!
  password: String!
  name: String!
  inviteToken: String
  inviteAccepted: Boolean
  emailConfirmed: Boolean
  emailConfirmToken: String
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  lastLogin: DateTime
  joinedAt: DateTime!
  isSuper: Boolean
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  inviteToken_ASC
  inviteToken_DESC
  inviteAccepted_ASC
  inviteAccepted_DESC
  emailConfirmed_ASC
  emailConfirmed_DESC
  emailConfirmToken_ASC
  emailConfirmToken_DESC
  resetToken_ASC
  resetToken_DESC
  resetExpires_ASC
  resetExpires_DESC
  deletedAt_ASC
  deletedAt_DESC
  lastLogin_ASC
  lastLogin_DESC
  joinedAt_ASC
  joinedAt_DESC
  isSuper_ASC
  isSuper_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  inviteToken: String
  inviteAccepted: Boolean!
  emailConfirmed: Boolean!
  emailConfirmToken: String
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  lastLogin: DateTime
  joinedAt: DateTime!
  isSuper: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  inviteToken: String
  inviteAccepted: Boolean
  emailConfirmed: Boolean
  emailConfirmToken: String
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  lastLogin: DateTime
  joinedAt: DateTime
  isSuper: Boolean
  employments: EmploymentUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutEmploymentsInput {
  create: UserCreateWithoutEmploymentsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutEmploymentsDataInput
  upsert: UserUpsertWithoutEmploymentsInput
}

input UserUpdateWithoutEmploymentsDataInput {
  email: String
  password: String
  name: String
  inviteToken: String
  inviteAccepted: Boolean
  emailConfirmed: Boolean
  emailConfirmToken: String
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  lastLogin: DateTime
  joinedAt: DateTime
  isSuper: Boolean
}

input UserUpsertWithoutEmploymentsInput {
  update: UserUpdateWithoutEmploymentsDataInput!
  create: UserCreateWithoutEmploymentsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  inviteToken: String

  """All values that are not equal to given value."""
  inviteToken_not: String

  """All values that are contained in given list."""
  inviteToken_in: [String!]

  """All values that are not contained in given list."""
  inviteToken_not_in: [String!]

  """All values less than the given value."""
  inviteToken_lt: String

  """All values less than or equal the given value."""
  inviteToken_lte: String

  """All values greater than the given value."""
  inviteToken_gt: String

  """All values greater than or equal the given value."""
  inviteToken_gte: String

  """All values containing the given string."""
  inviteToken_contains: String

  """All values not containing the given string."""
  inviteToken_not_contains: String

  """All values starting with the given string."""
  inviteToken_starts_with: String

  """All values not starting with the given string."""
  inviteToken_not_starts_with: String

  """All values ending with the given string."""
  inviteToken_ends_with: String

  """All values not ending with the given string."""
  inviteToken_not_ends_with: String
  inviteAccepted: Boolean

  """All values that are not equal to given value."""
  inviteAccepted_not: Boolean
  emailConfirmed: Boolean

  """All values that are not equal to given value."""
  emailConfirmed_not: Boolean
  emailConfirmToken: String

  """All values that are not equal to given value."""
  emailConfirmToken_not: String

  """All values that are contained in given list."""
  emailConfirmToken_in: [String!]

  """All values that are not contained in given list."""
  emailConfirmToken_not_in: [String!]

  """All values less than the given value."""
  emailConfirmToken_lt: String

  """All values less than or equal the given value."""
  emailConfirmToken_lte: String

  """All values greater than the given value."""
  emailConfirmToken_gt: String

  """All values greater than or equal the given value."""
  emailConfirmToken_gte: String

  """All values containing the given string."""
  emailConfirmToken_contains: String

  """All values not containing the given string."""
  emailConfirmToken_not_contains: String

  """All values starting with the given string."""
  emailConfirmToken_starts_with: String

  """All values not starting with the given string."""
  emailConfirmToken_not_starts_with: String

  """All values ending with the given string."""
  emailConfirmToken_ends_with: String

  """All values not ending with the given string."""
  emailConfirmToken_not_ends_with: String
  resetToken: String

  """All values that are not equal to given value."""
  resetToken_not: String

  """All values that are contained in given list."""
  resetToken_in: [String!]

  """All values that are not contained in given list."""
  resetToken_not_in: [String!]

  """All values less than the given value."""
  resetToken_lt: String

  """All values less than or equal the given value."""
  resetToken_lte: String

  """All values greater than the given value."""
  resetToken_gt: String

  """All values greater than or equal the given value."""
  resetToken_gte: String

  """All values containing the given string."""
  resetToken_contains: String

  """All values not containing the given string."""
  resetToken_not_contains: String

  """All values starting with the given string."""
  resetToken_starts_with: String

  """All values not starting with the given string."""
  resetToken_not_starts_with: String

  """All values ending with the given string."""
  resetToken_ends_with: String

  """All values not ending with the given string."""
  resetToken_not_ends_with: String
  resetExpires: DateTime

  """All values that are not equal to given value."""
  resetExpires_not: DateTime

  """All values that are contained in given list."""
  resetExpires_in: [DateTime!]

  """All values that are not contained in given list."""
  resetExpires_not_in: [DateTime!]

  """All values less than the given value."""
  resetExpires_lt: DateTime

  """All values less than or equal the given value."""
  resetExpires_lte: DateTime

  """All values greater than the given value."""
  resetExpires_gt: DateTime

  """All values greater than or equal the given value."""
  resetExpires_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  lastLogin: DateTime

  """All values that are not equal to given value."""
  lastLogin_not: DateTime

  """All values that are contained in given list."""
  lastLogin_in: [DateTime!]

  """All values that are not contained in given list."""
  lastLogin_not_in: [DateTime!]

  """All values less than the given value."""
  lastLogin_lt: DateTime

  """All values less than or equal the given value."""
  lastLogin_lte: DateTime

  """All values greater than the given value."""
  lastLogin_gt: DateTime

  """All values greater than or equal the given value."""
  lastLogin_gte: DateTime
  joinedAt: DateTime

  """All values that are not equal to given value."""
  joinedAt_not: DateTime

  """All values that are contained in given list."""
  joinedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  joinedAt_not_in: [DateTime!]

  """All values less than the given value."""
  joinedAt_lt: DateTime

  """All values less than or equal the given value."""
  joinedAt_lte: DateTime

  """All values greater than the given value."""
  joinedAt_gt: DateTime

  """All values greater than or equal the given value."""
  joinedAt_gte: DateTime
  isSuper: Boolean

  """All values that are not equal to given value."""
  isSuper_not: Boolean
  employments_every: EmploymentWhereInput
  employments_some: EmploymentWhereInput
  employments_none: EmploymentWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`;

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({
  typeDefs,
});

/**
 * Types
 */

export type CardSubitemOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'ordering_ASC'
  | 'ordering_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type CardSubitemTypes = 'ADDITION' | 'VARIANT';

export type CardItemOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'ordering_ASC'
  | 'ordering_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type OrderItemOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'subtotal_ASC'
  | 'subtotal_DESC'
  | 'completedAt_ASC'
  | 'completedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type OrganizationOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'visible_ASC'
  | 'visible_DESC'
  | 'imageUrl_ASC'
  | 'imageUrl_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type RestaurantOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'visible_ASC'
  | 'visible_DESC'
  | 'imageUrl_ASC'
  | 'imageUrl_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type EmploymentOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'permission_ASC'
  | 'permission_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type CardCategoryOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'ordering_ASC'
  | 'ordering_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type OrderOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'number_ASC'
  | 'number_DESC'
  | 'tip_ASC'
  | 'tip_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';

export type CardOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type RestaurantPermission = 'EMPLOYEE' | 'ADMIN' | 'OWNER';

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'inviteToken_ASC'
  | 'inviteToken_DESC'
  | 'inviteAccepted_ASC'
  | 'inviteAccepted_DESC'
  | 'emailConfirmed_ASC'
  | 'emailConfirmed_DESC'
  | 'emailConfirmToken_ASC'
  | 'emailConfirmToken_DESC'
  | 'resetToken_ASC'
  | 'resetToken_DESC'
  | 'resetExpires_ASC'
  | 'resetExpires_DESC'
  | 'deletedAt_ASC'
  | 'deletedAt_DESC'
  | 'lastLogin_ASC'
  | 'lastLogin_DESC'
  | 'joinedAt_ASC'
  | 'joinedAt_DESC'
  | 'isSuper_ASC'
  | 'isSuper_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export interface UserCreateInput {
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  emailConfirmed?: Boolean;
  emailConfirmToken?: String;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  lastLogin?: DateTime;
  joinedAt: DateTime;
  isSuper?: Boolean;
  employments?: EmploymentCreateManyWithoutUserInput;
}

export interface OrganizationWhereInput {
  AND?: OrganizationWhereInput[] | OrganizationWhereInput;
  OR?: OrganizationWhereInput[] | OrganizationWhereInput;
  NOT?: OrganizationWhereInput[] | OrganizationWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  visible?: Boolean;
  visible_not?: Boolean;
  imageUrl?: String;
  imageUrl_not?: String;
  imageUrl_in?: String[] | String;
  imageUrl_not_in?: String[] | String;
  imageUrl_lt?: String;
  imageUrl_lte?: String;
  imageUrl_gt?: String;
  imageUrl_gte?: String;
  imageUrl_contains?: String;
  imageUrl_not_contains?: String;
  imageUrl_starts_with?: String;
  imageUrl_not_starts_with?: String;
  imageUrl_ends_with?: String;
  imageUrl_not_ends_with?: String;
  restaurants_every?: RestaurantWhereInput;
  restaurants_some?: RestaurantWhereInput;
  restaurants_none?: RestaurantWhereInput;
}

export interface CardItemCreateOneInput {
  create?: CardItemCreateInput;
  connect?: CardItemWhereUniqueInput;
}

export interface CardSubitemWhereInput {
  AND?: CardSubitemWhereInput[] | CardSubitemWhereInput;
  OR?: CardSubitemWhereInput[] | CardSubitemWhereInput;
  NOT?: CardSubitemWhereInput[] | CardSubitemWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  type?: CardSubitemTypes;
  type_not?: CardSubitemTypes;
  type_in?: CardSubitemTypes[] | CardSubitemTypes;
  type_not_in?: CardSubitemTypes[] | CardSubitemTypes;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  ordering?: Int;
  ordering_not?: Int;
  ordering_in?: Int[] | Int;
  ordering_not_in?: Int[] | Int;
  ordering_lt?: Int;
  ordering_lte?: Int;
  ordering_gt?: Int;
  ordering_gte?: Int;
  price?: Float;
  price_not?: Float;
  price_in?: Float[] | Float;
  price_not_in?: Float[] | Float;
  price_lt?: Float;
  price_lte?: Float;
  price_gt?: Float;
  price_gte?: Float;
}

export interface RestaurantCreateWithoutOrganizationInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
}

export interface CardItemUpsertWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput;
  update: CardItemUpdateDataInput;
  create: CardItemCreateInput;
}

export interface EmploymentCreateManyWithoutRestaurantInput {
  create?:
    | EmploymentCreateWithoutRestaurantInput[]
    | EmploymentCreateWithoutRestaurantInput;
  connect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
}

export interface RestaurantCreateOneInput {
  create?: RestaurantCreateInput;
  connect?: RestaurantWhereUniqueInput;
}

export interface EmploymentCreateWithoutRestaurantInput {
  permission: RestaurantPermission;
  user: UserCreateOneWithoutEmploymentsInput;
}

export interface OrderItemSubscriptionWhereInput {
  AND?: OrderItemSubscriptionWhereInput[] | OrderItemSubscriptionWhereInput;
  OR?: OrderItemSubscriptionWhereInput[] | OrderItemSubscriptionWhereInput;
  NOT?: OrderItemSubscriptionWhereInput[] | OrderItemSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: OrderItemWhereInput;
}

export interface UserCreateOneWithoutEmploymentsInput {
  create?: UserCreateWithoutEmploymentsInput;
  connect?: UserWhereUniqueInput;
}

export interface CardSubitemSubscriptionWhereInput {
  AND?: CardSubitemSubscriptionWhereInput[] | CardSubitemSubscriptionWhereInput;
  OR?: CardSubitemSubscriptionWhereInput[] | CardSubitemSubscriptionWhereInput;
  NOT?: CardSubitemSubscriptionWhereInput[] | CardSubitemSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CardSubitemWhereInput;
}

export interface UserCreateWithoutEmploymentsInput {
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  emailConfirmed?: Boolean;
  emailConfirmToken?: String;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  lastLogin?: DateTime;
  joinedAt: DateTime;
  isSuper?: Boolean;
}

export interface CardCategorySubscriptionWhereInput {
  AND?:
    | CardCategorySubscriptionWhereInput[]
    | CardCategorySubscriptionWhereInput;
  OR?:
    | CardCategorySubscriptionWhereInput[]
    | CardCategorySubscriptionWhereInput;
  NOT?:
    | CardCategorySubscriptionWhereInput[]
    | CardCategorySubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CardCategoryWhereInput;
}

export interface CardCreateOneWithoutActiveRestaurantInput {
  create?: CardCreateWithoutActiveRestaurantInput;
  connect?: CardWhereUniqueInput;
}

export interface CardSubscriptionWhereInput {
  AND?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput;
  OR?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput;
  NOT?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CardWhereInput;
}

export interface CardCreateWithoutActiveRestaurantInput {
  name: String;
  restaurant: RestaurantCreateOneWithoutCardsInput;
  categories?: CardCategoryCreateManyInput;
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
}

export interface RestaurantCreateOneWithoutCardsInput {
  create?: RestaurantCreateWithoutCardsInput;
  connect?: RestaurantWhereUniqueInput;
}

export interface RestaurantSubscriptionWhereInput {
  AND?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput;
  OR?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput;
  NOT?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RestaurantWhereInput;
}

export interface RestaurantCreateWithoutCardsInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationCreateOneWithoutRestaurantsInput;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
}

export interface EmploymentWhereInput {
  AND?: EmploymentWhereInput[] | EmploymentWhereInput;
  OR?: EmploymentWhereInput[] | EmploymentWhereInput;
  NOT?: EmploymentWhereInput[] | EmploymentWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  permission?: RestaurantPermission;
  permission_not?: RestaurantPermission;
  permission_in?: RestaurantPermission[] | RestaurantPermission;
  permission_not_in?: RestaurantPermission[] | RestaurantPermission;
  user?: UserWhereInput;
  restaurant?: RestaurantWhereInput;
}

export interface OrganizationCreateOneWithoutRestaurantsInput {
  create?: OrganizationCreateWithoutRestaurantsInput;
  connect?: OrganizationWhereUniqueInput;
}

export interface OrderItemWhereInput {
  AND?: OrderItemWhereInput[] | OrderItemWhereInput;
  OR?: OrderItemWhereInput[] | OrderItemWhereInput;
  NOT?: OrderItemWhereInput[] | OrderItemWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  subtotal?: Float;
  subtotal_not?: Float;
  subtotal_in?: Float[] | Float;
  subtotal_not_in?: Float[] | Float;
  subtotal_lt?: Float;
  subtotal_lte?: Float;
  subtotal_gt?: Float;
  subtotal_gte?: Float;
  completedAt?: DateTime;
  completedAt_not?: DateTime;
  completedAt_in?: DateTime[] | DateTime;
  completedAt_not_in?: DateTime[] | DateTime;
  completedAt_lt?: DateTime;
  completedAt_lte?: DateTime;
  completedAt_gt?: DateTime;
  completedAt_gte?: DateTime;
  cardItem?: CardItemWhereInput;
  subitems_every?: CardSubitemWhereInput;
  subitems_some?: CardSubitemWhereInput;
  subitems_none?: CardSubitemWhereInput;
  restaurant?: RestaurantWhereInput;
}

export interface OrganizationCreateWithoutRestaurantsInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
}

export interface OrganizationSubscriptionWhereInput {
  AND?:
    | OrganizationSubscriptionWhereInput[]
    | OrganizationSubscriptionWhereInput;
  OR?:
    | OrganizationSubscriptionWhereInput[]
    | OrganizationSubscriptionWhereInput;
  NOT?:
    | OrganizationSubscriptionWhereInput[]
    | OrganizationSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: OrganizationWhereInput;
}

export interface CardCategoryCreateManyInput {
  create?: CardCategoryCreateInput[] | CardCategoryCreateInput;
  connect?: CardCategoryWhereUniqueInput[] | CardCategoryWhereUniqueInput;
}

export interface OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput;
  update: OrderItemUpdateDataInput;
  create: OrderItemCreateInput;
}

export interface CardCategoryCreateInput {
  name: String;
  ordering: Int;
  description: String;
  items?: CardItemCreateManyInput;
}

export interface RestaurantWhereUniqueInput {
  id?: ID_Input;
  slug?: String;
}

export interface CardItemCreateManyInput {
  create?: CardItemCreateInput[] | CardItemCreateInput;
  connect?: CardItemWhereUniqueInput[] | CardItemWhereUniqueInput;
}

export interface UserWhereUniqueInput {
  id?: ID_Input;
  email?: String;
}

export interface CardItemCreateInput {
  name: String;
  description: String;
  ordering: Int;
  price: Float;
  subitems?: CardSubitemCreateManyInput;
}

export interface CardCategoryWhereUniqueInput {
  id?: ID_Input;
}

export interface CardSubitemCreateManyInput {
  create?: CardSubitemCreateInput[] | CardSubitemCreateInput;
  connect?: CardSubitemWhereUniqueInput[] | CardSubitemWhereUniqueInput;
}

export interface CardSubitemWhereUniqueInput {
  id?: ID_Input;
}

export interface CardSubitemCreateInput {
  type: CardSubitemTypes;
  name: String;
  ordering: Int;
  price: Float;
}

export interface OrderItemWhereUniqueInput {
  id?: ID_Input;
}

export interface CardCreateManyWithoutRestaurantInput {
  create?:
    | CardCreateWithoutRestaurantInput[]
    | CardCreateWithoutRestaurantInput;
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput;
}

export interface RestaurantUpdateDataInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationUpdateOneWithoutRestaurantsInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface CardCreateWithoutRestaurantInput {
  name: String;
  activeRestaurant?: RestaurantCreateOneWithoutActiveCardInput;
  categories?: CardCategoryCreateManyInput;
}

export interface CardItemUpsertNestedInput {
  update: CardItemUpdateDataInput;
  create: CardItemCreateInput;
}

export interface RestaurantCreateOneWithoutActiveCardInput {
  create?: RestaurantCreateWithoutActiveCardInput;
  connect?: RestaurantWhereUniqueInput;
}

export interface OrderItemUpdateDataInput {
  subtotal?: Float;
  completedAt?: DateTime;
  cardItem?: CardItemUpdateOneInput;
  subitems?: CardSubitemUpdateManyInput;
  restaurant?: RestaurantUpdateOneInput;
}

export interface RestaurantCreateWithoutActiveCardInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationCreateOneWithoutRestaurantsInput;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
}

export interface OrderItemUpdateManyInput {
  create?: OrderItemCreateInput[] | OrderItemCreateInput;
  connect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput;
  disconnect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput;
  delete?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput;
  update?:
    | OrderItemUpdateWithWhereUniqueNestedInput[]
    | OrderItemUpdateWithWhereUniqueNestedInput;
  upsert?:
    | OrderItemUpsertWithWhereUniqueNestedInput[]
    | OrderItemUpsertWithWhereUniqueNestedInput;
}

export interface RestaurantCreateInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationCreateOneWithoutRestaurantsInput;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
}

export interface CardSubitemUpdateInput {
  type?: CardSubitemTypes;
  name?: String;
  ordering?: Int;
  price?: Float;
}

export interface EmploymentCreateInput {
  permission: RestaurantPermission;
  user: UserCreateOneWithoutEmploymentsInput;
  restaurant: RestaurantCreateOneWithoutEmploymentsInput;
}

export interface CardCategoryUpdateInput {
  name?: String;
  ordering?: Int;
  description?: String;
  items?: CardItemUpdateManyInput;
}

export interface RestaurantCreateOneWithoutEmploymentsInput {
  create?: RestaurantCreateWithoutEmploymentsInput;
  connect?: RestaurantWhereUniqueInput;
}

export interface EmploymentUpsertWithWhereUniqueWithoutUserInput {
  where: EmploymentWhereUniqueInput;
  update: EmploymentUpdateWithoutUserDataInput;
  create: EmploymentCreateWithoutUserInput;
}

export interface RestaurantCreateWithoutEmploymentsInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationCreateOneWithoutRestaurantsInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
}

export interface EmploymentUpdateWithWhereUniqueWithoutUserInput {
  where: EmploymentWhereUniqueInput;
  data: EmploymentUpdateWithoutUserDataInput;
}

export interface CardUpsertWithoutActiveRestaurantInput {
  update: CardUpdateWithoutActiveRestaurantDataInput;
  create: CardCreateWithoutActiveRestaurantInput;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  name?: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  emailConfirmed?: Boolean;
  emailConfirmToken?: String;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  lastLogin?: DateTime;
  joinedAt?: DateTime;
  isSuper?: Boolean;
  employments?: EmploymentUpdateManyWithoutUserInput;
}

export interface EmploymentCreateManyWithoutUserInput {
  create?:
    | EmploymentCreateWithoutUserInput[]
    | EmploymentCreateWithoutUserInput;
  connect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
}

export interface RestaurantUpdateWithoutEmploymentsDataInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationUpdateOneWithoutRestaurantsInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface EmploymentCreateWithoutUserInput {
  permission: RestaurantPermission;
  restaurant: RestaurantCreateOneWithoutEmploymentsInput;
}

export interface EmploymentUpdateInput {
  permission?: RestaurantPermission;
  user?: UserUpdateOneWithoutEmploymentsInput;
  restaurant?: RestaurantUpdateOneWithoutEmploymentsInput;
}

export interface CardCreateInput {
  name: String;
  restaurant: RestaurantCreateOneWithoutCardsInput;
  activeRestaurant?: RestaurantCreateOneWithoutActiveCardInput;
  categories?: CardCategoryCreateManyInput;
}

export interface RestaurantUpsertWithWhereUniqueWithoutOrganizationInput {
  where: RestaurantWhereUniqueInput;
  update: RestaurantUpdateWithoutOrganizationDataInput;
  create: RestaurantCreateWithoutOrganizationInput;
}

export interface OrderCreateInput {
  number?: Int;
  tip: Float;
  items?: OrderItemCreateManyInput;
}

export interface RestaurantUpsertWithoutActiveCardInput {
  update: RestaurantUpdateWithoutActiveCardDataInput;
  create: RestaurantCreateWithoutActiveCardInput;
}

export interface OrderItemCreateManyInput {
  create?: OrderItemCreateInput[] | OrderItemCreateInput;
  connect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput;
}

export interface RestaurantUpdateOneWithoutActiveCardInput {
  create?: RestaurantCreateWithoutActiveCardInput;
  connect?: RestaurantWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: RestaurantUpdateWithoutActiveCardDataInput;
  upsert?: RestaurantUpsertWithoutActiveCardInput;
}

export interface OrderItemCreateInput {
  subtotal: Float;
  completedAt?: DateTime;
  cardItem: CardItemCreateOneInput;
  subitems?: CardSubitemCreateManyInput;
  restaurant: RestaurantCreateOneInput;
}

export interface CardUpdateWithWhereUniqueWithoutRestaurantInput {
  where: CardWhereUniqueInput;
  data: CardUpdateWithoutRestaurantDataInput;
}

export interface CardCategoryUpsertWithWhereUniqueNestedInput {
  where: CardCategoryWhereUniqueInput;
  update: CardCategoryUpdateDataInput;
  create: CardCategoryCreateInput;
}

export interface OrganizationCreateInput {
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  restaurants?: RestaurantCreateManyWithoutOrganizationInput;
}

export interface CardItemWhereInput {
  AND?: CardItemWhereInput[] | CardItemWhereInput;
  OR?: CardItemWhereInput[] | CardItemWhereInput;
  NOT?: CardItemWhereInput[] | CardItemWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  ordering?: Int;
  ordering_not?: Int;
  ordering_in?: Int[] | Int;
  ordering_not_in?: Int[] | Int;
  ordering_lt?: Int;
  ordering_lte?: Int;
  ordering_gt?: Int;
  ordering_gte?: Int;
  price?: Float;
  price_not?: Float;
  price_in?: Float[] | Float;
  price_not_in?: Float[] | Float;
  price_lt?: Float;
  price_lte?: Float;
  price_gt?: Float;
  price_gte?: Float;
  subitems_every?: CardSubitemWhereInput;
  subitems_some?: CardSubitemWhereInput;
  subitems_none?: CardSubitemWhereInput;
}

export interface CardItemSubscriptionWhereInput {
  AND?: CardItemSubscriptionWhereInput[] | CardItemSubscriptionWhereInput;
  OR?: CardItemSubscriptionWhereInput[] | CardItemSubscriptionWhereInput;
  NOT?: CardItemSubscriptionWhereInput[] | CardItemSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CardItemWhereInput;
}

export interface OrganizationUpdateInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  restaurants?: RestaurantUpdateManyWithoutOrganizationInput;
}

export interface CardWhereInput {
  AND?: CardWhereInput[] | CardWhereInput;
  OR?: CardWhereInput[] | CardWhereInput;
  NOT?: CardWhereInput[] | CardWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  restaurant?: RestaurantWhereInput;
  activeRestaurant?: RestaurantWhereInput;
  categories_every?: CardCategoryWhereInput;
  categories_some?: CardCategoryWhereInput;
  categories_none?: CardCategoryWhereInput;
}

export interface RestaurantUpdateManyWithoutOrganizationInput {
  create?:
    | RestaurantCreateWithoutOrganizationInput[]
    | RestaurantCreateWithoutOrganizationInput;
  connect?: RestaurantWhereUniqueInput[] | RestaurantWhereUniqueInput;
  disconnect?: RestaurantWhereUniqueInput[] | RestaurantWhereUniqueInput;
  delete?: RestaurantWhereUniqueInput[] | RestaurantWhereUniqueInput;
  update?:
    | RestaurantUpdateWithWhereUniqueWithoutOrganizationInput[]
    | RestaurantUpdateWithWhereUniqueWithoutOrganizationInput;
  upsert?:
    | RestaurantUpsertWithWhereUniqueWithoutOrganizationInput[]
    | RestaurantUpsertWithWhereUniqueWithoutOrganizationInput;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  inviteToken?: String;
  inviteToken_not?: String;
  inviteToken_in?: String[] | String;
  inviteToken_not_in?: String[] | String;
  inviteToken_lt?: String;
  inviteToken_lte?: String;
  inviteToken_gt?: String;
  inviteToken_gte?: String;
  inviteToken_contains?: String;
  inviteToken_not_contains?: String;
  inviteToken_starts_with?: String;
  inviteToken_not_starts_with?: String;
  inviteToken_ends_with?: String;
  inviteToken_not_ends_with?: String;
  inviteAccepted?: Boolean;
  inviteAccepted_not?: Boolean;
  emailConfirmed?: Boolean;
  emailConfirmed_not?: Boolean;
  emailConfirmToken?: String;
  emailConfirmToken_not?: String;
  emailConfirmToken_in?: String[] | String;
  emailConfirmToken_not_in?: String[] | String;
  emailConfirmToken_lt?: String;
  emailConfirmToken_lte?: String;
  emailConfirmToken_gt?: String;
  emailConfirmToken_gte?: String;
  emailConfirmToken_contains?: String;
  emailConfirmToken_not_contains?: String;
  emailConfirmToken_starts_with?: String;
  emailConfirmToken_not_starts_with?: String;
  emailConfirmToken_ends_with?: String;
  emailConfirmToken_not_ends_with?: String;
  resetToken?: String;
  resetToken_not?: String;
  resetToken_in?: String[] | String;
  resetToken_not_in?: String[] | String;
  resetToken_lt?: String;
  resetToken_lte?: String;
  resetToken_gt?: String;
  resetToken_gte?: String;
  resetToken_contains?: String;
  resetToken_not_contains?: String;
  resetToken_starts_with?: String;
  resetToken_not_starts_with?: String;
  resetToken_ends_with?: String;
  resetToken_not_ends_with?: String;
  resetExpires?: DateTime;
  resetExpires_not?: DateTime;
  resetExpires_in?: DateTime[] | DateTime;
  resetExpires_not_in?: DateTime[] | DateTime;
  resetExpires_lt?: DateTime;
  resetExpires_lte?: DateTime;
  resetExpires_gt?: DateTime;
  resetExpires_gte?: DateTime;
  deletedAt?: DateTime;
  deletedAt_not?: DateTime;
  deletedAt_in?: DateTime[] | DateTime;
  deletedAt_not_in?: DateTime[] | DateTime;
  deletedAt_lt?: DateTime;
  deletedAt_lte?: DateTime;
  deletedAt_gt?: DateTime;
  deletedAt_gte?: DateTime;
  lastLogin?: DateTime;
  lastLogin_not?: DateTime;
  lastLogin_in?: DateTime[] | DateTime;
  lastLogin_not_in?: DateTime[] | DateTime;
  lastLogin_lt?: DateTime;
  lastLogin_lte?: DateTime;
  lastLogin_gt?: DateTime;
  lastLogin_gte?: DateTime;
  joinedAt?: DateTime;
  joinedAt_not?: DateTime;
  joinedAt_in?: DateTime[] | DateTime;
  joinedAt_not_in?: DateTime[] | DateTime;
  joinedAt_lt?: DateTime;
  joinedAt_lte?: DateTime;
  joinedAt_gt?: DateTime;
  joinedAt_gte?: DateTime;
  isSuper?: Boolean;
  isSuper_not?: Boolean;
  employments_every?: EmploymentWhereInput;
  employments_some?: EmploymentWhereInput;
  employments_none?: EmploymentWhereInput;
}

export interface RestaurantUpdateWithWhereUniqueWithoutOrganizationInput {
  where: RestaurantWhereUniqueInput;
  data: RestaurantUpdateWithoutOrganizationDataInput;
}

export interface RestaurantWhereInput {
  AND?: RestaurantWhereInput[] | RestaurantWhereInput;
  OR?: RestaurantWhereInput[] | RestaurantWhereInput;
  NOT?: RestaurantWhereInput[] | RestaurantWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  visible?: Boolean;
  visible_not?: Boolean;
  imageUrl?: String;
  imageUrl_not?: String;
  imageUrl_in?: String[] | String;
  imageUrl_not_in?: String[] | String;
  imageUrl_lt?: String;
  imageUrl_lte?: String;
  imageUrl_gt?: String;
  imageUrl_gte?: String;
  imageUrl_contains?: String;
  imageUrl_not_contains?: String;
  imageUrl_starts_with?: String;
  imageUrl_not_starts_with?: String;
  imageUrl_ends_with?: String;
  imageUrl_not_ends_with?: String;
  organization?: OrganizationWhereInput;
  employments_every?: EmploymentWhereInput;
  employments_some?: EmploymentWhereInput;
  employments_none?: EmploymentWhereInput;
  activeCard?: CardWhereInput;
  cards_every?: CardWhereInput;
  cards_some?: CardWhereInput;
  cards_none?: CardWhereInput;
}

export interface RestaurantUpdateWithoutOrganizationDataInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface OrganizationWhereUniqueInput {
  id?: ID_Input;
  slug?: String;
}

export interface EmploymentUpdateManyWithoutRestaurantInput {
  create?:
    | EmploymentCreateWithoutRestaurantInput[]
    | EmploymentCreateWithoutRestaurantInput;
  connect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
  disconnect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
  delete?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
  update?:
    | EmploymentUpdateWithWhereUniqueWithoutRestaurantInput[]
    | EmploymentUpdateWithWhereUniqueWithoutRestaurantInput;
  upsert?:
    | EmploymentUpsertWithWhereUniqueWithoutRestaurantInput[]
    | EmploymentUpsertWithWhereUniqueWithoutRestaurantInput;
}

export interface CardWhereUniqueInput {
  id?: ID_Input;
}

export interface EmploymentUpdateWithWhereUniqueWithoutRestaurantInput {
  where: EmploymentWhereUniqueInput;
  data: EmploymentUpdateWithoutRestaurantDataInput;
}

export interface OrderWhereUniqueInput {
  id?: ID_Input;
}

export interface EmploymentUpdateWithoutRestaurantDataInput {
  permission?: RestaurantPermission;
  user?: UserUpdateOneWithoutEmploymentsInput;
}

export interface RestaurantUpdateOneInput {
  create?: RestaurantCreateInput;
  connect?: RestaurantWhereUniqueInput;
  delete?: Boolean;
  update?: RestaurantUpdateDataInput;
  upsert?: RestaurantUpsertNestedInput;
}

export interface UserUpdateOneWithoutEmploymentsInput {
  create?: UserCreateWithoutEmploymentsInput;
  connect?: UserWhereUniqueInput;
  delete?: Boolean;
  update?: UserUpdateWithoutEmploymentsDataInput;
  upsert?: UserUpsertWithoutEmploymentsInput;
}

export interface OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateDataInput;
}

export interface UserUpdateWithoutEmploymentsDataInput {
  email?: String;
  password?: String;
  name?: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  emailConfirmed?: Boolean;
  emailConfirmToken?: String;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  lastLogin?: DateTime;
  joinedAt?: DateTime;
  isSuper?: Boolean;
}

export interface CardItemUpdateInput {
  name?: String;
  description?: String;
  ordering?: Int;
  price?: Float;
  subitems?: CardSubitemUpdateManyInput;
}

export interface UserUpsertWithoutEmploymentsInput {
  update: UserUpdateWithoutEmploymentsDataInput;
  create: UserCreateWithoutEmploymentsInput;
}

export interface EmploymentUpdateWithoutUserDataInput {
  permission?: RestaurantPermission;
  restaurant?: RestaurantUpdateOneWithoutEmploymentsInput;
}

export interface EmploymentUpsertWithWhereUniqueWithoutRestaurantInput {
  where: EmploymentWhereUniqueInput;
  update: EmploymentUpdateWithoutRestaurantDataInput;
  create: EmploymentCreateWithoutRestaurantInput;
}

export interface RestaurantUpsertWithoutEmploymentsInput {
  update: RestaurantUpdateWithoutEmploymentsDataInput;
  create: RestaurantCreateWithoutEmploymentsInput;
}

export interface CardUpdateOneWithoutActiveRestaurantInput {
  create?: CardCreateWithoutActiveRestaurantInput;
  connect?: CardWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: CardUpdateWithoutActiveRestaurantDataInput;
  upsert?: CardUpsertWithoutActiveRestaurantInput;
}

export interface RestaurantUpdateInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationUpdateOneWithoutRestaurantsInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface CardUpdateWithoutActiveRestaurantDataInput {
  name?: String;
  restaurant?: RestaurantUpdateOneWithoutCardsInput;
  categories?: CardCategoryUpdateManyInput;
}

export interface RestaurantUpdateWithoutActiveCardDataInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationUpdateOneWithoutRestaurantsInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface RestaurantUpdateOneWithoutCardsInput {
  create?: RestaurantCreateWithoutCardsInput;
  connect?: RestaurantWhereUniqueInput;
  delete?: Boolean;
  update?: RestaurantUpdateWithoutCardsDataInput;
  upsert?: RestaurantUpsertWithoutCardsInput;
}

export interface CardUpdateManyWithoutRestaurantInput {
  create?:
    | CardCreateWithoutRestaurantInput[]
    | CardCreateWithoutRestaurantInput;
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput;
  disconnect?: CardWhereUniqueInput[] | CardWhereUniqueInput;
  delete?: CardWhereUniqueInput[] | CardWhereUniqueInput;
  update?:
    | CardUpdateWithWhereUniqueWithoutRestaurantInput[]
    | CardUpdateWithWhereUniqueWithoutRestaurantInput;
  upsert?:
    | CardUpsertWithWhereUniqueWithoutRestaurantInput[]
    | CardUpsertWithWhereUniqueWithoutRestaurantInput;
}

export interface RestaurantUpdateWithoutCardsDataInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
  organization?: OrganizationUpdateOneWithoutRestaurantsInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput;
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput;
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: OrderWhereInput;
}

export interface OrganizationUpdateOneWithoutRestaurantsInput {
  create?: OrganizationCreateWithoutRestaurantsInput;
  connect?: OrganizationWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: OrganizationUpdateWithoutRestaurantsDataInput;
  upsert?: OrganizationUpsertWithoutRestaurantsInput;
}

export interface EmploymentSubscriptionWhereInput {
  AND?: EmploymentSubscriptionWhereInput[] | EmploymentSubscriptionWhereInput;
  OR?: EmploymentSubscriptionWhereInput[] | EmploymentSubscriptionWhereInput;
  NOT?: EmploymentSubscriptionWhereInput[] | EmploymentSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EmploymentWhereInput;
}

export interface OrganizationUpdateWithoutRestaurantsDataInput {
  name?: String;
  slug?: String;
  visible?: Boolean;
  imageUrl?: String;
}

export interface OrderItemUpdateInput {
  subtotal?: Float;
  completedAt?: DateTime;
  cardItem?: CardItemUpdateOneInput;
  subitems?: CardSubitemUpdateManyInput;
  restaurant?: RestaurantUpdateOneInput;
}

export interface OrganizationUpsertWithoutRestaurantsInput {
  update: OrganizationUpdateWithoutRestaurantsDataInput;
  create: OrganizationCreateWithoutRestaurantsInput;
}

export interface CardItemWhereUniqueInput {
  id?: ID_Input;
}

export interface RestaurantUpsertWithoutCardsInput {
  update: RestaurantUpdateWithoutCardsDataInput;
  create: RestaurantCreateWithoutCardsInput;
}

export interface CardItemUpdateOneInput {
  create?: CardItemCreateInput;
  connect?: CardItemWhereUniqueInput;
  delete?: Boolean;
  update?: CardItemUpdateDataInput;
  upsert?: CardItemUpsertNestedInput;
}

export interface CardCategoryUpdateManyInput {
  create?: CardCategoryCreateInput[] | CardCategoryCreateInput;
  connect?: CardCategoryWhereUniqueInput[] | CardCategoryWhereUniqueInput;
  disconnect?: CardCategoryWhereUniqueInput[] | CardCategoryWhereUniqueInput;
  delete?: CardCategoryWhereUniqueInput[] | CardCategoryWhereUniqueInput;
  update?:
    | CardCategoryUpdateWithWhereUniqueNestedInput[]
    | CardCategoryUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CardCategoryUpsertWithWhereUniqueNestedInput[]
    | CardCategoryUpsertWithWhereUniqueNestedInput;
}

export interface CardUpdateInput {
  name?: String;
  restaurant?: RestaurantUpdateOneWithoutCardsInput;
  activeRestaurant?: RestaurantUpdateOneWithoutActiveCardInput;
  categories?: CardCategoryUpdateManyInput;
}

export interface CardCategoryUpdateWithWhereUniqueNestedInput {
  where: CardCategoryWhereUniqueInput;
  data: CardCategoryUpdateDataInput;
}

export interface RestaurantUpdateOneWithoutEmploymentsInput {
  create?: RestaurantCreateWithoutEmploymentsInput;
  connect?: RestaurantWhereUniqueInput;
  delete?: Boolean;
  update?: RestaurantUpdateWithoutEmploymentsDataInput;
  upsert?: RestaurantUpsertWithoutEmploymentsInput;
}

export interface CardCategoryUpdateDataInput {
  name?: String;
  ordering?: Int;
  description?: String;
  items?: CardItemUpdateManyInput;
}

export interface CardUpdateWithoutRestaurantDataInput {
  name?: String;
  activeRestaurant?: RestaurantUpdateOneWithoutActiveCardInput;
  categories?: CardCategoryUpdateManyInput;
}

export interface CardItemUpdateManyInput {
  create?: CardItemCreateInput[] | CardItemCreateInput;
  connect?: CardItemWhereUniqueInput[] | CardItemWhereUniqueInput;
  disconnect?: CardItemWhereUniqueInput[] | CardItemWhereUniqueInput;
  delete?: CardItemWhereUniqueInput[] | CardItemWhereUniqueInput;
  update?:
    | CardItemUpdateWithWhereUniqueNestedInput[]
    | CardItemUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CardItemUpsertWithWhereUniqueNestedInput[]
    | CardItemUpsertWithWhereUniqueNestedInput;
}

export interface CardCategoryWhereInput {
  AND?: CardCategoryWhereInput[] | CardCategoryWhereInput;
  OR?: CardCategoryWhereInput[] | CardCategoryWhereInput;
  NOT?: CardCategoryWhereInput[] | CardCategoryWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  ordering?: Int;
  ordering_not?: Int;
  ordering_in?: Int[] | Int;
  ordering_not_in?: Int[] | Int;
  ordering_lt?: Int;
  ordering_lte?: Int;
  ordering_gt?: Int;
  ordering_gte?: Int;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  items_every?: CardItemWhereInput;
  items_some?: CardItemWhereInput;
  items_none?: CardItemWhereInput;
}

export interface CardItemUpdateWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput;
  data: CardItemUpdateDataInput;
}

export interface EmploymentWhereUniqueInput {
  id?: ID_Input;
}

export interface CardItemUpdateDataInput {
  name?: String;
  description?: String;
  ordering?: Int;
  price?: Float;
  subitems?: CardSubitemUpdateManyInput;
}

export interface OrderUpdateInput {
  number?: Int;
  tip?: Float;
  items?: OrderItemUpdateManyInput;
}

export interface CardSubitemUpsertWithWhereUniqueNestedInput {
  where: CardSubitemWhereUniqueInput;
  update: CardSubitemUpdateDataInput;
  create: CardSubitemCreateInput;
}

export interface CardSubitemUpdateDataInput {
  type?: CardSubitemTypes;
  name?: String;
  ordering?: Int;
  price?: Float;
}

export interface CardSubitemUpdateWithWhereUniqueNestedInput {
  where: CardSubitemWhereUniqueInput;
  data: CardSubitemUpdateDataInput;
}

export interface CardSubitemUpdateManyInput {
  create?: CardSubitemCreateInput[] | CardSubitemCreateInput;
  connect?: CardSubitemWhereUniqueInput[] | CardSubitemWhereUniqueInput;
  disconnect?: CardSubitemWhereUniqueInput[] | CardSubitemWhereUniqueInput;
  delete?: CardSubitemWhereUniqueInput[] | CardSubitemWhereUniqueInput;
  update?:
    | CardSubitemUpdateWithWhereUniqueNestedInput[]
    | CardSubitemUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CardSubitemUpsertWithWhereUniqueNestedInput[]
    | CardSubitemUpsertWithWhereUniqueNestedInput;
}

export interface EmploymentUpdateManyWithoutUserInput {
  create?:
    | EmploymentCreateWithoutUserInput[]
    | EmploymentCreateWithoutUserInput;
  connect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
  disconnect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
  delete?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
  update?:
    | EmploymentUpdateWithWhereUniqueWithoutUserInput[]
    | EmploymentUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | EmploymentUpsertWithWhereUniqueWithoutUserInput[]
    | EmploymentUpsertWithWhereUniqueWithoutUserInput;
}

export interface RestaurantUpsertNestedInput {
  update: RestaurantUpdateDataInput;
  create: RestaurantCreateInput;
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput;
  OR?: OrderWhereInput[] | OrderWhereInput;
  NOT?: OrderWhereInput[] | OrderWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  number?: Int;
  number_not?: Int;
  number_in?: Int[] | Int;
  number_not_in?: Int[] | Int;
  number_lt?: Int;
  number_lte?: Int;
  number_gt?: Int;
  number_gte?: Int;
  tip?: Float;
  tip_not?: Float;
  tip_in?: Float[] | Float;
  tip_not_in?: Float[] | Float;
  tip_lt?: Float;
  tip_lte?: Float;
  tip_gt?: Float;
  tip_gte?: Float;
  items_every?: OrderItemWhereInput;
  items_some?: OrderItemWhereInput;
  items_none?: OrderItemWhereInput;
}

export interface RestaurantCreateManyWithoutOrganizationInput {
  create?:
    | RestaurantCreateWithoutOrganizationInput[]
    | RestaurantCreateWithoutOrganizationInput;
  connect?: RestaurantWhereUniqueInput[] | RestaurantWhereUniqueInput;
}

export interface CardUpsertWithWhereUniqueWithoutRestaurantInput {
  where: CardWhereUniqueInput;
  update: CardUpdateWithoutRestaurantDataInput;
  create: CardCreateWithoutRestaurantInput;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface OrderItemPreviousValues {
  id: ID_Output;
  subtotal: Float;
  completedAt?: DateTime;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface CardSubitemPreviousValues {
  id: ID_Output;
  type: CardSubitemTypes;
  name: String;
  ordering: Int;
  price: Float;
}

/*
 * A connection to a list of items.

 */
export interface OrganizationConnection {
  pageInfo: PageInfo;
  edges: OrganizationEdge[];
  aggregate: AggregateOrganization;
}

export interface Organization extends Node {
  id: ID_Output;
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  restaurants?: Restaurant[];
}

export interface OrderItem extends Node {
  id: ID_Output;
  cardItem: CardItem;
  subitems?: CardSubitem[];
  restaurant: Restaurant;
  subtotal: Float;
  completedAt?: DateTime;
}

/*
 * An edge in a connection.

 */
export interface OrderItemEdge {
  node: OrderItem;
  cursor: String;
}

export interface OrderItemSubscriptionPayload {
  mutation: MutationType;
  node?: OrderItem;
  updatedFields?: String[];
  previousValues?: OrderItemPreviousValues;
}

export interface AggregateOrder {
  count: Int;
}

export interface BatchPayload {
  count: Long;
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo;
  edges: OrderEdge[];
  aggregate: AggregateOrder;
}

export interface Restaurant extends Node {
  id: ID_Output;
  organization?: Organization;
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
  employments?: Employment[];
  activeCard?: Card;
  cards?: Card[];
}

/*
 * An edge in a connection.

 */
export interface CardSubitemEdge {
  node: CardSubitem;
  cursor: String;
}

export interface Order extends Node {
  id: ID_Output;
  number?: Int;
  items?: OrderItem[];
  tip: Float;
}

export interface AggregateCardItem {
  count: Int;
}

export interface OrderPreviousValues {
  id: ID_Output;
  number?: Int;
  tip: Float;
}

/*
 * A connection to a list of items.

 */
export interface CardItemConnection {
  pageInfo: PageInfo;
  edges: CardItemEdge[];
  aggregate: AggregateCardItem;
}

export interface OrganizationSubscriptionPayload {
  mutation: MutationType;
  node?: Organization;
  updatedFields?: String[];
  previousValues?: OrganizationPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface CardCategoryEdge {
  node: CardCategory;
  cursor: String;
}

export interface OrganizationPreviousValues {
  id: ID_Output;
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
}

export interface AggregateCard {
  count: Int;
}

export interface CardSubitem extends Node {
  id: ID_Output;
  type: CardSubitemTypes;
  name: String;
  ordering: Int;
  price: Float;
}

/*
 * A connection to a list of items.

 */
export interface CardConnection {
  pageInfo: PageInfo;
  edges: CardEdge[];
  aggregate: AggregateCard;
}

export interface RestaurantSubscriptionPayload {
  mutation: MutationType;
  node?: Restaurant;
  updatedFields?: String[];
  previousValues?: RestaurantPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User;
  cursor: String;
}

export interface RestaurantPreviousValues {
  id: ID_Output;
  name: String;
  slug: String;
  visible?: Boolean;
  imageUrl?: String;
}

export interface AggregateEmployment {
  count: Int;
}

export interface OrderSubscriptionPayload {
  mutation: MutationType;
  node?: Order;
  updatedFields?: String[];
  previousValues?: OrderPreviousValues;
}

/*
 * A connection to a list of items.

 */
export interface EmploymentConnection {
  pageInfo: PageInfo;
  edges: EmploymentEdge[];
  aggregate: AggregateEmployment;
}

export interface EmploymentSubscriptionPayload {
  mutation: MutationType;
  node?: Employment;
  updatedFields?: String[];
  previousValues?: EmploymentPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface RestaurantEdge {
  node: Restaurant;
  cursor: String;
}

export interface EmploymentPreviousValues {
  id: ID_Output;
  permission: RestaurantPermission;
}

export interface AggregateOrganization {
  count: Int;
}

export interface CardItem extends Node {
  id: ID_Output;
  name: String;
  description: String;
  ordering: Int;
  price: Float;
  subitems?: CardSubitem[];
}

export interface AggregateOrderItem {
  count: Int;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node?: User;
  updatedFields?: String[];
  previousValues?: UserPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order;
  cursor: String;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted: Boolean;
  emailConfirmed: Boolean;
  emailConfirmToken?: String;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  lastLogin?: DateTime;
  joinedAt: DateTime;
  isSuper: Boolean;
}

/*
 * A connection to a list of items.

 */
export interface CardSubitemConnection {
  pageInfo: PageInfo;
  edges: CardSubitemEdge[];
  aggregate: AggregateCardSubitem;
}

export interface CardCategory extends Node {
  id: ID_Output;
  name: String;
  ordering: Int;
  description: String;
  items?: CardItem[];
}

export interface AggregateCardCategory {
  count: Int;
}

export interface CardSubscriptionPayload {
  mutation: MutationType;
  node?: Card;
  updatedFields?: String[];
  previousValues?: CardPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface CardEdge {
  node: Card;
  cursor: String;
}

export interface CardPreviousValues {
  id: ID_Output;
  name: String;
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
  aggregate: AggregateUser;
}

export interface Card extends Node {
  id: ID_Output;
  name: String;
  restaurant: Restaurant;
  activeRestaurant?: Restaurant;
  categories?: CardCategory[];
}

export interface AggregateRestaurant {
  count: Int;
}

export interface CardCategorySubscriptionPayload {
  mutation: MutationType;
  node?: CardCategory;
  updatedFields?: String[];
  previousValues?: CardCategoryPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface OrganizationEdge {
  node: Organization;
  cursor: String;
}

export interface CardCategoryPreviousValues {
  id: ID_Output;
  name: String;
  ordering: Int;
  description: String;
}

export interface AggregateCardSubitem {
  count: Int;
}

export interface User extends Node {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted: Boolean;
  emailConfirmed: Boolean;
  emailConfirmToken?: String;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  lastLogin?: DateTime;
  joinedAt: DateTime;
  isSuper: Boolean;
  employments?: Employment[];
}

/*
 * A connection to a list of items.

 */
export interface CardCategoryConnection {
  pageInfo: PageInfo;
  edges: CardCategoryEdge[];
  aggregate: AggregateCardCategory;
}

/*
 * An edge in a connection.

 */
export interface EmploymentEdge {
  node: Employment;
  cursor: String;
}

export interface CardSubitemSubscriptionPayload {
  mutation: MutationType;
  node?: CardSubitem;
  updatedFields?: String[];
  previousValues?: CardSubitemPreviousValues;
}

export interface Employment extends Node {
  id: ID_Output;
  user: User;
  restaurant: Restaurant;
  permission: RestaurantPermission;
}

export interface CardItemPreviousValues {
  id: ID_Output;
  name: String;
  description: String;
  ordering: Int;
  price: Float;
}

export interface CardItemSubscriptionPayload {
  mutation: MutationType;
  node?: CardItem;
  updatedFields?: String[];
  previousValues?: CardItemPreviousValues;
}

/*
 * A connection to a list of items.

 */
export interface RestaurantConnection {
  pageInfo: PageInfo;
  edges: RestaurantEdge[];
  aggregate: AggregateRestaurant;
}

export interface AggregateUser {
  count: Int;
}

/*
 * An edge in a connection.

 */
export interface CardItemEdge {
  node: CardItem;
  cursor: String;
}

/*
 * A connection to a list of items.

 */
export interface OrderItemConnection {
  pageInfo: PageInfo;
  edges: OrderItemEdge[];
  aggregate: AggregateOrderItem;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type DateTime = Date | string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;
