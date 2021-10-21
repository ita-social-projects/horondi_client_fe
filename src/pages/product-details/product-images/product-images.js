import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ImgsViewer from 'react-images-viewer';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@material-ui/icons';
import { useStyles } from './product-images.styles';
import { getImage } from '../../../utils/imageLoad';
import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import { IMG_URL } from '../../../configs';
import ThemeContext from '../../../context/theme-context';

const ProductImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesSet, setImagesSet] = useState([]);
  const [currImg, setCurrImg] = useState(0);

  const { t } = useTranslation();

  const isLightTheme = useContext(ThemeContext);

  const initImages = useMemo(
    () => [images.primary.large, ...images.additional.map(({ large }) => large)],
    [images.primary.large, images.additional]
  );

  useEffect(() => {
    initImages.forEach((item, i) => {
      getImage(item)
        .then((src) => {
          setImagesSet((prev) => {
            const arr = [...prev];
            arr.splice(i, prev.length >= initImages.length ? 1 : 0, { src });
            return arr;
          });
        })
        .catch(() =>
          setImagesSet((prev) => {
            const arr = [...prev];
            arr.splice(i, prev.length >= initImages.length ? 1 : 0, {
              src: isLightTheme ? productPlugLight : productPlugDark
            });
            return arr;
          })
        );
    });
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
      if (i === 2) {
        return (
          <div className={styles.lastImagesBox} key={i} onClick={() => openImage(i + 1)} >
            <div className={styles.lastImageText}>View All Photos</div>
            <img className={styles.lastImage} src={image.src} alt={t('product.imgAltInfo')} data-cy='image'/>
          </div>
        );
      }
      return (
        <div key={i}>
          <img
            className={styles.sideImage}
            src={image.src}
            alt={t('product.imgAltInfo')}
            onClick={() => setCurrImg(i + 1)}
            data-cy='image'
          />
        </div>
      );
    });

  const nextImg = () => {
    setCurrImg((prev) => prev + 1);
  };

  const prevImg = () => {
    setCurrImg((prev) => prev - 1);
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
          <button className={styles.circle} onClick={prevImg} disabled={currImg === 0}>
            <ArrowBackIosRounded />
          </button>
          <div className={styles.imageContainer}>
            <img
              src={IMG_URL + initImages[currImg]}
              className={styles.primaryImage}
              alt={initImages[currImg]}
            />
          </div>
          <button
            className={styles.circle}
            onClick={nextImg}
            disabled={currImg === initImages.length - 1}
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
