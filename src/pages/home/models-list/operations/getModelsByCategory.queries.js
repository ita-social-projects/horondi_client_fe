import { gql } from '@apollo/client';

export const getModelsByCategoryQuery = gql`
  query ($category: ID!) {
    getModelsByCategory(id: $category) {
      _id
      category {
        name {
          value
        }
      }
      name {
        value
      }
      images {
        large
        small
      }
      description {
        value
      }
    }
  }
`;
