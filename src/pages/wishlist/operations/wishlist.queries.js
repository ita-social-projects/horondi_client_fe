import { gql } from '@apollo/client';

export const getWishlistByUserId = gql`
  query {
    getWishlistByUserId {
      ... on Wishlist {
        __typename
        _id
        user_id
        products {
          _id
          translationsKey
          images {
            primary {
              thumbnail
            }
          }
          category {
            _id
            name {
              lang
              value
            }
          }
          pattern {
            _id
          }
          sizes {
            size {
              _id
              available
              name
            }
            price {
              currency
              value
            }
          }
          mainMaterial {
            material {
              translationsKey
              _id
              colors {
                _id
              }
            }
          }
          bottomMaterial {
            material {
              translationsKey
              _id
              name {
                value
              }
              colors {
                _id
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
