import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-submit.styles';
import { TOAST_SETTINGS } from '../constants';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import routes from '../../../configs/routes';
import { useCart } from '../../../hooks/use-cart';
import Toast from '../../../containers/toast';

const { pathToCart } = routes;

const ProductSubmit = ({ setSizeIsNotSelectedError, product, disabled, productToSend }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));
  const { cartOperations, isInCart } = useCart(userData);
  const { t } = useTranslation();

  const isItemInCart = isInCart(productToSend.product._id, productToSend.options.size._id);

  const { addToCart } = cartOperations;

  const [isOpenedSnackbar, setIsOpenedSnackbar] = React.useState(false);

  const cartTootipTitle = () => {
    if (disabled) return t('product.sizeNotAvailable');
    return isItemInCart
      ? t('product.tooltips.itemInCart')
      : t('product.tooltips.itemInCartAlready');
  };

  const cartButtonLabel = isItemInCart
    ? t('product.pdpButtons.inCart')
    : t('product.pdpButtons.cartButton');

  const onAddToCart = () => {
    setIsOpenedSnackbar(true);
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
        quantity: 1,
        constructor: false,
        category: product.category.name[1].value
      };

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

  const cartButtonFunc = isItemInCart ? goToCheckout : onAddToCart;

  return (
    <div className={styles.submit}>
      <Button disabled={disabled} className={styles.submitButton} onClick={onAddToCheckout}>
        {t('product.pdpButtons.buyButton').toLocaleUpperCase()}
      </Button>
      <Tooltip title={cartTootipTitle()} placement='bottom'>
        <div>
          <Button disabled={disabled} className={styles.toCart} onClick={cartButtonFunc}>
            {cartButtonLabel.toLocaleUpperCase()}
          </Button>
        </div>
      </Tooltip>
      <Toast
        isOpenedSnackbar={isOpenedSnackbar}
        setIsOpenedSnackbar={setIsOpenedSnackbar}
        message={t('product.toastMessage.addedToCard')}
      />
    </div>
  );
};
export default ProductSubmit;
