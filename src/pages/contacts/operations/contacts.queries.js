import { gql } from '@apollo/client';

export const getContacts = gql`
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
        link {
          lat
          lon
        }
      }
    }
  }
`;
