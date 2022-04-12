import { gql } from '@apollo/client';

export const getProductById = gql`
  query ($id: ID!) {
    getProductById(id: $id) {
      __typename
      ... on Product {
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
          price
        }
      }
    }
  }
`;
