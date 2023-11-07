/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrderStatus = /* GraphQL */ `
  subscription OnCreateOrderStatus(
    $filter: ModelSubscriptionOrderStatusFilterInput
  ) {
    onCreateOrderStatus(filter: $filter) {
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
export const onUpdateOrderStatus = /* GraphQL */ `
  subscription OnUpdateOrderStatus(
    $filter: ModelSubscriptionOrderStatusFilterInput
  ) {
    onUpdateOrderStatus(filter: $filter) {
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
export const onDeleteOrderStatus = /* GraphQL */ `
  subscription OnDeleteOrderStatus(
    $filter: ModelSubscriptionOrderStatusFilterInput
  ) {
    onDeleteOrderStatus(filter: $filter) {
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
