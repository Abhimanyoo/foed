import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding';
import { GraphQLResolveInfo } from 'graphql';

export const typeDefs = `
type AggregateCard {
  count: Int!
}

type AggregateCardCategory {
  count: Int!
}

type AggregateCardItem {
  count: Int!
}

type AggregateEmployment {
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
  """
  The number of nodes that have been affected by the Batch operation.
  """
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

"""
A connection to a list of items.
"""
type CardCategoryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
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

"""
An edge in a connection.
"""
type CardCategoryEdge {
  """
  The item at the end of the edge.
  """
  node: CardCategory!
  """
  A cursor for use in pagination.
  """
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
  """
  Logical AND on all given filters.
  """
  AND: [CardCategorySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CardCategorySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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
  """
  Logical AND on all given filters.
  """
  AND: [CardCategoryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CardCategoryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CardCategoryWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  ordering: Int
  """
  All values that are not equal to given value.
  """
  ordering_not: Int
  """
  All values that are contained in given list.
  """
  ordering_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ordering_not_in: [Int!]
  """
  All values less than the given value.
  """
  ordering_lt: Int
  """
  All values less than or equal the given value.
  """
  ordering_lte: Int
  """
  All values greater than the given value.
  """
  ordering_gt: Int
  """
  All values greater than or equal the given value.
  """
  ordering_gte: Int
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  items_every: CardItemWhereInput
  items_some: CardItemWhereInput
  items_none: CardItemWhereInput
}

input CardCategoryWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type CardConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
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

"""
An edge in a connection.
"""
type CardEdge {
  """
  The item at the end of the edge.
  """
  node: Card!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

type CardItem implements Node {
  id: ID!
  name: String!
  description: String!
  ordering: Int!
  price: Float!
}

"""
A connection to a list of items.
"""
type CardItemConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CardItemEdge]!
  aggregate: AggregateCardItem!
}

input CardItemCreateInput {
  name: String!
  description: String!
  ordering: Int!
  price: Float!
}

input CardItemCreateManyInput {
  create: [CardItemCreateInput!]
  connect: [CardItemWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type CardItemEdge {
  """
  The item at the end of the edge.
  """
  node: CardItem!
  """
  A cursor for use in pagination.
  """
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
  """
  Logical AND on all given filters.
  """
  AND: [CardItemSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CardItemSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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
}

input CardItemUpdateInput {
  name: String
  description: String
  ordering: Int
  price: Float
}

input CardItemUpdateManyInput {
  create: [CardItemCreateInput!]
  connect: [CardItemWhereUniqueInput!]
  disconnect: [CardItemWhereUniqueInput!]
  delete: [CardItemWhereUniqueInput!]
  update: [CardItemUpdateWithWhereUniqueNestedInput!]
  upsert: [CardItemUpsertWithWhereUniqueNestedInput!]
}

input CardItemUpdateWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput!
  data: CardItemUpdateDataInput!
}

input CardItemUpsertWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput!
  update: CardItemUpdateDataInput!
  create: CardItemCreateInput!
}

input CardItemWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CardItemWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CardItemWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CardItemWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  ordering: Int
  """
  All values that are not equal to given value.
  """
  ordering_not: Int
  """
  All values that are contained in given list.
  """
  ordering_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ordering_not_in: [Int!]
  """
  All values less than the given value.
  """
  ordering_lt: Int
  """
  All values less than or equal the given value.
  """
  ordering_lte: Int
  """
  All values greater than the given value.
  """
  ordering_gt: Int
  """
  All values greater than or equal the given value.
  """
  ordering_gte: Int
  price: Float
  """
  All values that are not equal to given value.
  """
  price_not: Float
  """
  All values that are contained in given list.
  """
  price_in: [Float!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Float!]
  """
  All values less than the given value.
  """
  price_lt: Float
  """
  All values less than or equal the given value.
  """
  price_lte: Float
  """
  All values greater than the given value.
  """
  price_gt: Float
  """
  All values greater than or equal the given value.
  """
  price_gte: Float
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

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CardSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CardSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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
  """
  Logical AND on all given filters.
  """
  AND: [CardWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CardWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CardWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
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

"""
A connection to a list of items.
"""
type EmploymentConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
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

"""
An edge in a connection.
"""
type EmploymentEdge {
  """
  The item at the end of the edge.
  """
  node: Employment!
  """
  A cursor for use in pagination.
  """
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
  """
  Logical AND on all given filters.
  """
  AND: [EmploymentSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EmploymentSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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
  """
  Logical AND on all given filters.
  """
  AND: [EmploymentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EmploymentWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EmploymentWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  permission: RestaurantPermission
  """
  All values that are not equal to given value.
  """
  permission_not: RestaurantPermission
  """
  All values that are contained in given list.
  """
  permission_in: [RestaurantPermission!]
  """
  All values that are not contained in given list.
  """
  permission_not_in: [RestaurantPermission!]
  user: UserWhereInput
  restaurant: RestaurantWhereInput
}

input EmploymentWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

type Organization implements Node {
  id: ID!
  name: String!
  slug: String!
}

"""
A connection to a list of items.
"""
type OrganizationConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [OrganizationEdge]!
  aggregate: AggregateOrganization!
}

input OrganizationCreateInput {
  name: String!
  slug: String!
}

input OrganizationCreateOneInput {
  create: OrganizationCreateInput
  connect: OrganizationWhereUniqueInput
}

"""
An edge in a connection.
"""
type OrganizationEdge {
  """
  The item at the end of the edge.
  """
  node: Organization!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum OrganizationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrganizationPreviousValues {
  id: ID!
  name: String!
  slug: String!
}

type OrganizationSubscriptionPayload {
  mutation: MutationType!
  node: Organization
  updatedFields: [String!]
  previousValues: OrganizationPreviousValues
}

input OrganizationSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrganizationSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrganizationSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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

input OrganizationUpdateDataInput {
  name: String
  slug: String
}

input OrganizationUpdateInput {
  name: String
  slug: String
}

input OrganizationUpdateOneInput {
  create: OrganizationCreateInput
  connect: OrganizationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OrganizationUpdateDataInput
  upsert: OrganizationUpsertNestedInput
}

input OrganizationUpsertNestedInput {
  update: OrganizationUpdateDataInput!
  create: OrganizationCreateInput!
}

input OrganizationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrganizationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrganizationWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrganizationWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  slug: String
  """
  All values that are not equal to given value.
  """
  slug_not: String
  """
  All values that are contained in given list.
  """
  slug_in: [String!]
  """
  All values that are not contained in given list.
  """
  slug_not_in: [String!]
  """
  All values less than the given value.
  """
  slug_lt: String
  """
  All values less than or equal the given value.
  """
  slug_lte: String
  """
  All values greater than the given value.
  """
  slug_gt: String
  """
  All values greater than or equal the given value.
  """
  slug_gte: String
  """
  All values containing the given string.
  """
  slug_contains: String
  """
  All values not containing the given string.
  """
  slug_not_contains: String
  """
  All values starting with the given string.
  """
  slug_starts_with: String
  """
  All values not starting with the given string.
  """
  slug_not_starts_with: String
  """
  All values ending with the given string.
  """
  slug_ends_with: String
  """
  All values not ending with the given string.
  """
  slug_not_ends_with: String
}

input OrganizationWhereUniqueInput {
  id: ID
  slug: String
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Restaurant implements Node {
  id: ID!
  organization(where: OrganizationWhereInput): Organization
  name: String!
  slug: String!
  employments(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employment!]
  activeCard(where: CardWhereInput): Card
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
}

"""
A connection to a list of items.
"""
type RestaurantConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  name: String!
  slug: String!
  organization: OrganizationCreateOneInput
  employments: EmploymentCreateManyWithoutRestaurantInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
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
  organization: OrganizationCreateOneInput
  employments: EmploymentCreateManyWithoutRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
}

input RestaurantCreateWithoutCardsInput {
  name: String!
  slug: String!
  organization: OrganizationCreateOneInput
  employments: EmploymentCreateManyWithoutRestaurantInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
}

input RestaurantCreateWithoutEmploymentsInput {
  name: String!
  slug: String!
  organization: OrganizationCreateOneInput
  activeCard: CardCreateOneWithoutActiveRestaurantInput
  cards: CardCreateManyWithoutRestaurantInput
}

"""
An edge in a connection.
"""
type RestaurantEdge {
  """
  The item at the end of the edge.
  """
  node: Restaurant!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
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
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [RestaurantSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [RestaurantSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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

input RestaurantUpdateInput {
  name: String
  slug: String
  organization: OrganizationUpdateOneInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
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
  organization: OrganizationUpdateOneInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
}

input RestaurantUpdateWithoutCardsDataInput {
  name: String
  slug: String
  organization: OrganizationUpdateOneInput
  employments: EmploymentUpdateManyWithoutRestaurantInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
}

input RestaurantUpdateWithoutEmploymentsDataInput {
  name: String
  slug: String
  organization: OrganizationUpdateOneInput
  activeCard: CardUpdateOneWithoutActiveRestaurantInput
  cards: CardUpdateManyWithoutRestaurantInput
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

input RestaurantWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [RestaurantWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [RestaurantWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [RestaurantWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  slug: String
  """
  All values that are not equal to given value.
  """
  slug_not: String
  """
  All values that are contained in given list.
  """
  slug_in: [String!]
  """
  All values that are not contained in given list.
  """
  slug_not_in: [String!]
  """
  All values less than the given value.
  """
  slug_lt: String
  """
  All values less than or equal the given value.
  """
  slug_lte: String
  """
  All values greater than the given value.
  """
  slug_gt: String
  """
  All values greater than or equal the given value.
  """
  slug_gte: String
  """
  All values containing the given string.
  """
  slug_contains: String
  """
  All values not containing the given string.
  """
  slug_not_contains: String
  """
  All values starting with the given string.
  """
  slug_starts_with: String
  """
  All values not starting with the given string.
  """
  slug_not_starts_with: String
  """
  All values ending with the given string.
  """
  slug_ends_with: String
  """
  All values not ending with the given string.
  """
  slug_not_ends_with: String
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

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  inviteToken: String
  inviteAccepted: Boolean!
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  isSuper: Boolean!
  employments(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employment!]
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  inviteToken: String
  inviteAccepted: Boolean
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
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
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  isSuper: Boolean
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
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
  resetToken_ASC
  resetToken_DESC
  resetExpires_ASC
  resetExpires_DESC
  deletedAt_ASC
  deletedAt_DESC
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
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  isSuper: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
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
  resetToken: String
  resetExpires: DateTime
  deletedAt: DateTime
  isSuper: Boolean
}

input UserUpsertWithoutEmploymentsInput {
  update: UserUpdateWithoutEmploymentsDataInput!
  create: UserCreateWithoutEmploymentsInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  inviteToken: String
  """
  All values that are not equal to given value.
  """
  inviteToken_not: String
  """
  All values that are contained in given list.
  """
  inviteToken_in: [String!]
  """
  All values that are not contained in given list.
  """
  inviteToken_not_in: [String!]
  """
  All values less than the given value.
  """
  inviteToken_lt: String
  """
  All values less than or equal the given value.
  """
  inviteToken_lte: String
  """
  All values greater than the given value.
  """
  inviteToken_gt: String
  """
  All values greater than or equal the given value.
  """
  inviteToken_gte: String
  """
  All values containing the given string.
  """
  inviteToken_contains: String
  """
  All values not containing the given string.
  """
  inviteToken_not_contains: String
  """
  All values starting with the given string.
  """
  inviteToken_starts_with: String
  """
  All values not starting with the given string.
  """
  inviteToken_not_starts_with: String
  """
  All values ending with the given string.
  """
  inviteToken_ends_with: String
  """
  All values not ending with the given string.
  """
  inviteToken_not_ends_with: String
  inviteAccepted: Boolean
  """
  All values that are not equal to given value.
  """
  inviteAccepted_not: Boolean
  resetToken: String
  """
  All values that are not equal to given value.
  """
  resetToken_not: String
  """
  All values that are contained in given list.
  """
  resetToken_in: [String!]
  """
  All values that are not contained in given list.
  """
  resetToken_not_in: [String!]
  """
  All values less than the given value.
  """
  resetToken_lt: String
  """
  All values less than or equal the given value.
  """
  resetToken_lte: String
  """
  All values greater than the given value.
  """
  resetToken_gt: String
  """
  All values greater than or equal the given value.
  """
  resetToken_gte: String
  """
  All values containing the given string.
  """
  resetToken_contains: String
  """
  All values not containing the given string.
  """
  resetToken_not_contains: String
  """
  All values starting with the given string.
  """
  resetToken_starts_with: String
  """
  All values not starting with the given string.
  """
  resetToken_not_starts_with: String
  """
  All values ending with the given string.
  """
  resetToken_ends_with: String
  """
  All values not ending with the given string.
  """
  resetToken_not_ends_with: String
  resetExpires: DateTime
  """
  All values that are not equal to given value.
  """
  resetExpires_not: DateTime
  """
  All values that are contained in given list.
  """
  resetExpires_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  resetExpires_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  resetExpires_lt: DateTime
  """
  All values less than or equal the given value.
  """
  resetExpires_lte: DateTime
  """
  All values greater than the given value.
  """
  resetExpires_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  resetExpires_gte: DateTime
  deletedAt: DateTime
  """
  All values that are not equal to given value.
  """
  deletedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  deletedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  deletedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  deletedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  deletedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  deletedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  deletedAt_gte: DateTime
  isSuper: Boolean
  """
  All values that are not equal to given value.
  """
  isSuper_not: Boolean
  employments_every: EmploymentWhereInput
  employments_some: EmploymentWhereInput
  employments_none: EmploymentWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createOrganization(data: OrganizationCreateInput!): Organization!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  createEmployment(data: EmploymentCreateInput!): Employment!
  createUser(data: UserCreateInput!): User!
  createCard(data: CardCreateInput!): Card!
  createCardCategory(data: CardCategoryCreateInput!): CardCategory!
  createCardItem(data: CardItemCreateInput!): CardItem!
  updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateEmployment(data: EmploymentUpdateInput!, where: EmploymentWhereUniqueInput!): Employment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateCardCategory(data: CardCategoryUpdateInput!, where: CardCategoryWhereUniqueInput!): CardCategory
  updateCardItem(data: CardItemUpdateInput!, where: CardItemWhereUniqueInput!): CardItem
  deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteEmployment(where: EmploymentWhereUniqueInput!): Employment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteCardCategory(where: CardCategoryWhereUniqueInput!): CardCategory
  deleteCardItem(where: CardItemWhereUniqueInput!): CardItem
  upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  upsertEmployment(where: EmploymentWhereUniqueInput!, create: EmploymentCreateInput!, update: EmploymentUpdateInput!): Employment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  upsertCardCategory(where: CardCategoryWhereUniqueInput!, create: CardCategoryCreateInput!, update: CardCategoryUpdateInput!): CardCategory!
  upsertCardItem(where: CardItemWhereUniqueInput!, create: CardItemCreateInput!, update: CardItemUpdateInput!): CardItem!
  updateManyOrganizations(data: OrganizationUpdateInput!, where: OrganizationWhereInput): BatchPayload!
  updateManyRestaurants(data: RestaurantUpdateInput!, where: RestaurantWhereInput): BatchPayload!
  updateManyEmployments(data: EmploymentUpdateInput!, where: EmploymentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateInput!, where: CardWhereInput): BatchPayload!
  updateManyCardCategories(data: CardCategoryUpdateInput!, where: CardCategoryWhereInput): BatchPayload!
  updateManyCardItems(data: CardItemUpdateInput!, where: CardItemWhereInput): BatchPayload!
  deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
  deleteManyEmployments(where: EmploymentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  deleteManyCardCategories(where: CardCategoryWhereInput): BatchPayload!
  deleteManyCardItems(where: CardItemWhereInput): BatchPayload!
}

type Query {
  organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  employments(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  cardCategories(where: CardCategoryWhereInput, orderBy: CardCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardCategory]!
  cardItems(where: CardItemWhereInput, orderBy: CardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardItem]!
  organization(where: OrganizationWhereUniqueInput!): Organization
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  employment(where: EmploymentWhereUniqueInput!): Employment
  user(where: UserWhereUniqueInput!): User
  card(where: CardWhereUniqueInput!): Card
  cardCategory(where: CardCategoryWhereUniqueInput!): CardCategory
  cardItem(where: CardItemWhereUniqueInput!): CardItem
  organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  employmentsConnection(where: EmploymentWhereInput, orderBy: EmploymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmploymentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  cardCategoriesConnection(where: CardCategoryWhereInput, orderBy: CardCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardCategoryConnection!
  cardItemsConnection(where: CardItemWhereInput, orderBy: CardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardItemConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
  employment(where: EmploymentSubscriptionWhereInput): EmploymentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  cardCategory(where: CardCategorySubscriptionWhereInput): CardCategorySubscriptionPayload
  cardItem(where: CardItemSubscriptionWhereInput): CardItemSubscriptionPayload
}
`;

