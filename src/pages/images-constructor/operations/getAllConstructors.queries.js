import { gql } from '@apollo/client';

export const getAllConstructors = gql`
  query ($limit: Int!, $skip: Int!, $filter: ConstructorFilterInput) {
    getAllConstructors(limit: $limit, skip: $skip, filter: $filter) {
      items {
        _id
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
        }
        patterns {
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
            currency
            value
          }
        }
        model {
          _id
          name {
            lang
            value
          }
        }
      }
    }
  }
`;
