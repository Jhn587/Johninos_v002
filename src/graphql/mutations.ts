/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrderStatus = /* GraphQL */ `mutation CreateOrderStatus(
  $input: CreateOrderStatusInput!
  $condition: ModelOrderStatusConditionInput
) {
  createOrderStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderStatusMutationVariables,
  APITypes.CreateOrderStatusMutation
>;
export const updateOrderStatus = /* GraphQL */ `mutation UpdateOrderStatus(
  $input: UpdateOrderStatusInput!
  $condition: ModelOrderStatusConditionInput
) {
  updateOrderStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderStatusMutationVariables,
  APITypes.UpdateOrderStatusMutation
>;
export const deleteOrderStatus = /* GraphQL */ `mutation DeleteOrderStatus(
  $input: DeleteOrderStatusInput!
  $condition: ModelOrderStatusConditionInput
) {
  deleteOrderStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderStatusMutationVariables,
  APITypes.DeleteOrderStatusMutation
>;
