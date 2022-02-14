import React, { useMemo, useState, useEffect } from 'react';
import parse from 'html-react-parser';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/styles';
import 'react-awesome-slider/dist/styles.css';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';

import { useStyles } from './materials.style.js';
import { useAppStyles } from '../../components/app/app.styles';
import { getBusinessTextByCode } from '../business-page/operations/business-page.queries';
import { getAllPatterns } from './operations/getAllPatterns.queries';
import { CAROUSE_MATERIAL_INTERVAL } from './constants';
import Slider from './slider';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getImage } from '../../utils/imageLoad';

import productPlugDark from '../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../images/product-plug-light-theme-img.png';

const AutoplaySlider = withAutoplay(Slider);

const Materials = () => {
  const [patternImages, setPatternImages] = useState([]);
  const { t } = useTranslation();
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  const code = 'materials';

  const {
    loading: loadingPatterns,
    error: errorPatterns,
    data: dataPattern
  } = useQuery(getAllPatterns, {});
  const patterns = useMemo(
    () => (loadingPatterns ? [] : dataPattern.getAllPatterns.items),
    [loadingPatterns, dataPattern]
  );

  const initImages = useMemo(() => patterns.map((e) => e.images.small), [patterns]);

  useEffect(() => {
    const initialPhotos = async () => {
      const mapImages = await Promise.all(
        initImages.map(async (item) => {
          try {
            return await getImage(item);
          } catch (e) {
            return isLightTheme ? productPlugLight : productPlugDark;
          }
        })
      );

      setPatternImages(mapImages);
    };

    initialPhotos();
  }, [loadingPatterns, initImages, isLightTheme]);

  const {
    loading: loadingMaterials,
    error: errorMaterials,
    data: dataMaterials
  } = useQuery(getBusinessTextByCode, {
    variables: { code }
  });
  const materialsPage = loadingMaterials ? {} : dataMaterials.getBusinessTextByCode;

  const materialPageText = materialsPage.text && parse(t(`${materialsPage.translationsKey}.text`));
  const styles = useStyles();
  const appStyles = useAppStyles();
  const imagesForSlider = patterns.map((pattern, i) => (
    <div className={styles.sliderImage} key={pattern._id} data-src={patternImages[i]}>
      <p className={styles.sliderText}>{t(`${pattern.translationsKey}.name`)}</p>
    </div>
  ));

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingPatterns, loadingMaterials],
    [errorPatterns, errorMaterials]
  );
  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={`${appStyles.rootApp} ${styles.root}`}>
      <div className={appStyles.containerApp}>
        {materialsPage.title && <h1>{t(`${materialsPage.translationsKey}.title`)}</h1>}
        <div className={styles.captionBlock}>
          <AutoplaySlider
            play
            interval={CAROUSE_MATERIAL_INTERVAL}
            cancelOnInteraction
            className={styles.slider}
            mobileTouch
            buttons
            bullets={false}
            infinite
            bulletsSet={patternImages}
          >
            {imagesForSlider}
          </AutoplaySlider>
          {materialPageText}
        </div>
      </div>
    </div>
  );
};

export default Materials;
