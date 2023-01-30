import { gql } from '@apollo/client';

export const addProductFromConstructor = gql`
  mutation ($product: ProductInput!) {
    addProductFromConstructor(product: $product) {
      ... on Product {
        __typename
        _id
        name {
          value
          lang
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
