import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStyles } from './constructor-submit.styles';

import { selectLanguageProductsUserWishlist } from '../../../utils/multiple.selectors';
import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../configs/routes';
import useAddProductToWishlistHandler from '../../../hooks/use-add-product-to-wishlist-handler';
import { useCart } from '../../../hooks/use-cart';

const { pathToCart } = routes;

const ConstructorSubmit = ({ isWishful, constructorValues, sizeAndPrice, allSizes }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { userData } = useSelector(selectLanguageProductsUserWishlist);
  const { cartOperations, isInCart } = useCart(userData);

  const { t } = useTranslation();
  const productToSend = {
    id: Date.now(),
    allSizes,
    options: { size: sizeAndPrice.size, price: sizeAndPrice.price },
    product: {
      ...constructorValues,
      isFromConstructor: true,
      pattern:
        constructorValues.patterns !== undefined
          ? constructorValues.patterns
          : constructorValues._id,
      mainMaterial: {
        color: {
          _id: constructorValues.patterns ? constructorValues.patterns._id : constructorValues._id
        }
      },
      category: {
        _id: constructorValues.patterns ? constructorValues.patterns._id : constructorValues._id
      }
    },
    quantity: 1
  };

  const isItemInCart = isInCart(constructorValues._id, constructorValues.sizes._id);

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
        productId: constructorValues._id,
        sizeAndPrice,
        quantity: 1,
        constructor: { isConstructor: true }
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
