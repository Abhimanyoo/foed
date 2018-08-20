/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  token: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: changeOrderStatus
// ====================================================

export interface changeOrderStatus_changeOrderStatus {
  id: string;
  status: OrderStatus;
}

export interface changeOrderStatus {
  changeOrderStatus: changeOrderStatus_changeOrderStatus;
}

export interface changeOrderStatusVariables {
  id: string;
  status: OrderStatus;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: completeOrderItem
// ====================================================

export interface completeOrderItem_completeOrderItem {
  id: string;
  completedAt: GraphQLDateTime | null;
}

export interface completeOrderItem {
  completeOrderItem: completeOrderItem_completeOrderItem[];
}

export interface completeOrderItemVariables {
  ids: string[];
  complete: boolean;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: currentUserDetails
// ====================================================

export interface currentUserDetails_currentUser_employments_restaurant {
  id: string;
  name: string;
  imageUrl: string | null;
}

export interface currentUserDetails_currentUser_employments {
  id: string;
  restaurant: currentUserDetails_currentUser_employments_restaurant;
}

export interface currentUserDetails_currentUser {
  id: string;
  employments: currentUserDetails_currentUser_employments[] | null;
}

export interface currentUserDetails {
  currentUser: currentUserDetails_currentUser | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: restaurantInfoAndOrders
// ====================================================

export interface restaurantInfoAndOrders_restaurant {
  id: string;
  name: string;
}

export interface restaurantInfoAndOrders_unfinishedRestaurantOrders_items_cardItem {
  id: string;
  name: string;
}

export interface restaurantInfoAndOrders_unfinishedRestaurantOrders_items_options {
  id: string;
  name: string;
}

export interface restaurantInfoAndOrders_unfinishedRestaurantOrders_items {
  id: string;
  completedAt: GraphQLDateTime | null;
  cardItem: restaurantInfoAndOrders_unfinishedRestaurantOrders_items_cardItem;
  options: restaurantInfoAndOrders_unfinishedRestaurantOrders_items_options[] | null;
}

export interface restaurantInfoAndOrders_unfinishedRestaurantOrders {
  id: string;
  number: number | null;
  status: OrderStatus;
  items: restaurantInfoAndOrders_unfinishedRestaurantOrders_items[] | null;
}

export interface restaurantInfoAndOrders {
  restaurant: restaurantInfoAndOrders_restaurant | null;
  unfinishedRestaurantOrders: (restaurantInfoAndOrders_unfinishedRestaurantOrders | null)[];
}

export interface restaurantInfoAndOrdersVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OrderStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  PICKED_UP = "PICKED_UP",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
