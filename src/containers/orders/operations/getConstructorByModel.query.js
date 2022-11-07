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
          relativePrice
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
          relativePrice
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
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
