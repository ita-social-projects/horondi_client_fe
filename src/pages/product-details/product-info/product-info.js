import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './product-info.styles';
import * as colorImage from '../../../images/red.jpg';
import * as patternImage from '../../../images/pattern_2.jpg';
import { getCurrencySign } from '../../../utils/currency';

import Detail from '../detail';

const ProductInfo = ({ price, product }) => {
  const styles = useStyles({
    colorUrl: colorImage,
    patternUrl: patternImage
  });
  const { rate, name, description, mainMaterial, innerMaterial, bottomMaterial, strapLengthInCm } =
    product;
  const { t } = useTranslation();
  const { language, currentPrice, currentWeight, currentVolume, currency } = useSelector(
    ({ Language, Products: { productToSend }, Currency }) => ({
      language: Language.language,
      currentPrice: productToSend.price || price,
      currentWeight: productToSend.dimensions.weightInKg,
      currentVolume: productToSend.dimensions.volumeInLiters,
      currency: Currency.currency
    })
  );

  const currencySign = getCurrencySign(currency);

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
          subtitle={`${t('product.productDescription.description')}: `}
          description={parse(description[language].value)}
        />
        <Detail
          subtitle={t('product.productDescription.mainMaterial')}
          description={t(`${mainMaterial.material.translations_key}.name`)}
        />
        <Detail
          subtitle={t('product.productDescription.innerMaterial')}
          description={t(`${innerMaterial.material.translations_key}.name`)}
        />
        <Detail
          subtitle={t('product.productDescription.bottomMaterial')}
          description={t(`${bottomMaterial.material.translations_key}.name`)}
        />
        {strapLengthInCm ? (
          <Detail
            subtitle={t('product.productDescription.strapLengthInCm')}
            description={`${strapLengthInCm}`}
          />
        ) : null}
        {currentVolume && currentWeight ? (
          <div>
            <Detail subtitle={t('product.weight.volumeLabel')} description={`${currentVolume}`} />
            <Detail subtitle={t('product.weight.weightLabel')} description={`${currentWeight}`} />
          </div>
        ) : null}
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.subtitle}>{t('common.price')}: </span>
        <span data-cy='price' className={styles.price}>
          {Math.round(currentPrice[currency]?.value)}
          {'\u00A0'}
          <FontAwesomeIcon icon={currencySign} />
        </span>
      </div>
      <div className={styles.look}>
        <span className={styles.subtitle}>{t('common.color')}:</span>
        <div className={styles.colorCircle} />
        <span className={styles.subtitle}>{t('product.pattern')}:</span>
        <div className={styles.patternCircle} />
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
