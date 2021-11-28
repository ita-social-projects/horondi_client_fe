import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import { useStyles } from './cart-item.styles';
import NumberInput from '../../../../components/number-input';

import {
  setCartItemQuantity,
  changeCartItemUserQuantity,
  setCartItemSize,
  setUserCartItemSize
} from '../../../../redux/cart/cart.actions';

import { IMG_URL, MATERIAL_UI_COLOR } from '../../../../configs';
import { onChangeQuantityHandler } from '../../../../utils/cart';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';

const { pathToProducts } = routes;

const CartItem = ({
  item,
  language,
  currency,
  calcPrice,
  user,
  cartQuantityLoading,
  setModalVisibility,
  setModalItem
}) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(item.quantity);
  const currencySign = getCurrencySign(currency);
  const [firstlyMounted, toggleFirstlyMounted] = useState(false);
  const [currentSize, setCurrentSize] = useState(item.options.size);
  const [currentPrice, setCurrentPrice] = useState(item.options.price);
  const onChangeUserQuantity = useCallback(
    _.debounce((value) => {
      dispatch(changeCartItemUserQuantity({ item, value, userId: user._id }));
    }, 500),
    [dispatch, changeCartItemUserQuantity]
  );

  const onChangeQuantity = (value) => dispatch(setCartItemQuantity(item, +value));

  const onDeleteItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  const handleSizeChange = (event) => {
    item.allSizes &&
      item.allSizes.map(({ size, price }) => {
        if (event.target.value === size._id && firstlyMounted) {
          setCurrentSize(size);
          setCurrentPrice(price);
        }

        return null;
      });
  };

  useEffect(() => {
    toggleFirstlyMounted(true);
  }, []);

  useEffect(() => {
    if (firstlyMounted) {
      setInputValue(item.quantity);
    }
  }, [item.quantity, firstlyMounted]);
  useEffect(() => {
    const cartItemSize = () => {
      if (firstlyMounted)
        if (!user)
          dispatch(
            setCartItemSize(item, { size: currentSize, price: currentPrice, quantity: inputValue })
          );
        else
          dispatch(
            setUserCartItemSize(user, item, {
              size: currentSize,
              price: currentPrice,
              quantity: inputValue
            })
          );
    };
    cartItemSize();
  }, [currentSize, currentPrice, dispatch, inputValue, item, user, firstlyMounted]);

  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell classes={{ root: styles.product }} data-cy='cart-item-img'>
        <Link to={`${pathToProducts}/${item.product._id}`}>
          <img
            className={styles.itemImg}
            src={`${IMG_URL}${item.product.images.primary.thumbnail} `}
            alt='product-img'
          />
        </Link>
        <div>
          <Link to={`${pathToProducts}/${item.product._id}`}>
            <span className={styles.itemName}>{item.product.name[language].value}</span>
          </Link>
          {item.product.bottomMaterial && (
            <div className={styles.itemDescription}>
              {t('cart.bottomMaterial')}:{' '}
              {t(`${item.product.bottomMaterial.material.translationsKey}.name`)}
            </div>
          )}
        </div>
      </TableCell>
      <TableCell classes={{ root: styles.description }} data-cy='cart-item-description'>
        <Select
          label='title'
          data-cy='size'
          name='size'
          value={item.options.size._id}
          onChange={handleSizeChange}
          className={styles.selectSizeStyle}
        >
          {item.allSizes &&
            item.allSizes.map(({ size }) => (
              <MenuItem key={size._id} value={size._id}>
                {size.name}
              </MenuItem>
            ))}
        </Select>
      </TableCell>
      <TableCell classes={{ root: styles.price }} data-cy='cart-item-description'>
        <div>
          <FontAwesomeIcon icon={currencySign} />
          {'\u00A0'}
          {Math.round(item?.price[currency]?.value)}
        </div>
      </TableCell>
      <TableCell className={styles.quantityWrapper}>
        {!cartQuantityLoading ? (
          <NumberInput
            quantity={inputValue}
            onChangeQuantity={onChangeQuantityHandler(user, onChangeUserQuantity, onChangeQuantity)}
            setInputValue={setInputValue}
          />
        ) : (
          <span className={styles.loadingBar}>
            <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={30} />
          </span>
        )}
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        <div className={styles.priceWrapper}>
          <div>
            <FontAwesomeIcon icon={currencySign} />
            {'\u00A0'}
            {Math.round(calcPrice(item, currency))}
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
