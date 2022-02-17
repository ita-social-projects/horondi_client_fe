import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import { MenuItem, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import _ from 'lodash';

import { useQuery } from '@apollo/client';
import { useStyles } from './cart-item.styles';
import NumberInput from '../../../../components/number-input';
import errorOrLoadingHandler from '../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../hooks/useIsLoadingOrError';

import { IMG_URL, TEXT_FIELD_VARIANT } from '../../../../configs';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import { getProductById } from '../../operations/order.queries';
import { getConstructorByModel } from '../../operations/getConstructorByModel.query';
import Loader from '../../../../components/loader';

const { pathToProducts } = routes;

const CartItem = ({ item, setModalVisibility, setModalItem, cartOperations, promoCode }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const [inputValue, setInputValue] = useState(item.quantity);
  const currencySign = getCurrencySign(currency);
  const [currentSize, setCurrentSize] = useState(item.sizeAndPrice.size._id);
  const [firstlyMounted, toggleFirstlyMounted] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(item.sizeAndPrice.price[currency].value);
  const {
    changeQuantity,
    changeSize,
    getCartItem,
    changeSizeConstructor,
    getProductPriceWithPromoCode,
    getProductPrice
  } = cartOperations;

  const onChangeQuantity = useCallback(
    _.debounce((value) => {
      changeQuantity(item.id, value);
    }, 500)
  );
  const { isFromConstructor } = item;

  const {
    data: product,
    error: errorProduct,
    loading: loadingProduct
  } = useQuery(isFromConstructor ? getConstructorByModel : getProductById, {
    variables: {
      id: isFromConstructor ? item.model?._id : item.productId
    }
  });

  const constructorByModel =
    (product?.getConstructorByModel && product?.getConstructorByModel[0]) || {};

  const constructorCartItem = {
    ...constructorByModel,
    category: { code: 'constructor' }
  };

  const cartItem = isFromConstructor ? constructorCartItem : product?.getProductById;

  const itemFoto = isFromConstructor
    ? cartItem?.model?.images?.thumbnail
    : cartItem?.images.primary.thumbnail;

  const defaultItemName = t(`${cartItem?.translationsKey}.name`);
  const constructorItemName = t('common.backpackFromConstructor');
  const itemName = isFromConstructor ? constructorItemName : defaultItemName;

  const itemMaterial = isFromConstructor ? (
    <div className={styles.itemDescription}>
      {t('cart.bottomMaterial')}: {t(`${item.bottom?.translationsKey}.name`)}
    </div>
  ) : (
    <div className={styles.itemDescription}>
      {t('cart.bottomMaterial')}: {t(`${cartItem?.bottomMaterial.material.translationsKey}.name`)}
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

  const defaultProductImg = (
    <Link to={`${pathToProducts}/${cartItem?._id}`}>
      <img className={styles.itemImg} src={`${IMG_URL}${itemFoto} `} alt='product-img' />
    </Link>
  );
  const constructorProductImg = (
    <img className={styles.itemImg} src={`${IMG_URL}${itemFoto} `} alt='product-img' />
  );
  const productImg = isFromConstructor ? constructorProductImg : defaultProductImg;

  const defaultProductName = (
    <Link to={`${pathToProducts}/${cartItem?._id}`}>
      <span className={styles.itemName}>{itemName}</span>
    </Link>
  );
  const constructorProductName = <span className={styles.itemName}>{itemName}</span>;
  const productName = isFromConstructor ? constructorProductName : defaultProductName;

  const itemSize = !isFromConstructor
    ? cartItem?.sizes && cartItem.sizes.map(mapCallback)
    : cartItem?.model?.sizes && cartItem?.model?.sizes.map(mapCallback);

  const { isError } = useIsLoadingOrError([loadingProduct], [errorProduct]);

  useEffect(() => {
    toggleFirstlyMounted(true);
  }, []);

  useEffect(() => {
    const itemData = getCartItem(item.id);
    setCurrentSize(itemData.sizeAndPrice.size._id);

    if (promoCode) {
      setCurrentPrice(getProductPriceWithPromoCode(item.id, currency, promoCode));
    } else {
      setCurrentPrice(getProductPrice(item.id, currency));
    }
  }, [promoCode, currency, item, getProductPriceWithPromoCode, getProductPrice, getCartItem]);

  const onDeleteItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  const totalProductPrice = () => {
    if (promoCode) {
      const { categories } = promoCode.getPromoCodeByCode;
      const isAllowCategory = categories.find((el) => el === cartItem?.category.code);

      if (isAllowCategory) {
        return (
          <div className={styles.promo}>
            <s>
              {currencySign}
              {Math.round(calcPriceForCart(item.sizeAndPrice.price[currency].value, inputValue))}
            </s>
            <span>
              {currencySign}
              {calcPriceForCart(currentPrice, inputValue)}
            </span>
          </div>
        );
      }
    }

    return <div>{Math.round(calcPriceForCart(currentPrice, inputValue))}</div>;
  };

  if (isError)
    return (
      <tr>
        <td>{errorOrLoadingHandler(isError)}</td>
      </tr>
    );

  if (loadingProduct)
    return (
      <tr>
        <td>
          <Loader width={50} height={50} heightWrap={50} />
        </td>
      </tr>
    );

  function handleSizeChange(event) {
    !isFromConstructor
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
        {productImg}
        <div>
          {productName}
          {itemMaterial}
        </div>
      </TableCell>
      <TableCell data-cy='cart-item-description'>
        <Select
          label='title'
          data-cy='size'
          name='size'
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          value={currentSize}
          onChange={handleSizeChange}
          className={styles.selectSizeStyle}
          data-testid='select'
        >
          {itemSize}
        </Select>
      </TableCell>
      <TableCell data-cy='cart-item-description'>
        <div className={styles.price}>
          {currencySign}
          {Math.round(currentPrice)}
        </div>
      </TableCell>
      <TableCell>
        <NumberInput
          quantity={inputValue}
          onChangeQuantity={onChangeQuantity}
          setInputValue={setInputValue}
        />
      </TableCell>
      <TableCell>
        <div className={styles.price}>
          {currencySign}
          <div className={styles.price}>{totalProductPrice()}</div>
        </div>
      </TableCell>
      <TableCell>
        <span>
          <DeleteIcon data-testid='delete' onClick={onDeleteItem} className={styles.deleteIcon} />
        </span>
      </TableCell>
    </TableRow>
  ) : null;
};

export default CartItem;
