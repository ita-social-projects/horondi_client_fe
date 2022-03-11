import { gql } from '@apollo/client';

export const userQuery = gql`
  query ($id: ID!) {
    getUserById(id: $id) {
      firstName
      lastName
      email
      configs {
        language
        currency
        theme
      }
    }
  }
`;

export const saveUserConfigs = gql`
  mutation updateUser($user: UserUpdateInput!, $id: ID!) {
    updateUserById(user: $user, id: $id) {
      _id
      firstName
      lastName
      configs {
        language
        currency
        theme
      }
    }
  }
`;
