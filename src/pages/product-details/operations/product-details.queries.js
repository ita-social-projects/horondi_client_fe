import { gql } from '@apollo/client';

export const getProductById = gql`
  query ($id: ID!) {
    getProductById(id: $id) {
      ... on Product {
        __typename
        _id
        category {
          _id
          name {
            lang
            value
          }
        }
        name {
          lang
          value
        }
        description {
          lang
          value
        }
        mainMaterial {
          material {
            translationsKey
            name {
              lang
              value
            }
          }
          color {
            translations_key
            _id
            name {
              lang
              value
            }
            colorHex
            simpleName {
              lang
              value
            }
          }
        }
        innerMaterial {
          material {
            translationsKey
            name {
              lang
              value
            }
          }
        }
        bottomMaterial {
          material {
            translationsKey
            _id
            name {
              lang
              value
            }
            additionalPrice {
              currency
              value
            }
          }
          color {
            _id
            name {
              lang
              value
            }
            colorHex
            simpleName {
              lang
              value
            }
          }
        }
        strapLengthInCm
        images {
          primary {
            large
            medium
            small
            thumbnail
          }
          additional {
            large
            medium
            small
            thumbnail
          }
        }
        closure {
          name {
            lang
            value
          }
        }
        pattern {
          _id
          images {
            large
          }
          name {
            lang
            value
          }
        }
        basePrice {
          currency
          value
        }
        sizes {
          size {
            _id
            name
            heightInCm
            widthInCm
            depthInCm
            volumeInLiters
            weightInKg
            available
          }
          price {
            value
            currency
          }
        }
        availableCount
        rate
        translationsKey
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
