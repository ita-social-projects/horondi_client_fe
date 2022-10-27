import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ImgsViewer from 'react-images-viewer';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
import Loader from '../../../components/loader';

import { useStyles } from './product-images.styles';
import useProductImage from '../../../hooks/use-product-image';

const ProductImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const [primaryImage, setPrimaryImage] = useState(0);
  const [secondaryImages, setSecondaryImages] = useState([]);

  const { imageArray: imagesSet, checkImage } = useProductImage();
  const { t } = useTranslation();
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  const initImages = useMemo(
    () => [images.primary.small, ...images.additional.map(({ small }) => small)],
    [images.primary.small, images.additional]
  );

  useEffect(() => {
    checkImage(initImages, isLightTheme);
  }, [isLightTheme, initImages, checkImage]);

  useEffect(() => {
    imagesSet.length && setSecondaryImages(imagesSet.slice(1, images.length));
  }, [imagesSet, images.length]);

  useEffect(() => {
    const updatedSecondaryImages = imagesSet.filter((_, i) => i !== primaryImage);
    setSecondaryImages(updatedSecondaryImages);
  }, [primaryImage, imagesSet]);

  const styles = useStyles();

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const sideImages = secondaryImages
    .filter((_, i) => i < 3)
    .map((image, i) => {
      if (i === imagesSet.length || i === 2) {
        return (
          <div className={styles.lastImagesBox} key={i} onClick={() => openImage(i + 1)}>
            <div className={styles.lastImageText}>
              {t('product.allPhotos.viewAll')} {`(${images.additional.length})`}
              {t('product.allPhotos.photo')}
            </div>
            <img
              className={styles.lastImage}
              src={image}
              alt={t('product.imgAltInfo')}
              data-cy='image'
            />
          </div>
        );
      }
      return (
        <div key={i} className={styles.imageItem}>
          <img
            className={styles.sideImage}
            src={image}
            alt={t('product.imgAltInfo')}
            onClick={() => setPrimaryImage(imagesSet.indexOf(secondaryImages[i]))}
            data-cy='image'
          />
        </div>
      );
    });

  const nextImg = () => {
    setPrimaryImage((prev) => prev + 1);
  };

  const prevImg = () => {
    setPrimaryImage((prev) => prev - 1);
  };

  const imagesForViewer = imagesSet.map((image) => ({
    src: image
  }));

  return (
    <div className={styles.imageBody}>
      <ImgsViewer
        imgs={imagesForViewer}
        currImg={currImg}
        showThumbnails
        isOpen={isOpen}
        onClickPrev={() => setCurrImg((prev) => prev - 1)}
        onClickNext={() => setCurrImg((prev) => prev + 1)}
        onClickThumbnail={(index) => setCurrImg(index)}
        onClose={() => setIsOpen(false)}
        closeBtnTitle={t('common.close')}
        leftArrowTitle={t('common.prev')}
        rightArrowTitle={t('common.next')}
      />
      <div className={styles.images}>
        <div className={styles.imagePreviewContainer}>
          <button className={styles.circle} onClick={prevImg} disabled={primaryImage === 0}>
            <ArrowBackIosRounded />
          </button>
          <div className={styles.imageContainer}>
            {!imagesSet.length ? (
              <Loader heightWrap='100px' />
            ) : (
              <img
                src={imagesSet[primaryImage]}
                className={styles.primaryImage}
                alt={t('product.imgAltInfo')}
              />
            )}
          </div>
          <button
            className={styles.circle}
            onClick={nextImg}
            disabled={primaryImage === initImages.length - 1}
          >
            <ArrowForwardIosRounded />
          </button>
        </div>
        <div className={styles.additionalImagePreview}>{sideImages}</div>
      </div>
    </div>
  );
};

export default ProductImages;
