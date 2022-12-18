import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

import { useStyles } from '../../../containers/orders/order/empty-order/empty-order.styles';
import { BackpackIcon } from '../../../images/backpack-icon';
import PathBack from '../../../containers/orders/cart/path-back/path-back';
import routes from '../../../configs/routes';

const EmptyWishlist = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { pathToCategory } = routes;

  return (
    <>
      <PathBack
        categoryLink={pathToCategory}
        categoryText='cart.pathBack.toCatalog'
        currentPageText='wishlist.wishlistTitles.filled'
      />
      <div className={styles.root} data-cy='empty-wishlist'>
        <Typography className={styles.emptyTitle} variant='h2'>
          {t('wishlist.wishlistTitles.empty')}
        </Typography>
        <BackpackIcon className={styles.defaultBackpackIcon} />
        <Link to='/catalog/products?page=1&sort=null&countPerPage=9'>
          <Button className={styles.button} variant='contained'>
            {t('wishlist.wishlistButtons.empty')}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyWishlist;
