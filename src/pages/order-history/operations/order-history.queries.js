import { gql } from '@apollo/client';

export const getUserOrdersQuery = gql`
  query ($pagination: Pagination) {
    getUserOrders(pagination: $pagination) {
      userOrders {
        _id
        dateOfCreation
        status
        orderNumber
        items {
          quantity
          fixedPrice {
            currency
            value
          }
          options {
            size {
              name
            }
          }
          product {
            name {
              lang
              value
            }
            model {
              sizes {
                name
              }
            }
            images {
              primary {
                thumbnail
              }
            }
          }
        }
        totalItemsPrice {
          value
          currency
        }
      }
      ordersCount
    }
  }
`;
