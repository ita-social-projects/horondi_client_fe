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
          fixedPrice
          options {
            size {
              name
            }
          }
          constructorBasics {
            _id
            images {
              large
              medium
              small
              thumbnail
            }
          }
          constructorBottom {
            _id
            images {
              large
              medium
              small
              thumbnail
            }
          }
          constructorFrontPocket {
            _id
            images {
              large
              medium
              small
              thumbnail
            }
          }
          product {
            _id
            isFromConstructor
            translationsKey
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
                medium
              }
            }
          }
        }
        totalPriceToPay
        fixedExchangeRate
        itemsPriceWithDiscount
      }
      ordersCount
    }
  }
`;
