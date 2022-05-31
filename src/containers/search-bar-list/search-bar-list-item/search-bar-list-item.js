import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { useStyles } from './search-bar-list-item.styles';
import { getImage } from '../../../utils/imageLoad';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import { IMG_URL } from '../../../configs';
import { ClassicButton } from '../../../components/classic-button/classic-button';
import routes from '../../../configs/routes';
import { useCurrency } from '../../../hooks/use-currency';

const { pathToProducts } = routes;

const SearchBarListItem = ({ product }) => {
  const { getPriceWithCurrency } = useCurrency();
  const { t } = useTranslation();

  const [image, setImage] = useState(IMG_URL + product.images.primary.small);
  const dispatch = useDispatch();
  const styles = useStyles({ image });
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  useEffect(() => {
    getImage(product.images.primary.small)
      .then((src) => setImage(src))
      .catch(() => setImage(isLightTheme ? productPlugLight : productPlugDark));

    return () => setImage(null);
  }, [isLightTheme, product.images.primary.small]);

  return (
    <div className={styles.searchBarListItem}>
      <div data-testid='image' className={styles.image} style={{ backgroundSize: 'cover' }} />
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography variant='h4'>{t(`${product.translationsKey}.name`)}</Typography>
          <div>
            {Math.min(...product.sizes.map((size) => getPriceWithCurrency(size.price)))}{' '}
            {getPriceWithCurrency(product.basePrice)}
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
