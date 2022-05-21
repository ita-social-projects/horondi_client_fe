import { gql } from '@apollo/client';

export const getBusinessTextByCode = gql`
  query ($code: String!) {
    getBusinessTextByCode(code: $code) {
      __typename
      ... on BusinessText {
        _id
        code
        languages
        translationsKey
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
