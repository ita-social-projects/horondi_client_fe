import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { TableCell, TableRow, IconButton } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { useStyles } from './wishlist-item.styles';
import { IMG_URL } from '../../../configs';
import routes from '../../../configs/routes';
import ThemeContext from '../../../context/theme-context';
import { useCurrency } from '../../../hooks/use-currency';

const { pathToProducts } = routes;

const WishlistItem = ({
  item,
  setModalVisibility,
  setModalItem,
  cartOperations,
  currency,
  isInCart
}) => {
  const { t } = useTranslation();
  const [isLightTheme] = useContext(ThemeContext);
  const { getPriceWithCurrency, getCurrencySign } = useCurrency();
  const styles = useStyles(isLightTheme);
  const dispatch = useDispatch();
  const { addToCart } = cartOperations;
  const { pathToCart } = routes;
  const currencySign = getCurrencySign();
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
    quantity: 1,
    category: productForCart.product.category
  };

  const onAddToCart = () => {
    addToCart(newCart);
  };

  const cartButtonFunc = isItemInCart ? goToCheckout : onAddToCart;

  const getPrice = () => {
    const availableSizes = item.sizes.filter(
      ({ size, price }) => size.available && { size, price }
    );

    return availableSizes.length ? (
      <div className={styles.price}>
        {currencySign}
        {getPriceWithCurrency(availableSizes[0].price)}
      </div>
    ) : (
      <>{t('product.sizeNotAvailable')}</>
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
              <span className={styles.itemName}>{t(`${item.translationsKey}.name`)}</span>
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
          <IconButton
            className={styles.deleteButton}
            role='button'
            aria-label='Delete from wishlist'
            onClick={onRemoveItem}
          >
            <DeleteIcon className={styles.deleteIcon} fontSize='default' />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default WishlistItem;
