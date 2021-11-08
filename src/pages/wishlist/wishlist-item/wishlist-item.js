import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableCell, TableRow } from '@material-ui/core';
import { useStyles } from './wishlist-item.styles';
import { IMG_URL } from '../../../configs';
import { getCurrencySign } from '../../../utils/currency';
import routes from '../../../const/routes';
import ThemeContext from '../../../context/theme-context';
import { addItemToCart, addProductToUserCart } from '../../../redux/cart/cart.actions';

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

  const language = i18n.language === 'ua' ? 0 : 1;
  const currencySign = getCurrencySign(currency);
  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  const productForCart = {
    allSizes: item.sizes.filter((el) => el.size.available),
    id: Date.now().toString(),
    product: item,
    quantity: 1,
    options: { size: item.sizes.find((el) => el.size.available).size },
    price: item.sizes.find((el) => el.size.available).price
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
  };

  const getPrice = () => {
    const availableSizes = item.sizes.filter(
      ({ size, price }) => size.available && { size, price }
    );

    return availableSizes.length
      ? availableSizes[0].price[currency].value
      : t('productList.sizeNotAvailable.value');
  };

  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell>
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
      <TableCell>
        <div className={styles.priceWrapper}>
          <FontAwesomeIcon icon={currencySign} />
          {'\u00A0'}
          {getPrice()}
        </div>
      </TableCell>
      <TableCell>
        <div className={styles.delete}>
          <div className={styles.deleteWrapper}>
            <Button variant='contained' className={styles.cartButton} onClick={onAddToCart}>
              {t('wishlist.wishlistButtons.toCart')}
            </Button>
            <div className={styles.deleteIcon}>
              <DeleteIcon onClick={onRemoveItem} fontSize='default' />
            </div>
            <Link to={`${pathToProducts}/${item._id}`}>
              <Button variant='contained' className={styles.detailsButton}>
                {t('wishlist.wishlistButtons.toItem')}
              </Button>
            </Link>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default WishlistItem;
