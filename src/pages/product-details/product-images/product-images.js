import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ImgsViewer from 'react-images-viewer';
import { GlassMagnifier } from 'react-image-magnifiers';
import { useStyles } from './product-images.styles';
import { getImage } from '../../../utils/imageLoad';

import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import { IMG_URL } from '../../../configs';
import ThemeContext from '../../../context/theme-context';

const ZoomImage = ({ images }) => {
  const state = {
    allowOverflow: false,
    magnifierBorderSize: 0,
    magnifierBorderColor: 'rgba(255, 255, 255, 1)',
    magnifierSize: '200%',
    square: true
  };

  return (
    <div>
      <GlassMagnifier
        className='input-position'
        imageSrc={IMG_URL + images.primary.large}
        largeImageSrc={IMG_URL + images.primary.large}
        allowOverflow={state.allowOverflow}
        magnifierSize={state.magnifierSize}
        magnifierBackgroundColor='#F5F5F5'
        previewOverlayOpacity={0}
        magnifierBorderSize={state.magnifierBorderSize}
        magnifierBorderColor={state.magnifierBorderColor}
        overlayOpacity={state.overlayOpacity}
        square={state.square}
      />
    </div>
  );
};

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
    .filter((img, i) => i < 3)
    .map((image, i) => (
      <img
        className={styles.sideImage}
        src={image.src}
        key={i}
        alt={t('product.imgAltInfo')}
        onClick={() => openImage(i + 1)}
        data-cy='test'
      />
    ));
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
        <div>{sideImages}</div>
        <div className={styles.imagePreviewContainer}>
          <ZoomImage images={images} />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
