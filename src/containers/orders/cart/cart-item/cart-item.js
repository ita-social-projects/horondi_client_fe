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
  currency
}) => {
  const dispatch = useDispatch();
  const styles = useStyles({ image: `${IMG_URL}${item.images.primary.small}` });

  const onChangeQuantity = (value, key) => {
    dispatch(setCartItemQuantity(item, +value, key));
  };

  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };
  console.log(item);
  item.selectedSize = 'M';
  item.quantity = 1;
  return (
    item && (
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
                {CART_TABLE_FIELDS[language].size}: {item.selectedSize}
              </span>
            )}
            {item.bottomMaterial && (
              <span>
                {CART_TABLE_FIELDS[language].bottomMaterial}:{' '}
                {item.bottomMaterial.material.name[language].value}
              </span>
            )}
            {/* {item.sidePocket && (
              <span>
                {CART_TABLE_FIELDS[language].sidePocket}:{" "}
                <DoneIcon className={styles.doneIcon} />
              </span>
            )} */}
          </div>
        </div>
        <div>
          <NumberInput
            quantity={item.quantity}
            // quantity={1}
            onChangeQuantity={onChangeQuantity}
          />
        </div>
        <div className={styles.price}>
          <span>
            {item.basePrice[currency].value / 100}{' '}
            {item.basePrice[currency].currency}
          </span>
          <DeleteIcon
            className={styles.trash}
            onClick={onRemoveItem}
            data-cy='cart-item-remove'
          />
        </div>
      </div>
    )
  );
};

export default CartItem;
