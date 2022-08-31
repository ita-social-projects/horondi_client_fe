import { gql } from '@apollo/client';
import { getItems, setItems } from '../../utils/client';

export const addOrder = async (order) => {
  const addOrderMutation = `
    mutation($order: OrderInput!) {
      addOrder(order: $order) {
        ... on Order {
          _id
          orderNumber
          recipient {
            firstName
            lastName
            phoneNumber
          }
          delivery {
            byCourier
            sentBy
            courierOffice
            city
            street
            house
          }
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
            fixedPrice
            quantity
            options {
              size {
                name
              }
            }
          }
          fixedExchangeRate
          totalPriceToPay
          paymentStatus
          promoCodeId
          certificateId
        }
        ... on Error {
          statusCode
          message
        }
      }
    }
  `;
  const result = await setItems(addOrderMutation, { order });
  return result?.data?.addOrder;
};

export const getPaymentCheckout = async (orderId, currency, amount) => {
  const getPaymentCheckoutQuery = `
    query($data: PaymentInput!) {
      getPaymentCheckout(data: $data) {
        ... on Order {
          _id
          recipient {
            firstName
            lastName
            phoneNumber
          }
          delivery {
            byCourier
            sentBy
            courierOffice
            city
            street
            house
          }
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
            fixedPrice
            quantity
            options {
              size {
                name
              }
            }
          }
          totalPriceToPay
          paymentStatus
        }
        ... on Error {
          statusCode
          message
        }
      }
    }
  `;
  const result = await getItems(getPaymentCheckoutQuery, {
    data: { orderId, currency, amount }
  });

  return result?.data?.getPaymentCheckout;
};

export const orderPaidSubscription = gql`
  subscription OrderPaid($orderId: String!) {
    paidOrder(orderId: $orderId) {
      __typename
      ... on Order {
        _id
        orderNumber
        recipient {
          firstName
          lastName
          email
          phoneNumber
        }
        delivery {
          sentBy
        }
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
          fixedPrice
          quantity
          options {
            size {
              name
            }
          }
        }
        totalPriceToPay
        paymentStatus
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;

export const sendOrderToEmail = gql`
  query ($language: Int!, $paidOrderNumber: String!) {
    sendOrderToEmail(language: $language, paidOrderNumber: $paidOrderNumber) {
      __typename
      ... on Order {
        _id
        orderNumber
        recipient {
          firstName
          lastName
          email
          phoneNumber
        }
        delivery {
          sentBy
        }
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
          fixedPrice
          quantity
          options {
            size {
              name
            }
          }
        }
        totalPriceToPay
        paymentStatus
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
