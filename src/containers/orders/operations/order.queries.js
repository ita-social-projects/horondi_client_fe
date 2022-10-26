import { gql } from '@apollo/client';

export const getProductById = gql`
  query ($id: ID!) {
    getProductById(id: $id) {
      __typename
      ... on Product {
        _id
        isDeleted
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
            medium
            thumbnail
          }
        }
        sizes {
          size {
            _id
            name
            available
          }
          price
        }
      }
    }
  }
`;
