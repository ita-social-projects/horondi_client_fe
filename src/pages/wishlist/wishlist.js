import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './wishlist.styles';
import { setItemToCart } from '../../redux/cart/cart.actions';
import { setToLocalStorage } from '../../services/local-storage.service';

const Wishlist = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <button type='button'> add</button>
    </div>
  );
};

export default Wishlist;
