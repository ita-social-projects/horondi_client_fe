import React from 'react';
import { useDispatch } from 'react-redux';
import OrderItem from '../../order/order-item';
import { setCartItemQuantity } from '../../../../redux/cart/cart.actions';

const CartItem = ({ item, setModalItem, setModalVisibility, language }) => {
  const dispatch = useDispatch();

  const onChangeQuantity = (value, key) => {
    dispatch(setCartItemQuantity(item, +value, key));
  };

  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  return (
    <OrderItem
      name='cart-item'
      item={item}
      onChangeQuantity={onChangeQuantity}
      onRemoveItem={onRemoveItem}
      language={language}
      isInCart
    />
  );
};

export default CartItem;
