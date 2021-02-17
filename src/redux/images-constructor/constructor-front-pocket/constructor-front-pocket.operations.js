import { gql } from '@apollo/client';
import { client } from '../../../utils/client';

export const getConstructorFrontPocketById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getConstructorFrontPocketById(id: $id) {
          ... on ConstructorFrontPocket {
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

  if (result.data.getConstructorFrontPocketById.message) {
    throw new Error(result.data.getConstructorFrontPocketById.message);
  }

  return result.data.getConstructorFrontPocketById;
};
