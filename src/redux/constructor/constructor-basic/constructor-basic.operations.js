import { gql } from '@apollo/client';
import { client } from '../../../utils/client';

export const getConstructorBasicById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getConstructorBasicById(id: $id) {
          ... on ConstructorBasic {
            _id
            image
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  if (result.data.getConstructorBasicById.message) {
    throw new Error(result.data.getConstructorBasicById.message);
  }

  return result.data.getConstructorBasicById;
};
