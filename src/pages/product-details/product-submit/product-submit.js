import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-submit.styles';

import { toastSettings } from '../../../configs/index';

import { selectLanguageProductsUserWishlist } from '../../../utils/multiple.selectors';

import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../configs/routes';
import useAddProductToWishlistHandler from '../../../hooks/use-add-product-to-wishlist-handler';
import { useCart } from '../../../hooks/use-cart';
import { addToCart } from '../../../redux/newCart/cart.actions';

const { pathToCart } = routes;

const ProductSubmit = ({ setSizeIsNotSelectedError, product }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { productToSend, userData } = useSelector(selectLanguageProductsUserWishlist);
  const { addToCart: addToCartHook, isInCart } = useCart(userData);

  const { t } = useTranslation();

  const isItemInCart = useMemo(
    () => isInCart(productToSend?.product?._id),
    [addToCartHook, productToSend?.product?._id, productToSend?.options?.size?._id]
  );

  const cartTootipTitle = isItemInCart
    ? t('product.tooltips.itemInCart')
    : t('product.tooltips.itemInCartAlready');

  const cartButtonLabel = isItemInCart
    ? t('product.pdpButtons.inCart')
    : t('product.pdpButtons.cartButton');

  const buttonStyle = isItemInCart ? styles.unavailableButton : styles.submitButton;

  const onAddToCart = () => {
    if (isItemInCart) {
      return;
    }
    if (product) {
      if (userData) {
        const newCartItemWithUserId = {
          userId: userData._id,
          cartItem: productToSend
        };
        const testCart = {
          productId: productToSend.product._id,
          size: productToSend.options.size._id,
          price: productToSend.price,
          quantity: 1
        };

        dispatch(addToCart(testCart));
        addToCartHook(testCart);
        dispatch(addProductToUserCart(newCartItemWithUserId));
      } else {
        dispatch(addItemToCart(productToSend));
      }
      dispatch(setToastMessage(t('product.toastMessage.addedToCard')));
      dispatch(setToastSettings(toastSettings));
    } else {
      setSizeIsNotSelectedError(true);
    }
  };

  const goToCheckout = () => {
    dispatch(push(pathToCart));
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
      dispatch(setToastSettings(toastSettings));
    } else {
      dispatch(setToastMessage(t('product.toastMessage.addedToWishList')));
      dispatch(setToastSettings(toastSettings));
    }
  };

  return (
    <div className={styles.submit}>
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
      <Tooltip title={cartTootipTitle} placement='bottom'>
        <Button className={buttonStyle} onClick={cartButtonFunc}>
          {cartButtonLabel}
        </Button>
      </Tooltip>
      <Button className={styles.submitButton} onClick={onAddToCheckout}>
        {t('product.pdpButtons.buyButton')}
      </Button>
    </div>
  );
};
export default ProductSubmit;
