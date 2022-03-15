import { gql } from '@apollo/client';

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
