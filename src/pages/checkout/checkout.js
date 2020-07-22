import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setItemToCart } from '../../redux/cart/cart.actions';
import { setToLocalStorage } from '../../services/local-storage.service';

const items = [
  {
    id: 1,
    name: 'Roltop RED',
    image:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/63110485_2122892687837419_4024521649276583936_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=vonTwNGPltQAX-ZouQM&_nc_ht=scontent.flwo4-2.fna&oh=8be8c78b21e0d929118de7640e683a17&oe=5F3DF6CB',
    quantity: 1,
    size: 'm',
    price: 99
  },
  {
    id: 2,
    name: 'Roltop BLUE',
    image:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/60137130_2077078339085521_2095612185504907264_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=u7_20yRoE9AAX_dv4Da&_nc_ht=scontent.flwo4-2.fna&oh=1b9914aa095d801acbdef5063c903317&oe=5F3B2EC0',
    quantity: 4,
    size: 's',
    price: 399
  },
  {
    id: 3,
    name: 'Roltop GREEN',
    image:
      'https://scontent.flwo4-1.fna.fbcdn.net/v/t1.0-9/41454920_1729869400473085_948813010749620224_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=wYgGdFz6LOUAX98AlXc&_nc_ht=scontent.flwo4-1.fna&oh=90c9077c0425d548fefadc0559a1e1f6&oe=5F3B3BA5',
    quantity: 2,
    size: 'm',
    price: 199
  }
];

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ Cart }) => Cart.list);

  const onAddItemToCart = () => {
    console.log(cartItems);
    setToLocalStorage('cart', [...cartItems, items[1]]);
    dispatch(setItemToCart(items[1]));
  };

  return (
    <div>
      <button type='button' onClick={onAddItemToCart}>
        {' '}
        add
      </button>
    </div>
  );
};

export default Checkout;
