/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOrderStatus = /* GraphQL */ `query GetOrderStatus($id: ID!) {
  getOrderStatus(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrderStatusQueryVariables,
  APITypes.GetOrderStatusQuery
>;
export const listOrderStatuses = /* GraphQL */ `query ListOrderStatuses(
  $filter: ModelOrderStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderId
      customerId
      storeId
      order
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderStatusesQueryVariables,
  APITypes.ListOrderStatusesQuery
>;
