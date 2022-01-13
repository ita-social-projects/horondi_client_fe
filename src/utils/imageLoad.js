import notLoaded from '../images/not-loaded.png';
import { IMG_URL } from '../configs/index';

export const getImage = (imageUrlData) =>
  new Promise((resolve, reject) => {
    const imageUrl = `${IMG_URL}${imageUrlData}`;

    const img = new Image();
    img.onload = () => {
      resolve(imageUrl);
    };
    img.onerror = () => {
      reject(notLoaded);
    };
    img.src = imageUrl;
  });
