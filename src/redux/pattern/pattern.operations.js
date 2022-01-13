import { getItems } from '../../utils/client';

export const getAllPatterns = async (skip, limit) => {
  const getAllPatternsQuery = `
      query($skip: Int, $limit: Int) {
        getAllPatterns(skip: $skip, limit: $limit) {
          items {
            _id
            name {
              lang
              value
            }
            available
            images {
              medium
              small
            }
          }
          count
        }
      }
    `;
  const result = await getItems(getAllPatternsQuery, { skip, limit });

  return result?.data?.getAllPatterns;
};
