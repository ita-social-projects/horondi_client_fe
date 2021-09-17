import React from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { PDP_BUTTONS, TOOLTIPS } from '../../../translations/product-details.translations';
import { selectLanguageProductsUserWishlist } from '../../../redux/selectors/multiple.selectors';
import { useStyles } from './constructor-submit.styles';

const ConstructorSubmit = ({ onAddToCart, onAddToCheckout, isWishful }) => {
  const styles = useStyles();

  const { language } = useSelector(selectLanguageProductsUserWishlist);

  const wishlistTip = isWishful ? TOOLTIPS[language].removeWishful : TOOLTIPS[language].addWishful;

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
        {PDP_BUTTONS[language].cartButton}
      </Button>
      <Button className={styles.submitButton} onClick={onAddToCheckout}>
        {PDP_BUTTONS[language].buyButton}
      </Button>
    </div>
  );
};

export default ConstructorSubmit;
