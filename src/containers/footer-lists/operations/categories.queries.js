import { gql } from '@apollo/client';

export const getAllCategoriesQuery = gql`
  query {
    getAllCategories {
      items {
        _id
        code
        name {
          lang
          value
        }
        available
      }
      count
    }
  }
`;
