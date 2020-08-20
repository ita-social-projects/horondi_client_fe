import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

import Rating from '@material-ui/lab/Rating';
import useStyles from './product-info.styles';
import * as colorImage from '../../../images/red.jpg';
import * as patternImage from '../../../images/pattern_2.jpg';

import {
  COLOR,
  PATTERN,
  PRODUCT_PRICE,
  PRODUCT_DESCRIPTION,
  WEIGHT
} from '../../../translations/product-details.translations';

const ProductInfo = ({
  rate,
  title,
  description,
  currentPrice,
  mainMaterial,
  innerMaterial,
  strapLengthInCm,
  currentVolume,
  currentWeight
}) => {
  const styles = useStyles({
    colorUrl: colorImage,
    patternUrl: patternImage
  });
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  return (
    <div>
      <div className={styles.head}>
        <span className={styles.title}>{title[language].value}</span>
        <Rating value={rate} readOnly precision={0.1} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.subtitle}>
            {PRODUCT_DESCRIPTION[language].productDescription}:
          </p>
          <div className={styles.description}>
            {parse(description[language].value)}
          </div>
        </div>
        <div>
          <span className={styles.subtitle}>
            {PRODUCT_DESCRIPTION[language].productMainMaterial}
          </span>
          <span className={styles.description}>
            - {mainMaterial[language].value}
          </span>
        </div>
        <div>
          {innerMaterial.length >= 1 ? (
            <div>
              <span className={styles.subtitle}>
                {PRODUCT_DESCRIPTION[language].productInnerMaterial}
              </span>
              <span className={styles.description}>
                - {innerMaterial[language].value}
              </span>
            </div>
          ) : null}
        </div>
        {strapLengthInCm > 0 ? (
          <div>
            <span className={styles.subtitle}>
              {PRODUCT_DESCRIPTION[language].strapLengthInCm}
            </span>
            <span className={styles.description}>- {strapLengthInCm}</span>
          </div>
        ) : null}
        {currentVolume && currentWeight ? (
          <div>
            <div>
              <span className={styles.subtitle}>
                {WEIGHT[language].volumeLabel}
              </span>
              <span className={styles.description}>- {currentVolume}</span>
            </div>
            <div>
              <span className={styles.subtitle}>
                {WEIGHT[language].weightLabel}
              </span>
              <span className={styles.description}>- {currentWeight}</span>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.subtitle}>
          {PRODUCT_PRICE[language].price}:{' '}
        </span>
        <span data-cy='price' className={styles.price}>
          {currentPrice} UAH
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
