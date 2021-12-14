import { gql } from '@apollo/client';

export const getAllQuestionsAnswers = gql`
  query {
    getAllQuestionsAnswers {
      items {
        _id
        question {
          lang
          value
        }
        answer {
          lang
          value
        }
        translationsKey
      }
    }
  }
`;
