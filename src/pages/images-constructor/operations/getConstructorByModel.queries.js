import { gql } from '@apollo/client';

export const getConstructorByModel = gql`
  query ($id: ID!) {
    getConstructorByModel(id: $id) {
      ... on Constructor {
        __typename
        _id
        model {
          _id
        }
        name {
          lang
          value
        }
        basics {
          _id
          translationsKey
          features {
            material {
              _id
            }
            color {
              _id
            }
          }
          name {
            lang
            value
          }
          images {
            large
            medium
            small
            thumbnail
          }
          available
          absolutePrice
        }
        bottoms {
          _id
          translationsKey
          features {
            material {
              _id
            }
            color {
              _id
            }
          }
          name {
            lang
            value
          }
          images {
            large
            medium
            small
            thumbnail
          }
          absolutePrice
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
        patterns {
          _id
          translationsKey
          features {
            material {
              _id
              name {
                lang
                value
              }
            }
          }
          name {
            lang
            value
          }
          constructorImg
          images {
            large
            medium
            small
            thumbnail
          }
          constructorImg
          absolutePrice
          relativePrice
        }
        model {
          _id
          name {
            lang
            value
          }
          sizes {
            _id
            name
            absolutePrice
            relativePrice
            available
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
