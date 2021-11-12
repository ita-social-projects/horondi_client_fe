import { gql } from '@apollo/client';

export const getConstructorById = gql`
  query ($id: ID!) {
    getConstructorById(id: $id) {
      ... on Constructor {
        _id
        model {
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
        bottoms {
          _id
        }
        basics {
          _id
        }
        patterns {
          _id
        }
        backs {
          _id
        }
        straps {
          _id
        }
        closures {
          _id
        }
        pocketsWithRestrictions {
          currentPocketWithPosition {
            pocket {
              _id
              name {
                lang
                value
              }
              images {
                thumbnail
              }
              additionalPrice {
                value
                currency
              }
            }
            position {
              _id
              name {
                lang
                value
              }
            }
          }
          otherPocketsWithAvailablePositions {
            pocket {
              _id
            }
            position {
              _id
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
