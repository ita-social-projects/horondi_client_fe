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
            translations_key
            name {
              lang
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
        innerMaterial {
          material {
            translations_key
            name {
              lang
              value
            }
          }
        }
        bottomMaterial {
          material {
            translations_key
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
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
