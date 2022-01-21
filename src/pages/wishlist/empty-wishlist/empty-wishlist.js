import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

import { useStyles } from '../../../containers/orders/order/empty-order/empty-order.styles';
import { CART_AND_WISHLIST_IMAGES } from '../../../configs';
import ThemeContext from '../../../context/theme-context';

const EmptyWishlist = () => {
  const [isLightTheme] = useContext(ThemeContext);
  const styles = useStyles();
  const { t } = useTranslation();

  const emptyWishlistImgLink = isLightTheme
    ? CART_AND_WISHLIST_IMAGES.lightTheme
    : CART_AND_WISHLIST_IMAGES.darkTheme;
  const titleStyles = isLightTheme ? styles.whiteThemeTitle : styles.darkThemeTitle;

  return (
    <div className={styles.root} data-cy='empty-wishlist'>
      <Typography className={titleStyles} variant='h2'>
        {t('wishlist.wishlistTitles.empty')}
      </Typography>
      <img src={emptyWishlistImgLink} className={styles.image} alt='empty wishlist' />
      <Link to='/catalog/products?page=1&sort=null&countPerPage=9'>
        <Button className={styles.button} variant='contained'>
          {t('wishlist.wishlistButtons.empty')}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
