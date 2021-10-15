import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useSelector } from 'react-redux';

import ImgsViewer from 'react-images-viewer';
import { GlassMagnifier } from 'react-image-magnifiers';
import { useStyles } from './product-images.styles';
import { IMGS_VIEWER, IMG_ALT_INFO } from '../../../translations/product-details.translations';
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
  const { language } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));

  const isLightTheme = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [imagesSet, setImagesSet] = useState([]);
  const [currImg, setCurrImg] = useState(0);

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
        alt={IMG_ALT_INFO[language].value}
        onClick={() => openImage(i + 1)}
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
        closeBtnTitle={IMGS_VIEWER[language].close}
        leftArrowTitle={IMGS_VIEWER[language].prev}
        rightArrowTitle={IMGS_VIEWER[language].next}
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
