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
        translations_key
        date
      }
    }
  }
`;
