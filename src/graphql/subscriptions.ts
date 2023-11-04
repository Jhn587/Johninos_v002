/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrderStatus = /* GraphQL */ `subscription OnCreateOrderStatus(
  $filter: ModelSubscriptionOrderStatusFilterInput
) {
  onCreateOrderStatus(filter: $filter) {
    id
    orderId
    customerId
    storeId
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderStatusSubscriptionVariables,
  APITypes.OnCreateOrderStatusSubscription
>;
export const onUpdateOrderStatus = /* GraphQL */ `subscription OnUpdateOrderStatus(
  $filter: ModelSubscriptionOrderStatusFilterInput
) {
  onUpdateOrderStatus(filter: $filter) {
    id
    orderId
    customerId
    storeId
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderStatusSubscriptionVariables,
  APITypes.OnUpdateOrderStatusSubscription
>;
export const onDeleteOrderStatus = /* GraphQL */ `subscription OnDeleteOrderStatus(
  $filter: ModelSubscriptionOrderStatusFilterInput
) {
  onDeleteOrderStatus(filter: $filter) {
    id
    orderId
    customerId
    storeId
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderStatusSubscriptionVariables,
  APITypes.OnDeleteOrderStatusSubscription
>;
