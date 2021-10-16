import { gql } from '@apollo/client';

export const getContactsForChat = gql`
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
