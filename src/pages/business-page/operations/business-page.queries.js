import { gql } from '@apollo/client';

export const getBusinessTextByCode = gql`
  query ($code: String!) {
    getBusinessTextByCode(code: $code) {
      __typename
      ... on BusinessText {
        _id
        code
        translations_key
        title {
          value
        }
        text {
          value
        }
        translationsKey
        date
      }
    }
  }
`;
