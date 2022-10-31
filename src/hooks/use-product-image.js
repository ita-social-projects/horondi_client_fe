import { useCallback, useState } from 'react';
import { getImage } from '../utils/imageLoad';
import productPlugDark from '../images/product-plug-dark-theme-img.png';
import productPlugLight from '../images/product-plug-light-theme-img.png';

const useProductImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageUrlArray, setImageUrlArray] = useState([]);

  const getBlobOrDefaultImage = useCallback(async (path, isLightTheme, defaultImage) => {
    try {
      const result = await getImage(path);
      return result;
    } catch (e) {
      const imagePlaceholder = isLightTheme ? productPlugLight : productPlugDark;
      return defaultImage || imagePlaceholder;
    }
  }, []);

  const checkImage = useCallback(
    async (path, isLightTheme, defaultImage) => {
      if (Array.isArray(path)) {
        const result = await Promise.all(
          path.map(async (el) => {
            const image = await getBlobOrDefaultImage(el, isLightTheme, defaultImage);
            return image;
          })
        );
        setImageUrlArray(result);
      } else {
        const result = await getBlobOrDefaultImage(path, isLightTheme, defaultImage);
        setImageUrl(result);
      }
    },
    [getBlobOrDefaultImage]
  );

  return { imageUrl, imageUrlArray, checkImage };
};
export default useProductImage;
