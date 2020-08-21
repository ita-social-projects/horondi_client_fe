import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ImgsViewer from 'react-images-viewer';
import useStyles from './product-images.styles';
import * as productImage from '../../../images/pdp_main.jpg';

import {
  IMGS_VIEWER,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';

const ProductImages = () => {
  const styles = useStyles();
  const { language, images } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    images: Products.product.images
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const imagesSet = Array(4).fill({ src: productImage });

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const primaryImage = images.primary ? (
    <img
      src={productImage}
      alt={IMG_ALT_INFO[language].value}
      onClick={() => openImage(0)}
    />
  ) : null;

  const sideImages = images.additional
    ? images.additional.map((image, idx) => (
      <img
        src={productImage}
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
      <div className={styles.container}>
        <div className={styles.images}>
          {primaryImage}
          {sideImages}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