export type RestaurantOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type RestaurantPermission = 'EMPLOYEE' | 'ADMIN' | 'OWNER';

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

export type CardOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

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
  | 'resetToken_ASC'
  | 'resetToken_DESC'
  | 'resetExpires_ASC'
  | 'resetExpires_DESC'
  | 'deletedAt_ASC'
  | 'deletedAt_DESC'
  | 'isSuper_ASC'
  | 'isSuper_DESC'
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
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';

export interface RestaurantCreateWithoutActiveCardInput {
  name: String;
  slug: String;
  organization?: OrganizationCreateOneInput;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
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
}

export interface CardItemUpdateWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput;
  data: CardItemUpdateDataInput;
}

export interface CardCategoryUpdateWithWhereUniqueNestedInput {
  where: CardCategoryWhereUniqueInput;
  data: CardCategoryUpdateDataInput;
}

export interface OrganizationCreateInput {
  name: String;
  slug: String;
}

export interface EmploymentCreateWithoutUserInput {
  permission: RestaurantPermission;
  restaurant: RestaurantCreateOneWithoutEmploymentsInput;
}

export interface RestaurantCreateInput {
  name: String;
  slug: String;
  organization?: OrganizationCreateOneInput;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
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

export interface OrganizationCreateOneInput {
  create?: OrganizationCreateInput;
  connect?: OrganizationWhereUniqueInput;
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

export interface EmploymentCreateManyWithoutRestaurantInput {
  create?:
    | EmploymentCreateWithoutRestaurantInput[]
    | EmploymentCreateWithoutRestaurantInput;
  connect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
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

export interface EmploymentCreateWithoutRestaurantInput {
  permission: RestaurantPermission;
  user: UserCreateOneWithoutEmploymentsInput;
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

export interface UserCreateOneWithoutEmploymentsInput {
  create?: UserCreateWithoutEmploymentsInput;
  connect?: UserWhereUniqueInput;
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

export interface UserCreateWithoutEmploymentsInput {
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  isSuper?: Boolean;
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

export interface CardCreateOneWithoutActiveRestaurantInput {
  create?: CardCreateWithoutActiveRestaurantInput;
  connect?: CardWhereUniqueInput;
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

export interface CardCreateWithoutActiveRestaurantInput {
  name: String;
  restaurant: RestaurantCreateOneWithoutCardsInput;
  categories?: CardCategoryCreateManyInput;
}

export interface CardCategoryUpdateInput {
  name?: String;
  ordering?: Int;
  description?: String;
  items?: CardItemUpdateManyInput;
}

export interface RestaurantCreateOneWithoutCardsInput {
  create?: RestaurantCreateWithoutCardsInput;
  connect?: RestaurantWhereUniqueInput;
}

export interface RestaurantWhereUniqueInput {
  id?: ID_Input;
  slug?: String;
}

export interface RestaurantCreateWithoutCardsInput {
  name: String;
  slug: String;
  organization?: OrganizationCreateOneInput;
  employments?: EmploymentCreateManyWithoutRestaurantInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
}

export interface UserWhereUniqueInput {
  id?: ID_Input;
  email?: String;
}

export interface CardCategoryCreateManyInput {
  create?: CardCategoryCreateInput[] | CardCategoryCreateInput;
  connect?: CardCategoryWhereUniqueInput[] | CardCategoryWhereUniqueInput;
}

export interface CardCategoryWhereUniqueInput {
  id?: ID_Input;
}

export interface CardCategoryCreateInput {
  name: String;
  ordering: Int;
  description: String;
  items?: CardItemCreateManyInput;
}

export interface CardUpdateInput {
  name?: String;
  restaurant?: RestaurantUpdateOneWithoutCardsInput;
  activeRestaurant?: RestaurantUpdateOneWithoutActiveCardInput;
  categories?: CardCategoryUpdateManyInput;
}

export interface CardItemCreateManyInput {
  create?: CardItemCreateInput[] | CardItemCreateInput;
  connect?: CardItemWhereUniqueInput[] | CardItemWhereUniqueInput;
}

export interface EmploymentUpdateWithoutUserDataInput {
  permission?: RestaurantPermission;
  restaurant?: RestaurantUpdateOneWithoutEmploymentsInput;
}

export interface CardItemCreateInput {
  name: String;
  description: String;
  ordering: Int;
  price: Float;
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

export interface CardCreateManyWithoutRestaurantInput {
  create?:
    | CardCreateWithoutRestaurantInput[]
    | CardCreateWithoutRestaurantInput;
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput;
}

export interface RestaurantUpsertWithoutEmploymentsInput {
  update: RestaurantUpdateWithoutEmploymentsDataInput;
  create: RestaurantCreateWithoutEmploymentsInput;
}

export interface CardCreateWithoutRestaurantInput {
  name: String;
  activeRestaurant?: RestaurantCreateOneWithoutActiveCardInput;
  categories?: CardCategoryCreateManyInput;
}

export interface RestaurantUpdateOneWithoutEmploymentsInput {
  create?: RestaurantCreateWithoutEmploymentsInput;
  connect?: RestaurantWhereUniqueInput;
  delete?: Boolean;
  update?: RestaurantUpdateWithoutEmploymentsDataInput;
  upsert?: RestaurantUpsertWithoutEmploymentsInput;
}

export interface RestaurantCreateOneWithoutActiveCardInput {
  create?: RestaurantCreateWithoutActiveCardInput;
  connect?: RestaurantWhereUniqueInput;
}

export interface CardUpsertWithWhereUniqueWithoutRestaurantInput {
  where: CardWhereUniqueInput;
  update: CardUpdateWithoutRestaurantDataInput;
  create: CardCreateWithoutRestaurantInput;
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

export interface RestaurantUpdateWithoutActiveCardDataInput {
  name?: String;
  slug?: String;
  organization?: OrganizationUpdateOneInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface EmploymentCreateInput {
  permission: RestaurantPermission;
  user: UserCreateOneWithoutEmploymentsInput;
  restaurant: RestaurantCreateOneWithoutEmploymentsInput;
}

export interface CardUpdateWithoutRestaurantDataInput {
  name?: String;
  activeRestaurant?: RestaurantUpdateOneWithoutActiveCardInput;
  categories?: CardCategoryUpdateManyInput;
}

export interface RestaurantCreateOneWithoutEmploymentsInput {
  create?: RestaurantCreateWithoutEmploymentsInput;
  connect?: RestaurantWhereUniqueInput;
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

export interface RestaurantCreateWithoutEmploymentsInput {
  name: String;
  slug: String;
  organization?: OrganizationCreateOneInput;
  activeCard?: CardCreateOneWithoutActiveRestaurantInput;
  cards?: CardCreateManyWithoutRestaurantInput;
}

export interface CardCategoryUpsertWithWhereUniqueNestedInput {
  where: CardCategoryWhereUniqueInput;
  update: CardCategoryUpdateDataInput;
  create: CardCategoryCreateInput;
}

export interface UserCreateInput {
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  isSuper?: Boolean;
  employments?: EmploymentCreateManyWithoutUserInput;
}

export interface CardItemUpdateDataInput {
  name?: String;
  description?: String;
  ordering?: Int;
  price?: Float;
}

export interface EmploymentCreateManyWithoutUserInput {
  create?:
    | EmploymentCreateWithoutUserInput[]
    | EmploymentCreateWithoutUserInput;
  connect?: EmploymentWhereUniqueInput[] | EmploymentWhereUniqueInput;
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
}

export interface CardCategoryUpdateDataInput {
  name?: String;
  ordering?: Int;
  description?: String;
  items?: CardItemUpdateManyInput;
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

export interface CardCreateInput {
  name: String;
  restaurant: RestaurantCreateOneWithoutCardsInput;
  activeRestaurant?: RestaurantCreateOneWithoutActiveCardInput;
  categories?: CardCategoryCreateManyInput;
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
  organization?: OrganizationWhereInput;
  employments_every?: EmploymentWhereInput;
  employments_some?: EmploymentWhereInput;
  employments_none?: EmploymentWhereInput;
  activeCard?: CardWhereInput;
  cards_every?: CardWhereInput;
  cards_some?: CardWhereInput;
  cards_none?: CardWhereInput;
}

export interface OrganizationUpdateInput {
  name?: String;
  slug?: String;
}

export interface CardItemUpdateInput {
  name?: String;
  description?: String;
  ordering?: Int;
  price?: Float;
}

export interface RestaurantUpdateInput {
  name?: String;
  slug?: String;
  organization?: OrganizationUpdateOneInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
}

export interface EmploymentWhereUniqueInput {
  id?: ID_Input;
}

export interface OrganizationUpdateOneInput {
  create?: OrganizationCreateInput;
  connect?: OrganizationWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: OrganizationUpdateDataInput;
  upsert?: OrganizationUpsertNestedInput;
}

export interface CardItemWhereUniqueInput {
  id?: ID_Input;
}

export interface OrganizationUpdateDataInput {
  name?: String;
  slug?: String;
}

export interface EmploymentUpdateWithWhereUniqueWithoutUserInput {
  where: EmploymentWhereUniqueInput;
  data: EmploymentUpdateWithoutUserDataInput;
}

export interface OrganizationUpsertNestedInput {
  update: OrganizationUpdateDataInput;
  create: OrganizationCreateInput;
}

export interface RestaurantUpdateWithoutEmploymentsDataInput {
  name?: String;
  slug?: String;
  organization?: OrganizationUpdateOneInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
  cards?: CardUpdateManyWithoutRestaurantInput;
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

export interface RestaurantUpsertWithoutActiveCardInput {
  update: RestaurantUpdateWithoutActiveCardDataInput;
  create: RestaurantCreateWithoutActiveCardInput;
}

export interface EmploymentUpdateWithWhereUniqueWithoutRestaurantInput {
  where: EmploymentWhereUniqueInput;
  data: EmploymentUpdateWithoutRestaurantDataInput;
}

export interface CardUpdateWithWhereUniqueWithoutRestaurantInput {
  where: CardWhereUniqueInput;
  data: CardUpdateWithoutRestaurantDataInput;
}

export interface EmploymentUpdateWithoutRestaurantDataInput {
  permission?: RestaurantPermission;
  user?: UserUpdateOneWithoutEmploymentsInput;
}

export interface CardItemUpsertWithWhereUniqueNestedInput {
  where: CardItemWhereUniqueInput;
  update: CardItemUpdateDataInput;
  create: CardItemCreateInput;
}

export interface UserUpdateOneWithoutEmploymentsInput {
  create?: UserCreateWithoutEmploymentsInput;
  connect?: UserWhereUniqueInput;
  delete?: Boolean;
  update?: UserUpdateWithoutEmploymentsDataInput;
  upsert?: UserUpsertWithoutEmploymentsInput;
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
  isSuper?: Boolean;
  isSuper_not?: Boolean;
  employments_every?: EmploymentWhereInput;
  employments_some?: EmploymentWhereInput;
  employments_none?: EmploymentWhereInput;
}

export interface UserUpdateWithoutEmploymentsDataInput {
  email?: String;
  password?: String;
  name?: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  isSuper?: Boolean;
}

export interface CardWhereUniqueInput {
  id?: ID_Input;
}

export interface UserUpsertWithoutEmploymentsInput {
  update: UserUpdateWithoutEmploymentsDataInput;
  create: UserCreateWithoutEmploymentsInput;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  name?: String;
  inviteToken?: String;
  inviteAccepted?: Boolean;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  isSuper?: Boolean;
  employments?: EmploymentUpdateManyWithoutUserInput;
}

export interface EmploymentUpsertWithWhereUniqueWithoutRestaurantInput {
  where: EmploymentWhereUniqueInput;
  update: EmploymentUpdateWithoutRestaurantDataInput;
  create: EmploymentCreateWithoutRestaurantInput;
}

export interface RestaurantUpdateOneWithoutActiveCardInput {
  create?: RestaurantCreateWithoutActiveCardInput;
  connect?: RestaurantWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: RestaurantUpdateWithoutActiveCardDataInput;
  upsert?: RestaurantUpsertWithoutActiveCardInput;
}

export interface CardUpdateOneWithoutActiveRestaurantInput {
  create?: CardCreateWithoutActiveRestaurantInput;
  connect?: CardWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: CardUpdateWithoutActiveRestaurantDataInput;
  upsert?: CardUpsertWithoutActiveRestaurantInput;
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

export interface CardUpdateWithoutActiveRestaurantDataInput {
  name?: String;
  restaurant?: RestaurantUpdateOneWithoutCardsInput;
  categories?: CardCategoryUpdateManyInput;
}

export interface OrganizationWhereUniqueInput {
  id?: ID_Input;
  slug?: String;
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

export interface RestaurantUpsertWithoutCardsInput {
  update: RestaurantUpdateWithoutCardsDataInput;
  create: RestaurantCreateWithoutCardsInput;
}

export interface RestaurantUpdateWithoutCardsDataInput {
  name?: String;
  slug?: String;
  organization?: OrganizationUpdateOneInput;
  employments?: EmploymentUpdateManyWithoutRestaurantInput;
  activeCard?: CardUpdateOneWithoutActiveRestaurantInput;
}

export interface RestaurantUpdateOneWithoutCardsInput {
  create?: RestaurantCreateWithoutCardsInput;
  connect?: RestaurantWhereUniqueInput;
  delete?: Boolean;
  update?: RestaurantUpdateWithoutCardsDataInput;
  upsert?: RestaurantUpsertWithoutCardsInput;
}

export interface EmploymentUpsertWithWhereUniqueWithoutUserInput {
  where: EmploymentWhereUniqueInput;
  update: EmploymentUpdateWithoutUserDataInput;
  create: EmploymentCreateWithoutUserInput;
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

export interface CardUpsertWithoutActiveRestaurantInput {
  update: CardUpdateWithoutActiveRestaurantDataInput;
  create: CardCreateWithoutActiveRestaurantInput;
}

export interface EmploymentUpdateInput {
  permission?: RestaurantPermission;
  user?: UserUpdateOneWithoutEmploymentsInput;
  restaurant?: RestaurantUpdateOneWithoutEmploymentsInput;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface CardItemPreviousValues {
  id: ID_Output;
  name: String;
  description: String;
  ordering: Int;
  price: Float;
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

export interface CardPreviousValues {
  id: ID_Output;
  name: String;
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
}

export interface CardItemSubscriptionPayload {
  mutation: MutationType;
  node?: CardItem;
  updatedFields?: String[];
  previousValues?: CardItemPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface CardItemEdge {
  node: CardItem;
  cursor: String;
}

export interface CardCategoryPreviousValues {
  id: ID_Output;
  name: String;
  ordering: Int;
  description: String;
}

export interface AggregateCardCategory {
  count: Int;
}

export interface BatchPayload {
  count: Long;
}

/*
 * A connection to a list of items.

 */
export interface CardCategoryConnection {
  pageInfo: PageInfo;
  edges: CardCategoryEdge[];
  aggregate: AggregateCardCategory;
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
export interface CardEdge {
  node: Card;
  cursor: String;
}

export interface CardItem extends Node {
  id: ID_Output;
  name: String;
  description: String;
  ordering: Int;
  price: Float;
}

export interface AggregateUser {
  count: Int;
}

export interface Restaurant extends Node {
  id: ID_Output;
  organization?: Organization;
  name: String;
  slug: String;
  employments?: Employment[];
  activeCard?: Card;
  cards?: Card[];
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
  aggregate: AggregateUser;
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
export interface EmploymentEdge {
  node: Employment;
  cursor: String;
}

export interface OrganizationPreviousValues {
  id: ID_Output;
  name: String;
  slug: String;
}

export interface AggregateRestaurant {
  count: Int;
}

export interface CardCategory extends Node {
  id: ID_Output;
  name: String;
  ordering: Int;
  description: String;
  items?: CardItem[];
}

/*
 * A connection to a list of items.

 */
export interface RestaurantConnection {
  pageInfo: PageInfo;
  edges: RestaurantEdge[];
  aggregate: AggregateRestaurant;
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
export interface OrganizationEdge {
  node: Organization;
  cursor: String;
}

export interface RestaurantPreviousValues {
  id: ID_Output;
  name: String;
  slug: String;
}

/*
 * A connection to a list of items.

 */
export interface CardItemConnection {
  pageInfo: PageInfo;
  edges: CardItemEdge[];
  aggregate: AggregateCardItem;
}

export interface Card extends Node {
  id: ID_Output;
  name: String;
  restaurant: Restaurant;
  activeRestaurant?: Restaurant;
  categories?: CardCategory[];
}

export interface AggregateCard {
  count: Int;
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
export interface UserEdge {
  node: User;
  cursor: String;
}

export interface EmploymentPreviousValues {
  id: ID_Output;
  permission: RestaurantPermission;
}

/*
 * A connection to a list of items.

 */
export interface EmploymentConnection {
  pageInfo: PageInfo;
  edges: EmploymentEdge[];
  aggregate: AggregateEmployment;
}

export interface User extends Node {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted: Boolean;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  isSuper: Boolean;
  employments?: Employment[];
}

export interface AggregateOrganization {
  count: Int;
}

/*
 * An edge in a connection.

 */
export interface CardCategoryEdge {
  node: CardCategory;
  cursor: String;
}

export interface CardSubscriptionPayload {
  mutation: MutationType;
  node?: Card;
  updatedFields?: String[];
  previousValues?: CardPreviousValues;
}

export interface Employment extends Node {
  id: ID_Output;
  user: User;
  restaurant: Restaurant;
  permission: RestaurantPermission;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
  inviteToken?: String;
  inviteAccepted: Boolean;
  resetToken?: String;
  resetExpires?: DateTime;
  deletedAt?: DateTime;
  isSuper: Boolean;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node?: User;
  updatedFields?: String[];
  previousValues?: UserPreviousValues;
}

/*
 * A connection to a list of items.

 */
export interface CardConnection {
  pageInfo: PageInfo;
  edges: CardEdge[];
  aggregate: AggregateCard;
}

export interface AggregateCardItem {
  count: Int;
}

/*
 * An edge in a connection.

 */
export interface RestaurantEdge {
  node: Restaurant;
  cursor: String;
}

export interface AggregateEmployment {
  count: Int;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type DateTime = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

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
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export interface Schema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type Query = {
  organizations: (
    args: {
      where?: OrganizationWhereInput;
      orderBy?: OrganizationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Organization[]>;
  restaurants: (
    args: {
      where?: RestaurantWhereInput;
      orderBy?: RestaurantOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Restaurant[]>;
  employments: (
    args: {
      where?: EmploymentWhereInput;
      orderBy?: EmploymentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Employment[]>;
  users: (
    args: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<User[]>;
  cards: (
    args: {
      where?: CardWhereInput;
      orderBy?: CardOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Card[]>;
  cardCategories: (
    args: {
      where?: CardCategoryWhereInput;
      orderBy?: CardCategoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategory[]>;
  cardItems: (
    args: {
      where?: CardItemWhereInput;
      orderBy?: CardItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItem[]>;
  organization: (
    args: { where: OrganizationWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Organization | null>;
  restaurant: (
    args: { where: RestaurantWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Restaurant | null>;
  employment: (
    args: { where: EmploymentWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Employment | null>;
  user: (
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<User | null>;
  card: (
    args: { where: CardWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Card | null>;
  cardCategory: (
    args: { where: CardCategoryWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategory | null>;
  cardItem: (
    args: { where: CardItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItem | null>;
  organizationsConnection: (
    args: {
      where?: OrganizationWhereInput;
      orderBy?: OrganizationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<OrganizationConnection>;
  restaurantsConnection: (
    args: {
      where?: RestaurantWhereInput;
      orderBy?: RestaurantOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<RestaurantConnection>;
  employmentsConnection: (
    args: {
      where?: EmploymentWhereInput;
      orderBy?: EmploymentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<EmploymentConnection>;
  usersConnection: (
    args: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<UserConnection>;
  cardsConnection: (
    args: {
      where?: CardWhereInput;
      orderBy?: CardOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardConnection>;
  cardCategoriesConnection: (
    args: {
      where?: CardCategoryWhereInput;
      orderBy?: CardCategoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategoryConnection>;
  cardItemsConnection: (
    args: {
      where?: CardItemWhereInput;
      orderBy?: CardItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItemConnection>;
  node: (
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string
  ) => Promise<Node | null>;
};

export type Mutation = {
  createOrganization: (
    args: { data: OrganizationCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Organization>;
  createRestaurant: (
    args: { data: RestaurantCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Restaurant>;
  createEmployment: (
    args: { data: EmploymentCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Employment>;
  createUser: (
    args: { data: UserCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<User>;
  createCard: (
    args: { data: CardCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Card>;
  createCardCategory: (
    args: { data: CardCategoryCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategory>;
  createCardItem: (
    args: { data: CardItemCreateInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItem>;
  updateOrganization: (
    args: {
      data: OrganizationUpdateInput;
      where: OrganizationWhereUniqueInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Organization | null>;
  updateRestaurant: (
    args: { data: RestaurantUpdateInput; where: RestaurantWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Restaurant | null>;
  updateEmployment: (
    args: { data: EmploymentUpdateInput; where: EmploymentWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Employment | null>;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<User | null>;
  updateCard: (
    args: { data: CardUpdateInput; where: CardWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Card | null>;
  updateCardCategory: (
    args: {
      data: CardCategoryUpdateInput;
      where: CardCategoryWhereUniqueInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategory | null>;
  updateCardItem: (
    args: { data: CardItemUpdateInput; where: CardItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItem | null>;
  deleteOrganization: (
    args: { where: OrganizationWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Organization | null>;
  deleteRestaurant: (
    args: { where: RestaurantWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Restaurant | null>;
  deleteEmployment: (
    args: { where: EmploymentWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Employment | null>;
  deleteUser: (
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<User | null>;
  deleteCard: (
    args: { where: CardWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<Card | null>;
  deleteCardCategory: (
    args: { where: CardCategoryWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategory | null>;
  deleteCardItem: (
    args: { where: CardItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItem | null>;
  upsertOrganization: (
    args: {
      where: OrganizationWhereUniqueInput;
      create: OrganizationCreateInput;
      update: OrganizationUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Organization>;
  upsertRestaurant: (
    args: {
      where: RestaurantWhereUniqueInput;
      create: RestaurantCreateInput;
      update: RestaurantUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Restaurant>;
  upsertEmployment: (
    args: {
      where: EmploymentWhereUniqueInput;
      create: EmploymentCreateInput;
      update: EmploymentUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Employment>;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<User>;
  upsertCard: (
    args: {
      where: CardWhereUniqueInput;
      create: CardCreateInput;
      update: CardUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<Card>;
  upsertCardCategory: (
    args: {
      where: CardCategoryWhereUniqueInput;
      create: CardCategoryCreateInput;
      update: CardCategoryUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardCategory>;
  upsertCardItem: (
    args: {
      where: CardItemWhereUniqueInput;
      create: CardItemCreateInput;
      update: CardItemUpdateInput;
    },
    info?: GraphQLResolveInfo | string
  ) => Promise<CardItem>;
  updateManyOrganizations: (
    args: { data: OrganizationUpdateInput; where?: OrganizationWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  updateManyRestaurants: (
    args: { data: RestaurantUpdateInput; where?: RestaurantWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  updateManyEmployments: (
    args: { data: EmploymentUpdateInput; where?: EmploymentWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  updateManyCards: (
    args: { data: CardUpdateInput; where?: CardWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  updateManyCardCategories: (
    args: { data: CardCategoryUpdateInput; where?: CardCategoryWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  updateManyCardItems: (
    args: { data: CardItemUpdateInput; where?: CardItemWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyOrganizations: (
    args: { where?: OrganizationWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyRestaurants: (
    args: { where?: RestaurantWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyEmployments: (
    args: { where?: EmploymentWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyUsers: (
    args: { where?: UserWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyCards: (
    args: { where?: CardWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyCardCategories: (
    args: { where?: CardCategoryWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
  deleteManyCardItems: (
    args: { where?: CardItemWhereInput },
    info?: GraphQLResolveInfo | string
  ) => Promise<BatchPayload>;
};

export type Subscription = {
  organization: (
    args: { where?: OrganizationSubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<OrganizationSubscriptionPayload>>;
  restaurant: (
    args: { where?: RestaurantSubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<RestaurantSubscriptionPayload>>;
  employment: (
    args: { where?: EmploymentSubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<EmploymentSubscriptionPayload>>;
  user: (
    args: { where?: UserSubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<UserSubscriptionPayload>>;
  card: (
    args: { where?: CardSubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<CardSubscriptionPayload>>;
  cardCategory: (
    args: { where?: CardCategorySubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<CardCategorySubscriptionPayload>>;
  cardItem: (
    args: { where?: CardItemSubscriptionWhereInput },
    infoOrQuery?: GraphQLResolveInfo | string
  ) => Promise<AsyncIterator<CardItemSubscriptionPayload>>;
};

export class Prisma extends BasePrisma {
  constructor({
    endpoint,
    secret,
    fragmentReplacements,
    debug,
  }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Organization: (where: OrganizationWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'organizations', { where }, {}, '{ id }'),
    Restaurant: (where: RestaurantWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'restaurants', { where }, {}, '{ id }'),
    Employment: (where: EmploymentWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'employments', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Card: (where: CardWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'cards', { where }, {}, '{ id }'),
    CardCategory: (where: CardCategoryWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'cardCategories', { where }, {}, '{ id }'),
    CardItem: (where: CardItemWhereInput): Promise<boolean> =>
      super.existsDelegate('query', 'cardItems', { where }, {}, '{ id }'),
  };

  query: Query = {
    organizations: (args, info): Promise<Organization[]> =>
      super.delegate('query', 'organizations', args, {}, info),
    restaurants: (args, info): Promise<Restaurant[]> =>
      super.delegate('query', 'restaurants', args, {}, info),
    employments: (args, info): Promise<Employment[]> =>
      super.delegate('query', 'employments', args, {}, info),
    users: (args, info): Promise<User[]> =>
      super.delegate('query', 'users', args, {}, info),
    cards: (args, info): Promise<Card[]> =>
      super.delegate('query', 'cards', args, {}, info),
    cardCategories: (args, info): Promise<CardCategory[]> =>
      super.delegate('query', 'cardCategories', args, {}, info),
    cardItems: (args, info): Promise<CardItem[]> =>
      super.delegate('query', 'cardItems', args, {}, info),
    organization: (args, info): Promise<Organization | null> =>
      super.delegate('query', 'organization', args, {}, info),
    restaurant: (args, info): Promise<Restaurant | null> =>
      super.delegate('query', 'restaurant', args, {}, info),
    employment: (args, info): Promise<Employment | null> =>
      super.delegate('query', 'employment', args, {}, info),
    user: (args, info): Promise<User | null> =>
      super.delegate('query', 'user', args, {}, info),
    card: (args, info): Promise<Card | null> =>
      super.delegate('query', 'card', args, {}, info),
    cardCategory: (args, info): Promise<CardCategory | null> =>
      super.delegate('query', 'cardCategory', args, {}, info),
    cardItem: (args, info): Promise<CardItem | null> =>
      super.delegate('query', 'cardItem', args, {}, info),
    organizationsConnection: (args, info): Promise<OrganizationConnection> =>
      super.delegate('query', 'organizationsConnection', args, {}, info),
    restaurantsConnection: (args, info): Promise<RestaurantConnection> =>
      super.delegate('query', 'restaurantsConnection', args, {}, info),
    employmentsConnection: (args, info): Promise<EmploymentConnection> =>
      super.delegate('query', 'employmentsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> =>
      super.delegate('query', 'usersConnection', args, {}, info),
    cardsConnection: (args, info): Promise<CardConnection> =>
      super.delegate('query', 'cardsConnection', args, {}, info),
    cardCategoriesConnection: (args, info): Promise<CardCategoryConnection> =>
      super.delegate('query', 'cardCategoriesConnection', args, {}, info),
    cardItemsConnection: (args, info): Promise<CardItemConnection> =>
      super.delegate('query', 'cardItemsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> =>
      super.delegate('query', 'node', args, {}, info),
  };

  mutation: Mutation = {
    createOrganization: (args, info): Promise<Organization> =>
      super.delegate('mutation', 'createOrganization', args, {}, info),
    createRestaurant: (args, info): Promise<Restaurant> =>
      super.delegate('mutation', 'createRestaurant', args, {}, info),
    createEmployment: (args, info): Promise<Employment> =>
      super.delegate('mutation', 'createEmployment', args, {}, info),
    createUser: (args, info): Promise<User> =>
      super.delegate('mutation', 'createUser', args, {}, info),
    createCard: (args, info): Promise<Card> =>
      super.delegate('mutation', 'createCard', args, {}, info),
    createCardCategory: (args, info): Promise<CardCategory> =>
      super.delegate('mutation', 'createCardCategory', args, {}, info),
    createCardItem: (args, info): Promise<CardItem> =>
      super.delegate('mutation', 'createCardItem', args, {}, info),
    updateOrganization: (args, info): Promise<Organization | null> =>
      super.delegate('mutation', 'updateOrganization', args, {}, info),
    updateRestaurant: (args, info): Promise<Restaurant | null> =>
      super.delegate('mutation', 'updateRestaurant', args, {}, info),
    updateEmployment: (args, info): Promise<Employment | null> =>
      super.delegate('mutation', 'updateEmployment', args, {}, info),
    updateUser: (args, info): Promise<User | null> =>
      super.delegate('mutation', 'updateUser', args, {}, info),
    updateCard: (args, info): Promise<Card | null> =>
      super.delegate('mutation', 'updateCard', args, {}, info),
    updateCardCategory: (args, info): Promise<CardCategory | null> =>
      super.delegate('mutation', 'updateCardCategory', args, {}, info),
    updateCardItem: (args, info): Promise<CardItem | null> =>
      super.delegate('mutation', 'updateCardItem', args, {}, info),
    deleteOrganization: (args, info): Promise<Organization | null> =>
      super.delegate('mutation', 'deleteOrganization', args, {}, info),
    deleteRestaurant: (args, info): Promise<Restaurant | null> =>
      super.delegate('mutation', 'deleteRestaurant', args, {}, info),
    deleteEmployment: (args, info): Promise<Employment | null> =>
      super.delegate('mutation', 'deleteEmployment', args, {}, info),
    deleteUser: (args, info): Promise<User | null> =>
      super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteCard: (args, info): Promise<Card | null> =>
      super.delegate('mutation', 'deleteCard', args, {}, info),
    deleteCardCategory: (args, info): Promise<CardCategory | null> =>
      super.delegate('mutation', 'deleteCardCategory', args, {}, info),
    deleteCardItem: (args, info): Promise<CardItem | null> =>
      super.delegate('mutation', 'deleteCardItem', args, {}, info),
    upsertOrganization: (args, info): Promise<Organization> =>
      super.delegate('mutation', 'upsertOrganization', args, {}, info),
    upsertRestaurant: (args, info): Promise<Restaurant> =>
      super.delegate('mutation', 'upsertRestaurant', args, {}, info),
    upsertEmployment: (args, info): Promise<Employment> =>
      super.delegate('mutation', 'upsertEmployment', args, {}, info),
    upsertUser: (args, info): Promise<User> =>
      super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertCard: (args, info): Promise<Card> =>
      super.delegate('mutation', 'upsertCard', args, {}, info),
    upsertCardCategory: (args, info): Promise<CardCategory> =>
      super.delegate('mutation', 'upsertCardCategory', args, {}, info),
    upsertCardItem: (args, info): Promise<CardItem> =>
      super.delegate('mutation', 'upsertCardItem', args, {}, info),
    updateManyOrganizations: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyOrganizations', args, {}, info),
    updateManyRestaurants: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyRestaurants', args, {}, info),
    updateManyEmployments: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyEmployments', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyCards: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyCards', args, {}, info),
    updateManyCardCategories: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyCardCategories', args, {}, info),
    updateManyCardItems: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'updateManyCardItems', args, {}, info),
    deleteManyOrganizations: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyOrganizations', args, {}, info),
    deleteManyRestaurants: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyRestaurants', args, {}, info),
    deleteManyEmployments: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyEmployments', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyCards: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyCards', args, {}, info),
    deleteManyCardCategories: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyCardCategories', args, {}, info),
    deleteManyCardItems: (args, info): Promise<BatchPayload> =>
      super.delegate('mutation', 'deleteManyCardItems', args, {}, info),
  };

  subscription: Subscription = {
    organization: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<OrganizationSubscriptionPayload>> =>
      super.delegateSubscription('organization', args, {}, infoOrQuery),
    restaurant: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<RestaurantSubscriptionPayload>> =>
      super.delegateSubscription('restaurant', args, {}, infoOrQuery),
    employment: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<EmploymentSubscriptionPayload>> =>
      super.delegateSubscription('employment', args, {}, infoOrQuery),
    user: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<UserSubscriptionPayload>> =>
      super.delegateSubscription('user', args, {}, infoOrQuery),
    card: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<CardSubscriptionPayload>> =>
      super.delegateSubscription('card', args, {}, infoOrQuery),
    cardCategory: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<CardCategorySubscriptionPayload>> =>
      super.delegateSubscription('cardCategory', args, {}, infoOrQuery),
    cardItem: (
      args,
      infoOrQuery
    ): Promise<AsyncIterator<CardItemSubscriptionPayload>> =>
      super.delegateSubscription('cardItem', args, {}, infoOrQuery),
  };
}
