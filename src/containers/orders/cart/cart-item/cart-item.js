import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import NumberInput from '../../../../components/number-input';
import { setCartItemQuantity } from '../../../../redux/cart/cart.actions';
import { IMG_URL } from '../../../../configs';

const CartItem = ({
  item,
  setModalVisibility,
  setModalItem,
  language,
  currency,
  calcPrice
}) => {
  const dispatch = useDispatch();
  const styles = useStyles({ image: `${IMG_URL}${item.images.primary.small}` });

  const onChangeQuantity = (value) => {
    dispatch(setCartItemQuantity(item, +value));
  };

  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  return (
    <div className={styles.root} data-cy='cart-item'>
      <div className={styles.itemData}>
        <div className={styles.image} data-cy='cart-item-img'>
          <Link to={`/product/${item._id}`}>
            <b />
          </Link>
        </div>
        <div className={styles.description} data-cy='cart-item-description'>
          <Link to={`/product/${item._id}`}>
            {item && (
              <span className={styles.itemName}>
                {item.name[language].value}
              </span>
            )}
          </Link>
          {item.selectedSize && (
            <span>
              {CART_TABLE_FIELDS[language].size}: {item.selectedSize.name}
            </span>
          )}
          {item.bottomMaterial && (
            <span>
              {CART_TABLE_FIELDS[language].bottomMaterial}:{' '}
              {item.bottomMaterial.material.name[language].value}
            </span>
          )}
          {item.sidePocket && (
            <span>
              {CART_TABLE_FIELDS[language].sidePocket}:{' '}
              <DoneIcon className={styles.doneIcon} />
            </span>
          )}
        </div>
      </div>
      <div>
        <NumberInput
          quantity={item.quantity}
          onChangeQuantity={onChangeQuantity}
        />
      </div>
      <div className={styles.price}>
        <span>
          {calcPrice(item) / 100} {item.basePrice[currency].currency}
        </span>
        <DeleteIcon
          className={styles.trash}
          onClick={onRemoveItem}
          data-cy='cart-item-remove'
        />
      </div>
    </div>
  );
};

export default CartItem;
