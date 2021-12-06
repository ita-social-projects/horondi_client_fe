import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ImgsViewer from 'react-images-viewer';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
import Loader from '../../../components/loader';

import { useStyles } from './product-images.styles';
import { getImage } from '../../../utils/imageLoad';
import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';

const ProductImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesSet, setImagesSet] = useState([]);
  const [currImg, setCurrImg] = useState(0);
  const [primaryImage, setPrimaryImage] = useState(0);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  const initImages = useMemo(
    () => [images.primary.large, ...images.additional.map(({ large }) => large)],
    [images.primary.large, images.additional]
  );

  useEffect(() => {
    const initialPhotos = async () => {
      setLoading(true);
      const mapImages = await Promise.all(
        initImages.map(async (item) => {
          try {
            const result = await getImage(item);
            return { src: result };
          } catch (e) {
            return { src: isLightTheme ? productPlugLight : productPlugDark };
          }
        })
      );

      setImagesSet(mapImages);
      setLoading(false);
    };
    initialPhotos();
  }, [isLightTheme, initImages]);

  const styles = useStyles();

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const sideImages = imagesSet
    .slice(1, imagesSet.length)
    .filter((_, i) => i < 3)
    .map((image, i) => {
      if (i === imagesSet.length || i === 2) {
        return (
          <div className={styles.lastImagesBox} key={i} onClick={() => openImage(i + 1)}>
            <div className={styles.lastImageText}>{t('product.allPhotos')}</div>
            <img
              className={styles.lastImage}
              src={image.src}
              alt={t('product.imgAltInfo')}
              data-cy='image'
            />
          </div>
        );
      }
      return (
        <div key={i}>
          <img
            className={styles.sideImage}
            src={image.src}
            alt={t('product.imgAltInfo')}
            onClick={() => setPrimaryImage(i + 1)}
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

  return (
    <div>
      <ImgsViewer
        imgs={imagesSet}
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
            {loading ? (
              <Loader heightWrap='100px' />
            ) : (
              <img
                src={imagesSet[primaryImage]?.src}
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
