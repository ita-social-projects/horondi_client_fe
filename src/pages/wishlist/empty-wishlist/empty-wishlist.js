import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core';

import { useStyles } from './empty-wishlist.styles';
import { WISHLIST_IMAGES } from '../../../configs';

const EmptyWishlist = () => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));
  const styles = useStyles();
  const { t } = useTranslation();
  const emptyWishlistImgLink = isLightTheme
    ? WISHLIST_IMAGES.lightTheme
    : WISHLIST_IMAGES.darkTheme;

  return (
    <div className={styles.root} data-cy='empty-wishlist'>
      <Typography variant='h2'>{t('wishlist.wishlistTitles.empty')}</Typography>
      <img src={emptyWishlistImgLink} alt='empty wishlist' />
      <Link to='/catalog/products?page=1&sort=null&countPerPage=9'>
        <Button className={styles.button} variant='contained'>
          {t('wishlist.wishlistButtons.empty')}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
