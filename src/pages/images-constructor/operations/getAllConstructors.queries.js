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
          additionalPrice {
            value
            currency
          }
        }
        bottoms {
          _id
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
          additionalPrice {
            value
            currency
          }
        }
        patterns {
          _id
          translationsKey
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
          additionalPrice {
            value
            currency
          }
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
            additionalPrice {
              value
              currency
            }
          }
        }
      }
    }
  }
`;
