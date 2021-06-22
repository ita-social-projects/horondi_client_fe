import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-submit.styles';

import { toastSettings } from '../../../configs/index';

import { selectLanguageProductsUserWishlist } from '../../../redux/selectors/multiple.selectors';

import {
  addItemToWishlist,
  removeItemFromWishlist
} from '../../../redux/wishlist/wishlist.actions';
import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';

import { PDP_BUTTONS, TOOLTIPS } from '../../../translations/product-details.translations';

import { TOAST_MESSAGE } from '../../../translations/toast.translations';
import routes from '../../../const/routes';

const { pathToCart } = routes;

const ProductSubmit = ({ setSizeIsNotSelectedError, sizes }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, productToSend, product, wishlistItems, userData } = useSelector(
    selectLanguageProductsUserWishlist
  );

  const isWishful = useMemo(() => wishlistItems.find((item) => product._id === item._id), [
    product._id,
    wishlistItems
  ]);

  const wishlistTip = isWishful ? TOOLTIPS[language].removeWishful : TOOLTIPS[language].addWishful;

  const toastMessages = TOAST_MESSAGE[language];

  const onWishfulHandler = () => {
    const {
      _id,
      name,
      basePrice,
      images: { primary }
    } = product;

    if (isWishful) {
      dispatch(removeItemFromWishlist(_id));
      dispatch(setToastMessage(toastMessages.removedFromWishList));
      dispatch(setToastSettings(toastSettings));
    } else {
      dispatch(addItemToWishlist({ _id, name, basePrice, images: { primary } }));
      dispatch(setToastMessage(toastMessages.addedToWishList));
      dispatch(setToastSettings(toastSettings));
    }
  };

  const onAddToCart = () => {
    if (product) {
      if (userData) {
        const newCartItemWithUserId = {
          userId: userData._id,
          cartItem: productToSend
        };
        dispatch(addProductToUserCart(newCartItemWithUserId));
      } else {
        dispatch(addItemToCart(productToSend));
      }
      dispatch(setToastMessage(toastMessages.addedToCard));
      dispatch(setToastSettings(toastSettings));
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  const onAddToCheckout = () => {
    if (product) {
      onAddToCart();
      dispatch(push(pathToCart));
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  return (
    <div className={styles.submit}>
      <Tooltip title={wishlistTip} placement='bottom'>
        {isWishful ? (
          <FavoriteIcon data-cy='wishful' className={styles.redHeart} onClick={onWishfulHandler} />
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
