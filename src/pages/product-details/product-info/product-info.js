import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Rating from '@material-ui/lab/Rating';
import parse from 'html-react-parser';

import clsx from 'clsx';
import { useStyles } from './product-info.styles';
import { IMG_URL } from '../../../configs';
import Colors from './colors';
import { SCROLL_BAR_LINKS } from '../constants';
import { useCurrency } from '../../../hooks/use-currency';

import AddToWishListIcon from '../../../components/add-to-wishlist-icon/add-to-wishlist-icon';

const ProductInfo = ({ product, countComments, currentPrice }) => {
  const [isPatternZoomed, setPatternZoom] = useState(false);
  const styles = useStyles();
  const { rate, mainMaterial, translationsKey } = product;
  const { t } = useTranslation();
  const { getPriceWithCurrency, currencySign } = useCurrency();

  const productIsDeleted = <div className={styles.isDeleted}>{t('product.isDeleted')}</div>;
  const checkDisabledProductResult = product.available ? null : (
    <div className={styles.notAvailable}>{t('product.notAvailable')}</div>
  );
  const productStatus = product.isDeleted ? productIsDeleted : checkDisabledProductResult;

  const correctCommentsName = (count) => {
    if (count === 0) return t('product.comments.noComments');
    if (count === 1) return t('product.comments.commentsOne');
    if (count === 2 || count === 3 || count === 4) return t('product.comments.commentsTwo');
    if (count > 4) return t('product.comments.moreComments');
  };
  const shortProductInfo = (text) => {
    if (text.length > 2) return text.slice(0, 2);
    return text;
  };

  return (
    <div className={styles.common}>
      <div className={styles.head}>
        <span className={styles.title}>{t(`${translationsKey}.name`)}</span>
        <AddToWishListIcon product={product} className={styles.addToFavouriteButton} />
        {productStatus}
      </div>
      <span className={styles.rate}>
        <Rating value={rate} readOnly precision={0.1} />
        <a href={SCROLL_BAR_LINKS} className={styles.comments}>
          {countComments.count ? countComments.count : null}{' '}
          {correctCommentsName(countComments.count)}
        </a>
      </span>
      <div className={styles.text}>
        {shortProductInfo(parse(t(`${translationsKey}.description`)))}
      </div>
      {currentPrice ? (
        <div className={styles.priceContainer}>
          <span data-cy='price' className={styles.price}>
            {currencySign} {getPriceWithCurrency(currentPrice).toFixed(2)}
          </span>
        </div>
      ) : null}
      <div className={styles.look}>
        <div className={styles.colorAndPatern}>
          <span className={styles.subtitle}>
            {t('common.color')}
            {': '}
            <span className={styles.subtitleBold}>
              {t(`${mainMaterial.color.translations_key}.name`)}
            </span>
          </span>
          <img
            className={styles.circle}
            alt='color'
            src={Colors[`${product.mainMaterial.color.name[1].value}`]}
          />
        </div>
        <div className={styles.colorAndPatern}>
          <span className={styles.subtitle}>{t('product.pattern')}:</span>
          <img
            onClick={() => setPatternZoom(!isPatternZoomed)}
            className={clsx(styles.patternButton, styles.circle, {
              [styles.zoomedPattern]: isPatternZoomed
            })}
            src={`${IMG_URL}${product.pattern.images.thumbnail}`}
            alt='pattern'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
