import { gql } from '@apollo/client';

export const getContacts = gql`
  query {
    getContacts {
      items {
        _id
        phoneNumber
        openHours {
          value
        }
        address {
          value
        }
        email
        link {
          lat
          lon
        }
        translations_key
      }
    }
  }
`;
