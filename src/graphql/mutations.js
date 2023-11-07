/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrderStatus = /* GraphQL */ `
  mutation CreateOrderStatus(
    $input: CreateOrderStatusInput!
    $condition: ModelOrderStatusConditionInput
  ) {
    createOrderStatus(input: $input, condition: $condition) {
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
export const updateOrderStatus = /* GraphQL */ `
  mutation UpdateOrderStatus(
    $input: UpdateOrderStatusInput!
    $condition: ModelOrderStatusConditionInput
  ) {
    updateOrderStatus(input: $input, condition: $condition) {
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
export const deleteOrderStatus = /* GraphQL */ `
  mutation DeleteOrderStatus(
    $input: DeleteOrderStatusInput!
    $condition: ModelOrderStatusConditionInput
  ) {
    deleteOrderStatus(input: $input, condition: $condition) {
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
