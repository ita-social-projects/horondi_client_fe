import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { HOME_BUTTONS } from '../../translations/homepage.translations';
import { useStyles } from './home.styles';
import { addItemToCart } from '../../redux/cart/cart.actions';

/* const items = [
  {
    _id: 'xdfgbvc3',
    name: {
      0: { value: 'гарбуз' },
      1: { value: 'Pumpkin' }
    },
    bagBottom: {
      0: { value: 'Натуральна шкіра' },
      1: { value: 'Genuine leather' }
    },
    selectedSize: 'S',
    sidePocket: true,
    totalPrice: 1200,
    images:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/47230850_1840441399415884_8917409871041658880_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=hm88c7z3vA8AX-1Hz30&_nc_ht=scontent.flwo4-2.fna&oh=72d7ebf7aaa8fee317e60c68bbc8a987&oe=5F47F0CA',
    quantity: 1,
    category: 'backpacks'
  },
  {
    _id: 'xdfgbvc3',
    name: {
      0: { value: 'Кабачок' },
      1: { value: 'Zucchini' }
    },
    bagBottom: {
      0: { value: 'Кордира' },
      1: { value: 'Cordura' }
    },
    selectedSize: 'S',
    sidePocket: true,
    totalPrice: 1200,
    images:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/46482328_1824345164358841_3972743378981879808_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=gSpumohhi6oAX930LlV&_nc_ht=scontent.flwo4-2.fna&oh=f20c0e559dbd3bb7d995913b3d8eace5&oe=5F4AC8FD',
    quantity: 1,
    category: 'bags'
  }
]; */

const items = [
  {
    _id: 'xdfgbvc3',
    name: {
      0: { value: 'гарбуз' },
      1: { value: 'Pumpkin' }
    },
    bagBottom: 'Натуральна шкіра',
    selectedSize: 'S',
    sidePocket: {
      isSelected: true
    },
    totalPrice: 1200,
    images:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/47230850_1840441399415884_8917409871041658880_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=hm88c7z3vA8AX-1Hz30&_nc_ht=scontent.flwo4-2.fna&oh=72d7ebf7aaa8fee317e60c68bbc8a987&oe=5F47F0CA',
    quantity: 1,
    productUrl: '/backpacks/foweoo423'
  },
  {
    _id: 'xdfgbvc3',
    name: {
      0: { value: 'Банан' },
      1: { value: 'Banana' }
    },
    bagBottom: 'Натуральна шкіра',
    selectedSize: 'M',
    sidePocket: {
      isSelected: false
    },
    totalPrice: 1200,
    images:
      'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/46482328_1824345164358841_3972743378981879808_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=gSpumohhi6oAX930LlV&_nc_ht=scontent.flwo4-2.fna&oh=f20c0e559dbd3bb7d995913b3d8eace5&oe=5F4AC8FD',
    quantity: 1,
    productUrl: '/backpacks/fow43432eoo423'
  }
];

const Home = () => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={styles.home}>
      <div className={styles.homeHeader}>
        <Link to='/news'>
          <Button className={styles.headerButton} variant='contained'>
            {HOME_BUTTONS[language].NEWS}
          </Button>
        </Link>
        <Link to='/about-us'>
          <Button className={styles.headerButton} variant='contained'>
            {HOME_BUTTONS[language].ABOUT_US}
          </Button>
        </Link>
      </div>
      <Button
        variant='contained'
        onClick={() => dispatch(addItemToCart(items[1]))}
        data-cy='add-to-cart'
      >
        add
      </Button>
      <CategoriesList />
      <OurLooks />
    </div>
  );
};

export default Home;
