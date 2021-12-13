import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';
import { useStyles } from './product-info.styles';
import { getCurrencySign } from '../../../utils/currency';
import { IMG_URL } from '../../../configs';
import Colors from './colors';

import { SCROLL_BAR_LINKS } from '../constants';

const ProductInfo = ({ price, product, countComments }) => {
  const styles = useStyles();
  const { rate, description, mainMaterial, translationsKey } = product;
  const { t, i18n } = useTranslation();
  const { currentPrice, currency } = useSelector(({ Products: { productToSend }, Currency }) => ({
    currentPrice: productToSend.price || price,
    currentWeight: productToSend.dimensions.weightInKg || 0,
    currentVolume: productToSend.dimensions.volumeInLiters || 0,
    currency: Currency.currency
  }));
  const language = i18n.language === 'ua' ? 0 : 1;

  const currencySign = getCurrencySign(currency);
  const checkAvailableProduct = (item) => {
    if (item && item.sizes) {
      if (item.sizes[0].size.available) return null;
      return <div className={styles.notAvailable}>{t('product.notAvailable')}</div>;
    }
  };
  return (
    <div className={styles.common}>
      <div className={styles.head}>
        <span className={styles.title}>{t(`${translationsKey}.name`)}</span>
        {checkAvailableProduct(product)}
      </div>
      <Tooltip className={styles.rate} title={rate.toFixed(2)} placement='left'>
        <span>
          <Rating value={rate} readOnly precision={0.1} />
        </span>
      </Tooltip>
      {countComments ? (
        <a href={SCROLL_BAR_LINKS} className={styles.comments}>
          {countComments.count} {t('product.comments.title')}
        </a>
      ) : null}
      {product ? (
        <div className={styles.text}>{parse(description[language].value).slice(2)}</div>
      ) : null}

      {Object.keys(currentPrice).length ? (
        <div className={styles.priceContainer}>
          <span data-cy='price' className={styles.price}>
            <FontAwesomeIcon icon={currencySign} />
            {Math.round(currentPrice[currency]?.value).toFixed(2)}
            {'\u00A0'}
          </span>
        </div>
      ) : null}
      <div className={styles.look}>
        <span className={styles.subtitle}>{t('common.color')}</span>
        {': '}
        <span className={styles.subtitleBold}>
          {t(`${mainMaterial.color.translations_key}.name`)}
        </span>
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
      </div>
    </div>
  );
};

export default ProductInfo;
