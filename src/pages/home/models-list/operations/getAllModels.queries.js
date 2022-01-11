import { gql } from '@apollo/client';

export const getAllModelsQuery = gql`
  query {
    getAllModels {
      items {
        _id
        translationsKey
        category {
          name {
            value
          }
        }
        name {
          value
        }
        images {
          small
        }
        show
      }
      count
    }
  }
`;
