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
        model {
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
`;
