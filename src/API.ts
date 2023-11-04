/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderStatusInput = {
  id?: string | null,
  orderId?: string | null,
  customerId?: string | null,
  storeId?: string | null,
  order?: string | null,
};

export type ModelOrderStatusConditionInput = {
  orderId?: ModelStringInput | null,
  customerId?: ModelStringInput | null,
  storeId?: ModelStringInput | null,
  order?: ModelStringInput | null,
  and?: Array< ModelOrderStatusConditionInput | null > | null,
  or?: Array< ModelOrderStatusConditionInput | null > | null,
  not?: ModelOrderStatusConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type OrderStatus = {
  __typename: "OrderStatus",
  id: string,
  orderId?: string | null,
  customerId?: string | null,
  storeId?: string | null,
  order?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderStatusInput = {
  id: string,
  orderId?: string | null,
  customerId?: string | null,
  storeId?: string | null,
  order?: string | null,
};

export type DeleteOrderStatusInput = {
  id: string,
};

export type ModelOrderStatusFilterInput = {
  id?: ModelIDInput | null,
  orderId?: ModelStringInput | null,
  customerId?: ModelStringInput | null,
  storeId?: ModelStringInput | null,
  order?: ModelStringInput | null,
  and?: Array< ModelOrderStatusFilterInput | null > | null,
  or?: Array< ModelOrderStatusFilterInput | null > | null,
  not?: ModelOrderStatusFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelOrderStatusConnection = {
  __typename: "ModelOrderStatusConnection",
  items:  Array<OrderStatus | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionOrderStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderId?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionStringInput | null,
  storeId?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderStatusFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderStatusFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateOrderStatusMutationVariables = {
  input: CreateOrderStatusInput,
  condition?: ModelOrderStatusConditionInput | null,
};

export type CreateOrderStatusMutation = {
  createOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderStatusMutationVariables = {
  input: UpdateOrderStatusInput,
  condition?: ModelOrderStatusConditionInput | null,
};

export type UpdateOrderStatusMutation = {
  updateOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderStatusMutationVariables = {
  input: DeleteOrderStatusInput,
  condition?: ModelOrderStatusConditionInput | null,
};

export type DeleteOrderStatusMutation = {
  deleteOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderStatusQueryVariables = {
  id: string,
};

export type GetOrderStatusQuery = {
  getOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrderStatusesQueryVariables = {
  filter?: ModelOrderStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderStatusesQuery = {
  listOrderStatuses?:  {
    __typename: "ModelOrderStatusConnection",
    items:  Array< {
      __typename: "OrderStatus",
      id: string,
      orderId?: string | null,
      customerId?: string | null,
      storeId?: string | null,
      order?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderStatusSubscriptionVariables = {
  filter?: ModelSubscriptionOrderStatusFilterInput | null,
};

export type OnCreateOrderStatusSubscription = {
  onCreateOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderStatusSubscriptionVariables = {
  filter?: ModelSubscriptionOrderStatusFilterInput | null,
};

export type OnUpdateOrderStatusSubscription = {
  onUpdateOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderStatusSubscriptionVariables = {
  filter?: ModelSubscriptionOrderStatusFilterInput | null,
};

export type OnDeleteOrderStatusSubscription = {
  onDeleteOrderStatus?:  {
    __typename: "OrderStatus",
    id: string,
    orderId?: string | null,
    customerId?: string | null,
    storeId?: string | null,
    order?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
