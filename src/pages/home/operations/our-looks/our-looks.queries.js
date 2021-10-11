import { gql } from '@apollo/client';

export const getAllHomeImageLooks = gql`
  query {
    getHomePageLooksImages {
      _id
      images {
        medium
      }
    }
  }
`;
