import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableCell, TableRow } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useStyles } from './wishlist-item.styles';
import { IMG_URL } from '../../../configs';
import { getCurrencySign } from '../../../utils/currency';
import routes from '../../../configs/routes';
import ThemeContext from '../../../context/theme-context';
import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';
import { useCart } from '../../../hooks/use-cart';

const { pathToProducts } = routes;

const WishlistItem = ({ item, setModalVisibility, setModalItem }) => {
  const { currency, userData } = useSelector(({ Currency, User }) => ({
    currency: Currency.currency,
    userData: User.userData
  }));

  const { t, i18n } = useTranslation();
  const [isLightTheme] = useContext(ThemeContext);
  const styles = useStyles(isLightTheme);
  const dispatch = useDispatch();
  const { cartOperations, isInCart } = useCart(userData);
  const { addToCart } = cartOperations;
  const { pathToCart } = routes;
  const language = i18n.language === 'ua' ? 0 : 1;
  const currencySign = getCurrencySign(currency);
  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  const goToCheckout = () => {
    dispatch(push(pathToCart));
  };

  const isItemInCart = isInCart(item._id);

  const cartButtonLabel = isItemInCart
    ? t('product.pdpButtons.inCart')
    : t('product.pdpButtons.cartButton');

  const productForCart = {
    allSizes: item.sizes.filter((el) => el.size?.available),
    id: Date.now().toString(),
    product: item,
    quantity: 1,
    options: { size: item.sizes.find((el) => el.size?.available)?.size },
    price: item.sizes.find((el) => el.size?.available)?.price
  };

  const newCart = {
    id: Date.now(),
    productId: productForCart.product._id,
    sizeAndPrice: { size: productForCart.allSizes[0]?.size, price: productForCart.price },
    quantity: 1
  };

  const onAddToCart = () => {
    if (userData) {
      const newCartItemWithUserId = {
        userId: userData._id,
        cartItem: productForCart
      };
      dispatch(addProductToUserCart(newCartItemWithUserId));
    } else {
      dispatch(addItemToCart(productForCart));
    }
    addToCart(newCart);
  };

  const cartButtonFunc = isItemInCart ? goToCheckout : onAddToCart;

  const getPrice = () => {
    const availableSizes = item.sizes.filter(
      ({ size, price }) => size.available && { size, price }
    );

    return availableSizes.length ? (
      <>
        <FontAwesomeIcon icon={currencySign} />
        {'\u00A0'}
        {availableSizes[0].price[currency].value}
      </>
    ) : (
      <>{t('productList.sizeNotAvailable.value')}</>
    );
  };
  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell className={styles.allItems}>
        <div className={styles.product}>
          <Link to={`${pathToProducts}/${item._id}`}>
            <img
              className={styles.itemImg}
              src={`${IMG_URL}${item.images.primary.thumbnail} `}
              alt='product-img'
            />
          </Link>
          <div>
            <Link to={`${pathToProducts}/${item._id}`}>
              <span className={styles.itemName}>{item.name[language].value}</span>
            </Link>
            {item.bottomMaterial && (
              <div className={styles.description}>
                {t('wishlist.wishlistTitles.bottomMaterial')}:{' '}
                {t(`${item.bottomMaterial.material.translationsKey}.name`)}
              </div>
            )}
          </div>
        </div>
      </TableCell>
      <TableCell className={styles.allItems}>
        <div className={styles.priceWrapper}>{getPrice()}</div>
      </TableCell>
      <TableCell className={styles.allItems}>
        <div className={styles.delete}>
          <div className={styles.deleteWrapper}>
            {!!productForCart.options.size && (
              <Button variant='contained' className={styles.cartButton} onClick={cartButtonFunc}>
                {cartButtonLabel}
              </Button>
            )}
            <Link to={`${pathToProducts}/${item._id}`}>
              <Button variant='contained' className={styles.detailsButton}>
                {t('wishlist.wishlistButtons.toItem')}
              </Button>
            </Link>
          </div>
          <div className={styles.deleteIcon}>
            <DeleteIcon onClick={onRemoveItem} fontSize='default' />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default WishlistItem;
