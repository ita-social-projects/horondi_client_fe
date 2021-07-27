import { getItems } from '../../../utils/client';

export const getConstructorSizeById = async (id) => {
  const getConstructorSizeByIdQuery = `
      query($id: ID!) {
        getSizeById(id: $id) {
          _id
          additionalPrice {
            value
          }
        }
      }
    `;
  const result = await getItems(getConstructorSizeByIdQuery, { id });

  if (result?.data?.getSizeById?.message) {
    throw new Error(result.data.getSizeById.message);
  }

  return result?.data?.getSizeById;
};
