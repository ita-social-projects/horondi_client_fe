import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStyles } from './product-info.styles';
import { getCurrencySign } from '../../../utils/currency';
import Detail from '../detail';
import { IMG_URL } from '../../../configs';
import Colors from './colors';

const ProductInfo = ({ price, product }) => {
  const styles = useStyles();
  const { rate, mainMaterial, innerMaterial, bottomMaterial, strapLengthInCm, translationsKey } =
    product;
  const { t } = useTranslation();
  const { currentPrice, currentWeight, currentVolume, currency } = useSelector(
    ({ Products: { productToSend }, Currency }) => ({
      currentPrice: productToSend.price || price,
      currentWeight: productToSend.dimensions.weightInKg || 0,
      currentVolume: productToSend.dimensions.volumeInLiters || 0,
      currency: Currency.currency
    })
  );

  const currencySign = getCurrencySign(currency);

  return (
    <div>
      <div className={styles.head}>
        <span className={styles.title}>{t(`${translationsKey}.name`)}</span>
        <Tooltip title={rate.toFixed(2)} placement='left'>
          <span>
            <Rating value={rate} readOnly precision={0.1} />
          </span>
        </Tooltip>
      </div>
      <div className={styles.details}>
        <Detail
          subtitle={`${t('product.productDescription.description')}: `}
          description={parse(t(`${translationsKey}.description`))}
        />
        <Detail
          subtitle={t('product.productDescription.mainMaterial')}
          description={t(`${mainMaterial.material.translationsKey}.name`)}
        />
        <Detail
          subtitle={t('product.productDescription.innerMaterial')}
          description={t(`${innerMaterial.material.translationsKey}.name`)}
        />
        <Detail
          subtitle={t('product.productDescription.bottomMaterial')}
          description={t(`${bottomMaterial.material.translationsKey}.name`)}
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
      {Object.keys(currentPrice).length ? (
        <div className={styles.priceContainer}>
          <span className={styles.subtitle}>{t('common.price')}: </span>
          <span data-cy='price' className={styles.price}>
            {Math.round(currentPrice[currency]?.value)}
            {'\u00A0'}
            <FontAwesomeIcon icon={currencySign} />
          </span>
        </div>
      ) : null}
      <div className={styles.look}>
        <span className={styles.subtitle}>{t('common.color')}:</span>
        <img
          className={styles.circle}
          alt='color'
          src={Colors[`${product.mainMaterial.color.name[1].value}`]}
        />
        <span className={styles.subtitle}>{t('product.pattern')}:</span>
        <img
          className={styles.circle}
          alt='pattern'
          src={`${IMG_URL}${product.pattern.images.large}`}
        />
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
