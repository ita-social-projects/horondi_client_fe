import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import { MenuItem, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import { useQuery } from '@apollo/client';
import { useStyles } from './cart-item.styles';
import NumberInput from '../../../../components/number-input';
import errorOrLoadingHandler from '../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../hooks/useIsLoadingOrError';

import { changeCartItemUserQuantity } from '../../../../redux/cart/cart.actions';

import { IMG_URL } from '../../../../configs';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import { getProductById } from '../../operations/order.queries';
import { getConstructorById } from '../../operations/getConstructorById.queries';
import Loader from '../../../../components/loader';

const { pathToProducts } = routes;

const CartItem = ({ item, setModalVisibility, setModalItem, cartOperations }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { t } = useTranslation();
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const [inputValue, setInputValue] = useState(item.quantity);
  const currencySign = getCurrencySign(currency);
  const [firstlyMounted, toggleFirstlyMounted] = useState(false);
  const [currentSize, setCurrentSize] = useState(item.sizeAndPrice.size._id);
  const [currentPrice, setCurrentPrice] = useState(item.sizeAndPrice.price[currency].value);
  const { changeQuantity, changeSize, getCartItem, changeSizeConstructor } = cartOperations;

  const onChangeQuantity = useCallback(
    _.debounce((value) => {
      changeQuantity(item.id, value);
    }, 500),
    [dispatch, changeCartItemUserQuantity]
  );

  const {
    data: dataProduct,
    loading: loadingProduct,
    error: errorProduct
  } = useQuery(getProductById, {
    variables: { id: item?.productId },
    skip: item.constructor
  });

  const {
    data: dataConstructor,
    loading: loadingConstructor,
    error: errorConstructor
  } = useQuery(getConstructorById, {
    variables: { id: item.productId },
    skip: !item.constructor
  });

  const cartItem = item.constructor
    ? dataConstructor?.getConstructorById
    : dataProduct?.getProductById;

  const itemFoto = item.constructor
    ? cartItem?.model.images.thumbnail
    : cartItem.images.primary.thumbnail;

  const itemName = item.constructor ? cartItem?.model.translationsKey : cartItem.translationsKey;

  const itemMaterial = cartItem?.bottomMaterial ? (
    <div className={styles.itemDescription}>
      {t('cart.bottomMaterial')}: {t(`${cartItem.bottomMaterial.material.translationsKey}.name`)}
    </div>
  ) : (
    <div className={styles.itemDescription}>
      {t('cart.bottomMaterial')}: {t(`${item.sizeAndPrice.bottomMaterial?.translationsKey}.name`)}
    </div>
  );

  const mapCallback = (obj) => {
    let size = obj;
    if (obj.size) size = obj.size;
    return (
      size.available && (
        <MenuItem key={size._id} value={size._id}>
          {size.name}
        </MenuItem>
      )
    );
  };

  const itemSize = !item.constructor
    ? cartItem.sizes && cartItem.sizes.map(mapCallback)
    : cartItem?.model.sizes && cartItem.model.sizes.map(mapCallback);

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingConstructor, loadingProduct],
    [errorConstructor, errorProduct]
  );

  useEffect(() => {
    const itemData = getCartItem(item.id);
    setCurrentSize(itemData.sizeAndPrice.size._id);
    setCurrentPrice(itemData.sizeAndPrice.price[currency].value);
  }, [handleSizeChange]);

  const onDeleteItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  useEffect(() => {
    toggleFirstlyMounted(true);
  }, []);

  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  if (loadingProduct || loadingConstructor)
    return (
      <tr>
        <td>
          <Loader width={50} height={50} heightWrap={50} />
        </td>
      </tr>
    );

  function handleSizeChange(event) {
    !item.constructor
      ? cartItem.sizes &&
        cartItem.sizes.map((cartData) => {
          if (event.target.value === cartData.size._id && firstlyMounted) {
            changeSize(item.id, cartData);
          }
          return null;
        })
      : cartItem.model.sizes &&
        cartItem.model.sizes.map((cartData) => {
          if (event.target.value === cartData._id && firstlyMounted) {
            changeSizeConstructor(item.id, cartData);
          }
          return null;
        });
  }

  return cartItem ? (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell classes={{ root: styles.product }} data-cy='cart-item-img'>
        <Link to={`${pathToProducts}/${cartItem._id}`}>
          <img className={styles.itemImg} src={`${IMG_URL}${itemFoto} `} alt='product-img' />
        </Link>
        <div>
          <Link to={`${pathToProducts}/${cartItem._id}`}>
            <span className={styles.itemName}>{t(`${itemName}.name`)}</span>
          </Link>
          {itemMaterial}
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
          data-testid='select'
        >
          {itemSize}
        </Select>
      </TableCell>
      <TableCell classes={{ root: styles.price }} data-cy='cart-item-description'>
        <div>
          <FontAwesomeIcon icon={currencySign} />
          {'\u00A0'}
          {Math.round(currentPrice)}
        </div>
      </TableCell>
      <TableCell className={styles.quantityWrapper}>
        <NumberInput
          quantity={inputValue}
          onChangeQuantity={onChangeQuantity}
          setInputValue={setInputValue}
        />
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        <div className={styles.priceWrapper}>
          <div>
            <FontAwesomeIcon icon={currencySign} />
            {'\u00A0'}
            {Math.round(calcPriceForCart(currentPrice, inputValue))}
          </div>
        </div>
      </TableCell>
      <TableCell classes={{ root: styles.delete }}>
        <span className={styles.deleteIcon}>
          <DeleteIcon onClick={onDeleteItem} fontSize='default' />
        </span>
      </TableCell>
    </TableRow>
  ) : null;
};

export default CartItem;
