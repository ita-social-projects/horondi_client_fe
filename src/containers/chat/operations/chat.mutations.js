import { gql } from '@apollo/client';

export const sendEmailMutation = gql`
  mutation ($senderName: String!, $text: String!, $email: String!, $language: Int!) {
    addEmailQuestion(
      question: { senderName: $senderName, text: $text, email: $email, language: $language }
    ) {
      _id
    }
  }
`;
