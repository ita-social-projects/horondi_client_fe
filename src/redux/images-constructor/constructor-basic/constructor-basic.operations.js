import { getItems } from '../../../utils/client';

export const getConstructorBasicById = async (id) => {
  const getConstructorBasicByIdQuery = `
    query($id: ID!) {
      getConstructorBasicById(id: $id) {
        ... on ConstructorBasic {
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
  const result = await getItems(getConstructorBasicByIdQuery, { id });

  if (result?.data?.getConstructorBasicById?.message) {
    throw new Error(result.data.getConstructorBasicById.message);
  }

  return result?.data?.getConstructorBasicById;
};
