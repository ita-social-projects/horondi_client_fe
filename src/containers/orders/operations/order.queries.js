import { gql } from '@apollo/client';

export const getProductById = gql`
  query ($id: ID!) {
    getProductById(id: $id) {
      ... on Product {
        __typename
        _id
        category {
          code
        }
        translationsKey
        bottomMaterial {
          material {
            translationsKey
          }
        }
        images {
          primary {
            thumbnail
          }
        }
        sizes {
          size {
            _id
            name
            available
          }
          price {
            value
            currency
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
