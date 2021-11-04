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
          images {
            primary {
              thumbnail
            }
          }
          category {
            _id
          }
          name {
            value
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
              translations_key
              _id
              colors {
                _id
              }
            }
          }
          bottomMaterial {
            material {
              translations_key
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
