import { gql } from '@apollo/client';

export const getAllSlides = gql`
  query {
    getAllSlides {
      items {
        _id
        images {
          large
        }
        show
        link
        title {
          lang
          value
        }
        description {
          lang
          value
        }
        translations_key
      }
    }
  }
`;
