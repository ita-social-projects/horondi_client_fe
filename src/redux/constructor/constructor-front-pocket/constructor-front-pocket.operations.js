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
  if (result.data.getConstructorBottomById.message) throw new Error();

  return result.data.getConstructorFrontPocketById;
};
