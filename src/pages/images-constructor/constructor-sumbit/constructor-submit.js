import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './constructor-submit.styles';

import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../configs/routes';
import useAddProductToWishlistHandler from '../../../hooks/use-add-product-to-wishlist-handler';
import { useCart } from '../../../hooks/use-cart';

const { pathToCart } = routes;

const ConstructorSubmit = ({ isWishful, constructorValues, sizeAndPrice, allSizes }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));
  const { cartOperations, isInCart } = useCart(userData);

  const { t } = useTranslation();

  const isItemInCart = isInCart(constructorValues._id, constructorValues.size._id);

  const TOAST_SETTINGS = {
    autoClose: 3000,
    hideProgressBar: true
  };

  const { addToCart } = cartOperations;
  const cartTootipTitle = isItemInCart
    ? t('product.tooltips.itemInCart')
    : t('product.tooltips.itemInCartAlready');

  const cartButtonLabel = isItemInCart
    ? t('product.pdpButtons.inCart')
    : t('product.pdpButtons.cartButton');

  const onAddToCart = () => {
    if (isItemInCart) {
      return;
    }
    if (constructorValues) {
      const newCart = {
        id: Date.now(),
        ...constructorValues,
        sizeAndPrice,
        quantity: 1,
        isFromConstructor: true,
        category: { code: 'constructor' }
      };

      addToCart(newCart);

      dispatch(setToastMessage(t('product.toastMessage.addedToCard')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    }
  };

  const goToCheckout = () => {
    new Promise((resolve) => resolve()).then(() => dispatch(push(pathToCart)));
  };

  const onAddToCheckout = () => {
    if (constructorValues) {
      onAddToCart();
      goToCheckout();
    }
  };

  const [isInWishlist, addOrRemoveItemFromWishlistHandler] =
    useAddProductToWishlistHandler(constructorValues);
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
    <div className={styles.submitContainer}>
      <Tooltip title={wishlistTip} placement='bottom'>
        {isWishful ? (
          <FavoriteIcon data-cy='wishful' className={styles.redHeart} onClick={wishlistHandler} />
        ) : (
          <FavouriteBorderIcon
            data-cy='not-wishful'
            className={styles.heart}
            onClick={wishlistHandler}
          />
        )}
      </Tooltip>
      <Button className={styles.submitButton} onClick={onAddToCheckout}>
        {t('buttons.buyButton')}
      </Button>
      <Tooltip title={cartTootipTitle} placement='bottom'>
        <Button className={styles.buttonStyle} onClick={cartButtonFunc}>
          {cartButtonLabel}
        </Button>
      </Tooltip>
    </div>
  );
};

export default ConstructorSubmit;
