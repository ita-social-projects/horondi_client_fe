import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

import { useStyles } from '../../../containers/orders/order/empty-order/empty-order.styles';
import ThemeContext from '../../../context/theme-context';
import { BackpackIcon } from '../../../images/backpack-icon';

const EmptyWishlist = () => {
  const [isLightTheme] = useContext(ThemeContext);
  const styles = useStyles();
  const { t } = useTranslation();

  const titleStyles = isLightTheme ? styles.whiteThemeTitle : styles.darkThemeTitle;

  return (
    <div className={styles.root} data-cy='empty-wishlist'>
      <Typography className={titleStyles} variant='h2'>
        {t('wishlist.wishlistTitles.empty')}
      </Typography>
      <BackpackIcon className={styles.defaultBackpackIcon} />
      <Link to='/catalog/products?page=1&sort=null&countPerPage=9'>
        <Button className={styles.button} variant='contained'>
          {t('wishlist.wishlistButtons.empty')}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
