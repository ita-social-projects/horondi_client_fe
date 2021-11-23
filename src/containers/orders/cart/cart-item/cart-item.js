import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import { useQuery } from '@apollo/client';
import { useStyles } from './cart-item.styles';
import NumberInput from '../../../../components/number-input';

import { changeCartItemUserQuantity } from '../../../../redux/cart/cart.actions';

import { IMG_URL } from '../../../../configs';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import { getProductById } from '../../operations/order.queries';
import Loader from '../../../../components/loader';
import { useCart } from '../../../../hooks/use-cart';

const { pathToProducts } = routes;

const CartItem = ({ item, language, user, setModalVisibility, setModalItem }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { t } = useTranslation();
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const [inputValue, setInputValue] = useState(item.quantity);
  const currencySign = getCurrencySign(currency);
  const [firstlyMounted, toggleFirstlyMounted] = useState(false);
  const [currentSize, setCurrentSize] = useState(item.size);
  const [currentPrice, setCurrentPrice] = useState(item.price);
  const { changeQuantity, changeSize, getCartItem } = useCart(user);
  const onChangeQuantity = useCallback(
    _.debounce((value) => {
      changeQuantity(item, value);
    }, 500),
    [dispatch, changeCartItemUserQuantity]
  );

  useEffect(() => {
    const data = getCartItem(item.productId);
    setCurrentSize(data.size);
    setCurrentPrice(data.price);
  }, [handleSizeChange]);

  const { data, loading } = useQuery(getProductById, {
    variables: { id: item.productId }
  });

  const onDeleteItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  useEffect(() => {
    toggleFirstlyMounted(true);
  }, []);

  if (loading)
    return (
      <div className={styles.loader} data-testid='deleteCommentLoader'>
        <Loader width={20} height={20} heightWrap={40} />
      </div>
    );

  const cartItem = data.getProductById;

  function handleSizeChange(event) {
    cartItem.sizes &&
      cartItem.sizes.map(({ size, price }) => {
        if (event.target.value === size._id && firstlyMounted) {
          changeSize(item, event.target.value);
        }
        return null;
      });
  }
  // const getPriceBySize = (size) => {
  //   const allSizes = cartItem.sizes.map(({ size, price }) => ({ size: size._id, price }));
  //   return allSizes.find((element) => {
  //     if (element.size === size) return element.price;
  //   });
  // };

  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell classes={{ root: styles.product }} data-cy='cart-item-img'>
        <Link to={`${pathToProducts}/${cartItem._id}`}>
          <img
            className={styles.itemImg}
            src={`${IMG_URL}${cartItem.images.primary.thumbnail} `}
            alt='product-img'
          />
        </Link>
        <div>
          <Link to={`${pathToProducts}/${cartItem._id}`}>
            <span className={styles.itemName}>{cartItem.name[language].value}</span>
          </Link>
          {cartItem.bottomMaterial && (
            <div className={styles.itemDescription}>
              {t('cart.bottomMaterial')}:{' '}
              {t(`${cartItem.bottomMaterial.material.translationsKey}.name`)}
            </div>
          )}
        </div>
      </TableCell>
      <TableCell classes={{ root: styles.description }} data-cy='cart-item-description'>
        <Select
          label='title'
          data-cy='size'
          name='size'
          value={currentSize}
          onChange={handleSizeChange}
          className={styles.selectSizeStyle}
        >
          {cartItem.sizes &&
            cartItem.sizes.map(({ size }, index) => (
              <MenuItem key={size._id} value={size._id} data-index={index}>
                {size.name}
              </MenuItem>
            ))}
        </Select>
      </TableCell>
      <TableCell classes={{ root: styles.price }} data-cy='cart-item-description'>
        <div>
          <FontAwesomeIcon icon={currencySign} />
          {'\u00A0'}
          {Math.round(item?.price[0]?.value)}
        </div>
      </TableCell>
      <TableCell className={styles.quantityWrapper}>
        {/* {!false ? ( */}
        <NumberInput
          quantity={inputValue}
          onChangeQuantity={onChangeQuantity}
          setInputValue={setInputValue}
        />
        {/* ) : ( */}
        {/*  <span className={styles.loadingBar}> */}
        {/*    <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={30} /> */}
        {/*  </span> */}
        {/* )} */}
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        <div className={styles.priceWrapper}>
          <div>
            <FontAwesomeIcon icon={currencySign} />
            {'\u00A0'}
            {Math.round(calcPriceForCart(currentPrice[currency].value, inputValue))}
          </div>
        </div>
      </TableCell>
      <TableCell classes={{ root: styles.delete }}>
        <span className={styles.deleteIcon}>
          <DeleteIcon onClick={onDeleteItem} fontSize='default' />
        </span>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
