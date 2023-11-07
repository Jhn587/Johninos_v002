/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrderStatus = /* GraphQL */ `
  query GetOrderStatus($id: ID!) {
    getOrderStatus(id: $id) {
      id
      orderId
      customerId
      storeId
      order
      orderStatus
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderStatuses = /* GraphQL */ `
  query ListOrderStatuses(
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
        orderStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
