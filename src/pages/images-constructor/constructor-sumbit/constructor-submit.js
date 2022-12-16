import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { useStyles } from './constructor-submit.styles';

import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../configs/routes';
import { useCart } from '../../../hooks/use-cart';

const { pathToCart } = routes;

const ConstructorSubmit = ({ constructorValues }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { cartOperations, isInCart } = useCart();
  const { addToCart, getConstructorPrice } = cartOperations;

  const { t } = useTranslation();

  const isItemInCart = isInCart(constructorValues._id, constructorValues.sizeAndPrice.size._id);

  const TOAST_SETTINGS = {
    autoClose: 3000,
    hideProgressBar: true
  };

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
        sizeAndPrice: {
          ...constructorValues.sizeAndPrice,
          price: getConstructorPrice(constructorValues)
        },
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

  const cartButtonFunc = isItemInCart ? goToCheckout : onAddToCart;

  return (
    <div className={styles.submitContainer}>
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
