import { gql } from '@apollo/client';

export const getBusinessTextByCode = gql`
  query ($code: String!) {
    getBusinessTextByCode(code: $code) {
      __typename
      ... on BusinessText {
        _id
        code
        title {
          lang
          value
        }
        sections {
          lang
          value {
            id
            title
            text
            img {
              name
              src
            }
          }
        }
        text {
          lang
          value
        }
        languages
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
