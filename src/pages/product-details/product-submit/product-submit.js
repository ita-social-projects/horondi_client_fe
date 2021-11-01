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

import { selectLanguageProductsUserWishlist } from '../../../redux/selectors/multiple.selectors';

import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../const/routes';

const { pathToCart } = routes;

const ProductSubmit = ({ setSizeIsNotSelectedError, sizes, product }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { productToSend, userData, cartList } = useSelector(selectLanguageProductsUserWishlist);

  const { t } = useTranslation();

  const isItemInCart = useMemo(
    () =>
      cartList.find(
        (item) =>
          productToSend.product._id === item.product._id &&
          productToSend.options.size._id === item.options.size._id
      ),
    [productToSend?.product?._id, productToSend?.options?.size?._id, cartList]
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

  // const [isInWishlist, addOrRemoveItemFromWishlistHandler] =    useAddProductToWishlistHandler(product);
  const isInWishlist = false;
  const addOrRemoveItemFromWishlistHandler = () => {};
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
