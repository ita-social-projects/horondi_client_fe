import { gql } from '@apollo/client';

export const getContactsForFooterListContacts = gql`
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
