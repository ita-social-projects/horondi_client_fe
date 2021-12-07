import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-submit.styles';

import { TOAST_SETTINGS } from '../constants';

import { selectLanguageProductsUserWishlist } from '../../../utils/multiple.selectors';

import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../configs/routes';
import useAddProductToWishlistHandler from '../../../hooks/use-add-product-to-wishlist-handler';
import { useCart } from '../../../hooks/use-cart';

const { pathToCart } = routes;

const ProductSubmit = ({ setSizeIsNotSelectedError, product }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { productToSend, userData } = useSelector(selectLanguageProductsUserWishlist);
  const { cartOperations, isInCart } = useCart(userData);

  const { t } = useTranslation();

  const isItemInCart = isInCart(productToSend.product._id, productToSend.options.size._id);

  const { addToCart } = cartOperations;
  const cartTootipTitle = isItemInCart
    ? t('product.tooltips.itemInCart')
    : t('product.tooltips.itemInCartAlready');

  const cartButtonLabel = isItemInCart
    ? t('product.pdpButtons.inCart')
    : t('product.pdpButtons.cartButton');

  // const buttonStyle = isItemInCart ? styles.unavailableButton : styles.submitButton;

  const onAddToCart = () => {
    if (isItemInCart) {
      return;
    }
    if (product) {
      const sizeAndPrice = product.sizes.find(
        (size) => size.size._id === productToSend.options.size._id && size
      );
      const newCart = {
        id: Date.now(),
        productId: productToSend.product._id,
        sizeAndPrice,
        quantity: 1
      };

      if (userData) {
        const newCartItemWithUserId = {
          userId: userData._id,
          cartItem: productToSend
        };

        dispatch(addProductToUserCart(newCartItemWithUserId));
      } else {
        dispatch(addItemToCart(productToSend));
      }

      addToCart(newCart);

      dispatch(setToastMessage(t('product.toastMessage.addedToCard')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  const goToCheckout = () => {
    new Promise((resolve) => resolve()).then(() => dispatch(push(pathToCart)));
  };

  const onAddToCheckout = () => {
    if (product) {
      onAddToCart();
      goToCheckout();
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  const [isInWishlist, addOrRemoveItemFromWishlistHandler] =
    useAddProductToWishlistHandler(product);
  const wishlistTip = isInWishlist
    ? t('product.tooltips.removeWishful')
    : t('product.tooltips.addWishful');

  const cartButtonFunc = isItemInCart ? goToCheckout : onAddToCart;

  const wishlistHandler = () => {
    addOrRemoveItemFromWishlistHandler();

    if (isInWishlist) {
      dispatch(setToastMessage(t('product.toastMessage.removedFromWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    } else {
      dispatch(setToastMessage(t('product.toastMessage.addedToWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    }
  };

  return (
    <div className={styles.submit}>
      <Button className={styles.submitButton} onClick={onAddToCheckout}>
        {t('product.pdpButtons.buyButton')}
      </Button>
      <Tooltip title={cartTootipTitle} placement='bottom'>
        <Button className={styles.toCart} onClick={cartButtonFunc}>
          {cartButtonLabel}
        </Button>
      </Tooltip>
      <Tooltip title={wishlistTip} placement='bottom'>
        {isInWishlist ? (
          <FavoriteIcon data-cy='wishful' className={styles.redHeart} onClick={wishlistHandler} />
        ) : (
          <FavouriteBorderIcon
            data-cy='not-wishful'
            className={styles.heart}
            onClick={wishlistHandler}
          />
        )}
      </Tooltip>
    </div>
  );
};
export default ProductSubmit;
