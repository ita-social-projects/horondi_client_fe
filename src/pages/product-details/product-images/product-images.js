import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ImgsViewer from 'react-images-viewer';
import useStyles from './product-images.styles';

import {
  IMGS_VIEWER,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';
import { IMG_URL } from '../../../configs';

const ProductImages = () => {
  const { language, images } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    images: Products.product.images
  }));
  const styles = useStyles({
    primaryImage: `${IMG_URL}${images.primary.medium}`
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const imagesSet = [
    { src: `${IMG_URL}${images.primary.large}` },
    ...images.additional.map(({ large }) => ({ src: `${IMG_URL}${large}` }))
  ];

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const primaryImage = images.primary ? (
    <div className={styles.primaryImage} onClick={() => openImage(0)} />
  ) : null;

  const sideImages = images.additional
    ? images.additional
        .filter((img, idx) => idx < 3)
        .map((image, idx) => (
          <img
            className={styles.sideImage}
            src={`${IMG_URL}${image.small}`}
            key={idx}
            alt={IMG_ALT_INFO[language].value}
            onClick={() => openImage(idx + 1)}
          />
        ))
    : null;

  return (
    <div>
      <ImgsViewer
        imgs={imagesSet}
        currImg={currImg}
        showThumbnails
        isOpen={isOpen}
        onClickPrev={() => setCurrImg((currImg) => currImg - 1)}
        onClickNext={() => setCurrImg((currImg) => currImg + 1)}
        onClickThumbnail={(index) => setCurrImg(index)}
        onClose={() => setIsOpen(false)}
        closeBtnTitle={IMGS_VIEWER[language].close}
        leftArrowTitle={IMGS_VIEWER[language].prev}
        rightArrowTitle={IMGS_VIEWER[language].next}
      />
      <div className={styles.images}>
        {sideImages}
        {primaryImage}
      </div>
    </div>
  );
};

export default ProductImages;
