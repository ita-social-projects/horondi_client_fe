import { gql } from '@apollo/client';

export const getBusinessTextByCode = gql`
  query ($code: String!) {
    getBusinessTextByCode(code: $code) {
      __typename
      ... on BusinessText {
        _id
        code
        languages
        sectionsImgs {
          id
          name
          src
        }
        footerImg {
          name
          src
        }
        translationsKey
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
