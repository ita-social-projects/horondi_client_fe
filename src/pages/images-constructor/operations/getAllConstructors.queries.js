import { gql } from '@apollo/client';

export const getAllConstructors = gql`
  query ($limit: Int!, $skip: Int!, $filter: ConstructorFilterInput) {
    getAllConstructors(limit: $limit, skip: $skip, filter: $filter) {
      items {
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
          absolutePrice
          relativePrice
        }
        model {
          _id
          translationsKey
          name {
            lang
            value
          }
          sizes {
            name
            absolutePrice
            relativePrice
          }
        }
      }
    }
  }
`;
