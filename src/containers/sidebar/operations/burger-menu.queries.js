import { gql } from '@apollo/client';

export const getCategoriesForBurgerMenu = gql`
  query {
    getCategoriesForBurgerMenu {
      category {
        _id
        name {
          lang
          value
        }
      }
      models {
        _id
        name {
          lang
          value
        }
      }
    }
  }
`;
