import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getBusinessTextByCode = async (code) => {
  const result = await client.query({
    variables: {
      code
    },
    query: gql`
      query($code: String!) {
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
      }
    `
  });
  return result;
};

export { getBusinessTextByCode };
