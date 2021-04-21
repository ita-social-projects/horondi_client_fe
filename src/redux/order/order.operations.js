import { gql } from '@apollo/client';
import { client } from '../../utils/client';

export const addOrder = async (order) => {
  const result = await client.mutate({
    variables: {
      order
    },
    mutation: gql`
      mutation($order: OrderInput!) {
        addOrder(order: $order) {
          ... on Order {
            _id
            items {
              product {
                name {
                  lang
                  value
                }
                images {
                  primary {
                    thumbnail
                  }
                }
              }
              fixedPrice {
                currency
                value
              }
              quantity
              options {
                size {
                  name
                }
              }
            }
            totalPriceToPay {
              currency
              value
            }
            paymentStatus
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return result.data.addOrder;
};

export const getPaymentCheckout = async (orderId, currency, amount) => {
  const res = await client.query({
    variables: {
      data: {
        orderId,
        currency,
        amount
      }
    },
    query: gql`
      query($data: PaymentInput!) {
        getPaymentCheckout(data: $data) {
          ... on Order {
            _id
            orderNumber
            paymentUrl
            items {
              product {
                name {
                  lang
                  value
                }
                images {
                  primary {
                    thumbnail
                  }
                }
              }
              fixedPrice {
                currency
                value
              }
              quantity
              options {
                size {
                  name
                }
              }
            }
            totalPriceToPay {
              currency
              value
            }
            paymentStatus
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  return res.data.getPaymentCheckout;
};
export const getOrderByPaidOrderNumber = async (paidOrderNumber) => {
  const res = await client.query({
    variables: {
      paidOrderNumber
    },
    query: gql`
      query($paidOrderNumber: String!) {
        getOrderByPaidOrderNumber(paidOrderNumber: $paidOrderNumber) {
          ... on Order {
            _id
            items {
              product {
                name {
                  lang
                  value
                }
                images {
                  primary {
                    thumbnail
                  }
                }
              }
              fixedPrice {
                currency
                value
              }
              quantity
              options {
                size {
                  name
                }
              }
            }
            totalPriceToPay {
              currency
              value
            }
            paymentStatus
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  return res.data.getOrderByPaidOrderNumber;
};
