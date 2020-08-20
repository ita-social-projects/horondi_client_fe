import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import useStyles from './product-submit.styles';

import {
  addItemToWishlist,
  removeItemFromWishlist
} from '../../../redux/wishlist/wishlist.actions';
import { addItemToCart } from '../../../redux/cart/cart.actions';
import { getFromLocalStorage } from '../../../services/local-storage.service';

import { PDP_BUTTONS } from '../../../translations/product-details.translations';

const ProductSubmit = ({ checkSize, language, productToSend, product }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const wishlistItems = getFromLocalStorage('wishlist');

  const isWishful = wishlistItems
    ? wishlistItems.find((item) => product._id === item._id)
    : false;

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
      <FavoriteIcon
        data-cy='wishful'
        className={isWishful ? styles.redHeart : styles.heart}
        onClick={onWishfulHandler}
      />
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
