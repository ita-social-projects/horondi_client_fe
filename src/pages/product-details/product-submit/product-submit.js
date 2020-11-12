import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-submit.styles';

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

const ProductSubmit = ({ setSizeIsNotSelectedError, sizes }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, productToSend, product, userData } = useSelector(
    ({ Language, Products, User }) => ({
      language: Language.language,
      productToSend: Products.productToSend,
      product: Products.product,
      userData: User.userData
    })
  );

  const wishlistItems = userData
    ? userData.wishlist
    : getFromLocalStorage('wishlist');

  const { selectedSize } = productToSend;

  const isWishful = useMemo(
    () => wishlistItems.find((item) => product._id === item._id),
    [product._id, wishlistItems]
  );

  const sizeToSend = useMemo(
    () => (sizes ? sizes.find(({ _id }) => _id === selectedSize) : null),
    [selectedSize, sizes]
  );

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
    if ((product && !product.options[0].size) || selectedSize) {
      dispatch(addItemToCart({ ...productToSend, selectedSize: sizeToSend }));
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  const onAddToCheckout = () => {
    if ((product && !product.options[0].size) || selectedSize) {
      dispatch(addItemToCart({ ...productToSend, selectedSize: sizeToSend }));
      dispatch(push('/checkout'));
    } else {
      setSizeIsNotSelectedError(true);
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
