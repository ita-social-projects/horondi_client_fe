import { gql } from '@apollo/client';

export const getConstructorByModel = gql`
  query ($id: ID!) {
    getConstructorByModel(id: $id) {
      ... on Constructor {
        __typename
        _id
        name {
          lang
          value
        }
        images {
          small
        }
        model {
          _id
          translationsKey
          name {
            lang
            value
          }
          images {
            medium
          }
          sizes {
            _id
            name
            available
          }
        }
        basics {
          _id
          name {
            lang
            value
          }
          features {
            material {
              _id
            }
            color {
              _id
            }
          }
          images {
            large
            medium
            small
            thumbnail
          }
          additionalPrice {
            value
          }
        }
        bottoms {
          _id
          name {
            lang
            value
          }
          features {
            material {
              _id
              translationsKey
            }
          }
          additionalPrice {
            value
          }
          images {
            large
            medium
            small
            thumbnail
          }
        }
        patterns {
          _id
          constructorImg
          name {
            lang
            value
          }
          additionalPrice {
            value
          }
        }
        pocketsWithRestrictions {
          currentPocketWithPosition {
            pocket {
              _id
              images {
                large
                medium
                small
                thumbnail
              }
            }
          }
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
