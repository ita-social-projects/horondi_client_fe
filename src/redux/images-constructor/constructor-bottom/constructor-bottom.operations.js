import { getItems } from '../../../utils/client';

export const getConstructorBottomById = async (id) => {
  const getConstructorBottomByIdQuery = `
    query($id: ID!) {
      getConstructorBottomById(id: $id) {
        ... on ConstructorBottom {
          _id
          image
          basePrice {
            value
          }
        }
        ... on Error {
          message
          statusCode
        }
      }
    }
  `;
  const result = await getItems(getConstructorBottomByIdQuery, { id });

  if (result?.data?.getConstructorBottomById?.message) {
    throw new Error(result.data.getConstructorBottomById.message);
  }

  return result?.data?.getConstructorBottomById;
};
