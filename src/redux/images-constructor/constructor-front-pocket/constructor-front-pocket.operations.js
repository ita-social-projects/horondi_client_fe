import { getItems } from '../../../utils/client';

export const getConstructorFrontPocketById = async (id) => {
  const getConstructorFrontPocketByIdQuery = `
    query($id: ID!) {
      getConstructorFrontPocketById(id: $id) {
        ... on ConstructorFrontPocket {
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
  const result = await getItems(getConstructorFrontPocketByIdQuery, { id });

  if (result?.data?.getConstructorFrontPocketById?.message) {
    throw new Error(result.data.getConstructorFrontPocketById.message);
  }

  return result?.data?.getConstructorFrontPocketById;
};
