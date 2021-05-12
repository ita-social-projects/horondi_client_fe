import { getItems } from '../../utils/client';

export const getBusinessTextByCode = async (payload) => {
  const getBusinessTextByCodeQuery = `
    query (
      $code: String!
      ){
          getBusinessTextByCode(code: $code) {
          ... on BusinessText {
              _id
              code
              title {
                value
              }
              text {
                value
              }
              date
          }           
          ... on Error {
          message
          statusCode
          }
        }
    }`;
  const result = await getItems(getBusinessTextByCodeQuery, { payload });

  return result?.data?.getBusinessTextByCode;
};
