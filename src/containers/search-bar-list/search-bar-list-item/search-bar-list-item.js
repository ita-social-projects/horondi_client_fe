import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { useStyles } from './search-bar-list-item.styles';
import { ClassicButton } from '../../../components/classic-button/classic-button';
import routes from '../../../configs/routes';
import { useCurrency } from '../../../hooks/use-currency';
import { CurrencyContext } from '../../../context/currency-context';
import useProductImage from '../../../hooks/use-product-image';

const { pathToProducts } = routes;

const SearchBarListItem = ({ product }) => {
  const { getPriceWithCurrency } = useCurrency();
  const { currency } = useContext(CurrencyContext);
  const { t } = useTranslation();

  const { imageUrl, checkImage } = useProductImage();

  const dispatch = useDispatch();
  const styles = useStyles({ imageUrl });
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  useEffect(() => {
    checkImage(product.images.primary.small, isLightTheme);
  }, [product.images.primary.small, checkImage, isLightTheme]);

  return (
    <div className={styles.searchBarListItem}>
      <div data-testid='image' className={styles.image} style={{ backgroundSize: 'cover' }} />
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography data-testid='title' variant='h6'>
            {t(`${product.translationsKey}.name`)}
          </Typography>
          <div>
            {Math.min(...product.sizes.map((size) => getPriceWithCurrency(size.price)))} {currency}
          </div>
        </div>
        <div className={styles.buttons}>
          <ClassicButton
            buttonType='button'
            innerText={t('common.details')}
            onClickHandler={() => dispatch(push(`${pathToProducts}/${product._id}`))}
            buttonStyle='classic'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarListItem;
