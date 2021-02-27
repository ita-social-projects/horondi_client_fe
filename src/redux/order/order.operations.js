import { gql } from '@apollo/client';
import { client } from '../../utils/client';

export const addOrder = async (order) => {
  console.log(order);
  const result = await client.mutate({
    variables: {
      order
    },
    mutation: gql`
      mutation($order: OrderInput!) {
        addOrder(order: $order) {
          ... on Order {
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
