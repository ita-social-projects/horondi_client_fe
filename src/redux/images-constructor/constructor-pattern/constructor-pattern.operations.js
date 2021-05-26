import { getItems } from '../../../utils/client';

export const getConstructorPatternById = async (id) => {
  const getConstructorPatternByIdQuery = `
      query($id: ID!) {
        getPatternById(id: $id) {
          ... on Pattern {
            _id
            constructorImg
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `;
  const result = await getItems(getConstructorPatternByIdQuery, { id });

  if (result?.data?.getPatternById?.message) {
    throw new Error(result.data.getPatternById.message);
  }

  return result?.data?.getPatternById;
};
