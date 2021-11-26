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

export const getPaymentCheckout = async (orderId, currency, amount, language) => {
  const getPaymentCheckoutQuery = `
    query($data: PaymentInput!, $language: Int!) {
      getPaymentCheckout(data: $data, language: $language) {
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
    data: { orderId, currency, amount },
    language
  });

  return result?.data?.getPaymentCheckout;
};

export const getOrderByPaidOrderNumber = async (paidOrderNumber) => {
  const getOrderByPaidOrderNumberQuery = `
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
  `;
  const result = await getItems(getOrderByPaidOrderNumberQuery, { paidOrderNumber });

  return result?.data?.getOrderByPaidOrderNumber;
};
