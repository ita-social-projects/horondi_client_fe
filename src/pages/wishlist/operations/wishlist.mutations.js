import { gql } from '@apollo/client';

export const addProductToWishlist = gql`
  mutation ($productId: ID!) {
    addProductToWishlist(productId: $productId) {
      ... on Wishlist {
        __typename
        _id
        products {
          _id
        }
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;

export const deleteProductFromWishlist = gql`
  mutation ($productId: ID!) {
    deleteProductFromWishlist(productId: $productId) {
      ... on Wishlist {
        __typename
        _id
        products {
          _id
          translationsKey
          images {
            primary {
              thumbnail
            }
          }
          name {
            value
          }
          sizes {
            size {
              available
              name
              _id
            }
            price {
              currency
              value
            }
          }
          bottomMaterial {
            material {
              _id
              translationsKey
              name {
                value
              }
            }
          }
        }
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
