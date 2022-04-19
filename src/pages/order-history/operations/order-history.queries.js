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
            _id
            isFromConstructor
            translationsKey
            mainMaterial {
              color {
                _id
              }
              material {
                _id
              }
            }
            pattern {
              _id
              constructorImg
              images {
                large
                medium
                small
                thumbnail
              }
            }
            model {
              _id
              sizes {
                name
              }
            }
            images {
              primary {
                thumbnail
              }
            }
            bottomMaterial {
              material {
                _id
                translationsKey
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
