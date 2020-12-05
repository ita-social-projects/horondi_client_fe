import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-submit.styles';

import {
  addItemToWishlist,
  removeItemFromWishlist
} from '../../../redux/wishlist/wishlist.actions';
import { addItemToCart } from '../../../redux/cart/cart.actions';

import {
  PDP_BUTTONS,
  TOOLTIPS
} from '../../../translations/product-details.translations';

const ProductSubmit = ({ setSizeIsNotSelectedError, sizes }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, productToSend, product, wishlistItems } = useSelector(
    ({ Language, Products, User, Wishlist }) => ({
      language: Language.language,
      productToSend: Products.productToSend,
      product: Products.product,
      userData: User.userData,
      wishlistItems: Wishlist.list
    })
  );

  const { selectedSize } = productToSend;

  const isWishful = useMemo(
    () => wishlistItems.find((item) => product._id === item._id),
    [product._id, wishlistItems]
  );

  const sizeToSend = useMemo(
    () => sizes.find(({ _id }) => _id === selectedSize),
    [selectedSize, sizes]
  );

  const wishlistTip = isWishful
    ? TOOLTIPS[language].removeWishful
    : TOOLTIPS[language].addWishful;

  const onWishfulHandler = () => {
    const {
      _id,
      name,
      basePrice,
      images: { primary }
    } = product;
    if (isWishful) {
      dispatch(removeItemFromWishlist(_id));
    } else {
      dispatch(
        addItemToWishlist({ _id, name, basePrice, images: { primary } })
      );
    }
  };

  const onAddToCart = () => {
    if ((product && !product.options[0].size) || selectedSize) {
      dispatch(
        addItemToCart({
          ...productToSend,
          selectedSize: sizeToSend ? sizeToSend.name : ''
        })
      );
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  const onAddToCheckout = () => {
    if ((product && !product.options[0].size) || selectedSize) {
      dispatch(
        addItemToCart({
          ...productToSend,
          selectedSize: sizeToSend ? sizeToSend.name : ''
        })
      );
      dispatch(push('/checkout'));
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  return (
    <div className={styles.submit}>
      <Tooltip title={wishlistTip} placement='bottom'>
        {isWishful ? (
          <FavoriteIcon
            data-cy='wishful'
            className={styles.redHeart}
            onClick={onWishfulHandler}
          />
        ) : (
          <FavouriteBorderIcon
            data-cy='not-wishful'
            className={styles.heart}
            onClick={onWishfulHandler}
          />
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

export default ProductSubmit;
