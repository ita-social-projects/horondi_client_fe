import { gql } from '@apollo/client';

export const getBusinessTextByCode = gql`
  query ($code: String!) {
    getBusinessTextByCode(code: $code) {
      ... on BusinessText {
        _id
        code
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;

// title {
//   value
// }
// text {
//   value
// }
// date
