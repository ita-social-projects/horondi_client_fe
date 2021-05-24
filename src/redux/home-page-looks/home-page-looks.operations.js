import { getItems } from '../../utils/client';

const getHomePageLooksImages = async () => {
  const getHomePageLooksImagesQuery = `
    query {
      getHomePageLooksImages {
        _id
        images {
          large
          medium
          small
        }
      }
    }`;
  const result = await getItems(getHomePageLooksImagesQuery);

  return result?.data?.getHomePageLooksImages;
};

export { getHomePageLooksImages };
