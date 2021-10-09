import React from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './constructor-submit.styles';

const ConstructorSubmit = ({ onAddToCart, onAddToCheckout, isWishful }) => {
  const styles = useStyles();

  const { t } = useTranslation();

  const wishlistTip = isWishful ? t('buttons.removeWishful') : t('buttons.addWishful');

  return (
    <div className={styles.submitContainer}>
      <Tooltip title={wishlistTip} placement='bottom'>
        {isWishful ? (
          <FavoriteIcon data-cy='wishful' className={styles.redHeart} />
        ) : (
          <FavouriteBorderIcon data-cy='not-wishful' className={styles.heart} />
        )}
      </Tooltip>
      <Button className={styles.submitButton} onClick={onAddToCart}>
        {t('buttons.cartButton')}
      </Button>
      <Button className={styles.submitButton} onClick={onAddToCheckout}>
        {t('buttons.buyButton')}
      </Button>
    </div>
  );
};

export default ConstructorSubmit;
