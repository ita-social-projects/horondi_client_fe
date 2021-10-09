import { gql } from '@apollo/client';

const getAllSlides = gql`
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
      }
    }
  }
`;

export default getAllSlides;
