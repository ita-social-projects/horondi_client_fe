import { gql } from '@apollo/client';

export const getBusinessTextByCode = gql`
  query ($code: String!) {
    getBusinessTextByCode(code: $code) {
      __typename
      ... on BusinessText {
        _id
        code
        title {
          value
        }
        text {
          value
        }
        date
      }
    }
  }
`;

// export const getBusinessTextByCode = gql`
//   query {
//     getHomePageLooksImages {
//       _id
//       images {
//         medium
//       }
//     }
//   }
// `;

// title {
//   value
// }
// text {
//   value
// }
// date
