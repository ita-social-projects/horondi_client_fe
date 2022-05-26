import React, { useMemo, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/styles';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';
import Slider from './slider';
import MaterialsBottom from './materials-bottom';
import MaterialsTextile from './materials-textile';
import { getAllPatterns, getMaterialsBlocksByType } from './operations/getAllPatterns.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

import { useStyles } from './materials.style.js';
import { useAppStyles } from '../../components/app/app.styles';
import { getImage } from '../../utils/imageLoad';
import productPlugDark from '../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../images/product-plug-light-theme-img.png';

const Materials = () => {
  const [patternImages, setPatternImages] = useState([]);
  const { t } = useTranslation();
  const { palette } = useTheme();

  const styles = useStyles();
  const appStyles = useAppStyles();

  const isLightTheme = palette.type === 'light';

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
    loading: loadingTextile,
    error: errorTextile,
    data: dataTextile
  } = useQuery(getMaterialsBlocksByType, {
    variables: { type: 'main', limit: 0, skip: 0 }
  });

  const materialsTextile = dataTextile?.getMaterialsBlocksByType.items || [];

  const {
    loading: loadingBottom,
    error: errorBottom,
    data: dataBottom
  } = useQuery(getMaterialsBlocksByType, {
    variables: { type: 'bottom', limit: 0, skip: 0 }
  });

  const materialsBottom = dataBottom?.getMaterialsBlocksByType.items || [];

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingPatterns, loadingTextile, loadingBottom],
    [errorPatterns, errorTextile, errorBottom]
  );
  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={`${appStyles.rootApp} ${styles.root}`}>
      <div className={appStyles.containerApp}>
        <h1 className={styles.title}>{t(`materialsPage.materials`)}</h1>
        <Slider sliderlImages={patternImages} patterns={patterns} />
        <MaterialsTextile materialsTextile={materialsTextile} />
        <MaterialsBottom materialsBottom={materialsBottom} />
      </div>
    </div>
  );
};

export default Materials;
