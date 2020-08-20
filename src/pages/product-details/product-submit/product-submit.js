import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import useStyles from './product-submit.styles';

import {
  addItemToWishlist,
  removeItemFromWishlist
} from '../../../redux/wishlist/wishlist.actions';
import { addItemToCart } from '../../../redux/cart/cart.actions';
import { getFromLocalStorage } from '../../../services/local-storage.service';

import {
  PDP_BUTTONS,
  TOOLTIPS
} from '../../../translations/product-details.translations';

const ProductSubmit = ({ checkSize, productToSend, product }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const wishlistItems = getFromLocalStorage('wishlist');

  const isWishful = wishlistItems
    ? wishlistItems.find((item) => product._id === item._id)
    : false;

  const wishlistTip = isWishful
    ? TOOLTIPS[language].removeWishful
    : TOOLTIPS[language].addWishful;

  const onWishfulHandler = () => {
    if (isWishful) {
      dispatch(removeItemFromWishlist(productToSend));
    } else {
      dispatch(addItemToWishlist(productToSend));
    }
  };

  const onAddToCart = () => {
    const isChecked = checkSize();
    if (isChecked) {
      dispatch(addItemToCart(productToSend));
    }
  };

  const onAddToCheckout = () => {
    const isChecked = checkSize();
    if (isChecked) {
      dispatch(addItemToCart(productToSend));
      dispatch(push('/checkout'));
    }
  };

  return (
    <div className={styles.submit}>
      <Tooltip title={wishlistTip} placement='bottom'>
        <FavoriteIcon
          data-cy='wishful'
          className={isWishful ? styles.redHeart : styles.heart}
          onClick={onWishfulHandler}
        />
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

export default ProductSubmit;
