import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { useStyles } from './search-bar-list-item.styles';
import StarRating from '../../../components/star-rating';
import routes from '../../../configs/routes';
import { useCurrency } from '../../../hooks/use-currency';
import useProductImage from '../../../hooks/use-product-image';

const { pathToProducts } = routes;

const SearchBarListItem = ({ product }) => {
  const { getPriceWithCurrency } = useCurrency();
  const { currencySign } = useCurrency();
  const { t, i18n } = useTranslation();
  const { imageUrl, checkImage } = useProductImage();
  const language = i18n.language === 'ua' ? 0 : 1;

  const dispatch = useDispatch();
  const styles = useStyles({ imageUrl });
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  useEffect(() => {
    checkImage(product.images.primary.small, isLightTheme);
  }, [product.images.primary.small, checkImage, isLightTheme]);

  const productPrices = product.sizes.map((size) => getPriceWithCurrency(size.price));
  const lowestPrice = productPrices.length ? (
    <div className={styles.price}>
      {currencySign}
      <div>{productPrices[0]}</div>
    </div>
  ) : (
    <div className={styles.unavailable}>{t('product.unavailable')}</div>
  );

  return (
    <div className={styles.searchBarListItem}>
      <div
        className={styles.itemBody}
        data-testid='list-item'
        onClick={() => dispatch(push(`${pathToProducts}/${product._id}`))}
      >
        <div data-testid='image' className={styles.image} style={{ backgroundSize: 'cover' }} />
        <div className={styles.content}>
          <div className={styles.title}>
            <Typography data-testid='title' variant='h5' className={styles.name}>
              {t(`${product.translationsKey}.name`)}
            </Typography>
            {lowestPrice}
          </div>
          <div className={styles.rate}>
            <StarRating size='small' readOnly rate={product.rate} />
          </div>
          <div className={styles.category}>{`${t('product.category')}: ${
            product.category.name[language].value
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarListItem;
