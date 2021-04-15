import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from './product-info.styles';
import * as colorImage from '../../../images/red.jpg';
import * as patternImage from '../../../images/pattern_2.jpg';

import {
  COLOR,
  PATTERN,
  PRODUCT_PRICE,
  PRODUCT_DESCRIPTION,
  WEIGHT
} from '../../../translations/product-details.translations';

import { CURRENCIES_LIST } from '../../../configs/index';
import Detail from '../detail';

const ProductInfo = ({ price }) => {
  const styles = useStyles({
    colorUrl: colorImage,
    patternUrl: patternImage
  });

  const {
    language,
    rate,
    name,
    description,
    mainMaterial,
    innerMaterial,
    bottomMaterial,
    strapLengthInCm,
    currentPrice,
    currentWeight,
    currentVolume,
    currency
  } = useSelector(({ Language, Products: { product, productToSend }, Currency }) => ({
    language: Language.language,
    rate: product.rate,
    name: product.name,
    description: product.description,
    mainMaterial: product.mainMaterial,
    innerMaterial: product.innerMaterial,
    bottomMaterial: product.bottomMaterial,
    strapLengthInCm: product.strapLengthInCm,
    currentPrice: productToSend.price || price,
    currentWeight: productToSend.dimensions.weightInKg,
    currentVolume: productToSend.dimensions.volumeInLiters,
    currency: Currency.currency
  }));

  return (
    <div>
      <div className={styles.head}>
        <span className={styles.title}>{name[language].value}</span>
        <Tooltip title={rate.toFixed(2)} placement='left'>
          <span>
            <Rating value={rate} readOnly precision={0.1} />
          </span>
        </Tooltip>
      </div>
      <div className={styles.details}>
        <Detail
          subtitle={`${PRODUCT_DESCRIPTION[language].description}: `}
          description={parse(description[language].value)}
        />
        <Detail
          subtitle={PRODUCT_DESCRIPTION[language].mainMaterial}
          description={` - ${mainMaterial.material.name[language].value}`}
        />
        <Detail
          subtitle={PRODUCT_DESCRIPTION[language].innerMaterial}
          description={` - ${innerMaterial.material.name[language].value}`}
        />
        <Detail
          subtitle={PRODUCT_DESCRIPTION[language].bottomMaterial}
          description={` - ${bottomMaterial.material.name[language].value}`}
        />
        {strapLengthInCm ? (
          <Detail
            subtitle={PRODUCT_DESCRIPTION[language].strapLengthInCm}
            description={`- ${strapLengthInCm}`}
          />
        ) : null}
        {currentVolume && currentWeight ? (
          <div>
            <Detail subtitle={WEIGHT[language].volumeLabel} description={` - ${currentVolume}`} />
            <Detail subtitle={WEIGHT[language].weightLabel} description={` - ${currentWeight}`} />
          </div>
        ) : null}
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.subtitle}>{PRODUCT_PRICE[language].price}: </span>
        <span data-cy='price' className={styles.price}>
          {currentPrice[currency].value / 100}&nbsp;
          {CURRENCIES_LIST[currency].currency}
        </span>
      </div>
      <div className={styles.look}>
        <span className={styles.subtitle}>{COLOR[language].color}:</span>
        <div className={styles.colorCircle} />
        <span className={styles.subtitle}>{PATTERN[language].pattern}:</span>
        <div className={styles.patternCircle} />
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
