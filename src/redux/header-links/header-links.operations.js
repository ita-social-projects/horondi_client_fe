import { getItems } from '../../utils/client';

const getAllHeaders = async () => {
  const getAllHeadersQuery = `
    query {
        getAllHeaders {
          _id
          link
          title {
            lang
            value
          }
          priority
        }
    }`;
  const result = await getItems(getAllHeadersQuery);

  return result?.data?.getAllHeaders;
};

export { getAllHeaders };
