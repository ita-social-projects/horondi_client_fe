import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/styles';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';
import Slider from './slider';
import MaterialsBottom from './materials-bottom';
import MaterialsTextile from './materials-textile';
import PageTitle from '../../components/page-title';
import { getAllPatterns, getMaterialsBlocksByType } from './operations/getAllPatterns.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

import { useStyles } from './materials.style.js';
import { useAppStyles } from '../../components/app/app.styles';
import useProductImage from '../../hooks/use-product-image';

const Materials = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const [patterns, setPatterns] = useState([]);
  const [materialsTextile, setMaterialsTextile] = useState([]);
  const [materialsBottom, setMaterialsBottom] = useState([]);
  const styles = useStyles();
  const appStyles = useAppStyles();
  const { imageUrlArray: patternImages, checkImage } = useProductImage();

  const isLightTheme = palette.type === 'light';

  const {
    loading: loadingPatterns,
    error: errorPatterns,
    data: dataPattern
  } = useQuery(getAllPatterns, {
    onCompleted: () => {
      setPatterns(dataPattern.getAllPatterns.items);
    }
  });

  const {
    loading: loadingTextile,
    error: errorTextile,
    data: dataTextile
  } = useQuery(getMaterialsBlocksByType, {
    variables: { type: 'main', limit: 0, skip: 0 },
    onCompleted: () => {
      setMaterialsTextile(dataTextile.getMaterialsBlocksByType.items);
    }
  });

  const {
    loading: loadingBottom,
    error: errorBottom,
    data: dataBottom
  } = useQuery(getMaterialsBlocksByType, {
    variables: { type: 'bottom', limit: 0, skip: 0 },
    onCompleted: () => {
      setMaterialsBottom(dataBottom.getMaterialsBlocksByType.items);
    }
  });

  useEffect(() => {
    if (patterns.length) {
      const initImages = patterns.map((pattern) => pattern.images.small);
      checkImage(initImages, isLightTheme);
    }
  }, [isLightTheme, patterns, checkImage]);

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingPatterns, loadingTextile, loadingBottom],
    [errorPatterns, errorTextile, errorBottom]
  );
  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={`${appStyles.rootApp} ${styles.root}`}>
      <div className={appStyles.containerApp}>
        <PageTitle title={t(`materialsPage.materials`)} titleLine />
        <Slider sliderlImages={patternImages} patterns={patterns} />
        <MaterialsTextile materialsTextile={materialsTextile} />
        <MaterialsBottom materialsBottom={materialsBottom} />
      </div>
    </div>
  );
};

export default Materials;
