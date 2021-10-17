import { gql } from '@apollo/client';

export const getContactsForChat = gql`
  query {
    getContacts {
      items {
        _id
        phoneNumber
        address {
          lang
          value
        }
        email
      }
    }
  }
`;
