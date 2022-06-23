import { gql } from '@apollo/client';

export const addProductFromConstructor = gql`
  mutation ($product: ProductInput!, $upload: Upload!) {
    addProductFromConstructor(product: $product, upload: $upload) {
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
