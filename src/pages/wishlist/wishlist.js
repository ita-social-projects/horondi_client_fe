import React from 'react';
import { useDispatch } from 'react-redux';

import { useStyles } from './wishlist.styles';
import { addItemToCart } from '../../redux/cart/cart.actions';

const items = [
  {
    _id: 'accbf830',
    name: {
      0: {
        value: 'Ролтоп"Гарбуз"'
      },
      1: {
        value: 'Rolltop "Pumpkin"'
      }
    },
    image:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/63110485_2122892687837419_4024521649276583936_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=vonTwNGPltQAX-ZouQM&_nc_ht=scontent.flwo4-2.fna&oh=8be8c78b21e0d929118de7640e683a17&oe=5F3DF6CB',
    quantity: 1,
    selectedSize: 'M',
    bagBottom: 'leatherette',
    sidePocket: true,
    totalPrice: 99
  },
  {
    _id: '3759687b',
    name: {
      0: {
        value: 'Ролтоп "Банан"'
      },
      1: {
        value: 'Rolltop "Banana"'
      }
    },
    image:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/63110485_2122892687837419_4024521649276583936_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=vonTwNGPltQAX-ZouQM&_nc_ht=scontent.flwo4-2.fna&oh=8be8c78b21e0d929118de7640e683a17&oe=5F3DF6CB',
    quantity: 1,
    selectedSize: 'S',
    bagBottom: 'Cordura',
    sidePocket: true,
    totalPrice: 199
  }
];

const Wishlist = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const onAddItemToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className={styles.root}>
      <button type='button' onClick={() => onAddItemToCart(items[1])}>
        {' '}
        add
      </button>
    </div>
  );
};

export default Wishlist;
