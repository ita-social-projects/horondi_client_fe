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
  `;
  const result = await getItems(getPaymentCheckoutQuery, {
    data: { orderId, currency, amount }
  });

  return result?.data?.getPaymentCheckout;
};

export const getOrderByPaidOrderNumber = async (paidOrderNumber) => {
  const getOrderByPaidOrderNumberQuery = `
    query($paidOrderNumber: String!) {
      getOrderByPaidOrderNumber(paidOrderNumber: $paidOrderNumber) {
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
  `;
  const result = await getItems(getOrderByPaidOrderNumberQuery, { paidOrderNumber });

  return result?.data?.getOrderByPaidOrderNumber;
};

export const checkOrderPaymentStatus = async (orderId, language) => {
  const checkOrderPaymentStatusQuery = `
  query ($orderId: String!, $language: Int!) {
    checkOrderPaymentStatus(orderId: $orderId, language: $language) {
      ... on Order {
        _id
        orderNumber
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
  `;
  const result = await getItems(checkOrderPaymentStatusQuery, { orderId, language });

  return result?.data?.checkOrderPaymentStatus;
};
