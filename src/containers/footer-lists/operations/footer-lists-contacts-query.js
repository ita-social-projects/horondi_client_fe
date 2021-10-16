import { gql } from '@apollo/client';

export const getContactsForFuterListContacts = gql`
  query {
    getContacts {
      items {
        _id
        phoneNumber
        openHours {
          lang
          value
        }
        address {
          lang
          value
        }
        email
        images {
          value {
            medium
          }
        }
        link
      }
    }
  }
`;
