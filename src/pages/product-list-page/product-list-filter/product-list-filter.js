import React, { useEffect, useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux';
import useStyles from './product-list-filter.styles';
import {
  filterProducts,
  setAllFilterProducts
} from '../../../redux/filter/filter.actions';
import { setAllProducts } from '../../../redux/products/products.actions';

const productsBoilerPlate = [
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 7234,
    color: 'red'
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 4503,
    color: 'blue'
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 1234,
    color: 'green'
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 1234,
    color: 'yellow'
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 1234,
    color: 'yollow'
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 1234,
    color: 'red'
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп'
      },
      {
        lang: 'eng',
        value: 'Rolltop'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 1234,
    color: 'green'
  }
];

const colors = ['red', 'green', 'blue', 'yellow'];

export default function CheckboxesGroup() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts(productsBoilerPlate));
    console.log('dispached');
    window.scrollTo(0, 0);
  }, [dispatch]);

  const classes = useStyles();

  const { products } = useSelector(({ Products }) => ({
    products: Products.list
  }));

  const [price, setPrice] = useState([null, null]);

  useEffect(() => {
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
  }, [products]);

  const [colorsCheck, setColorsCheck] = useState({});

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleColorChange = (event) => {
    setColorsCheck({
      ...colorsCheck,
      [event.target.name]: event.target.checked
    });
  };

  const handleFilter = () => {
    console.log(!!colors.filter((color) => colorsCheck[color]).length);
    dispatch(setAllFilterProducts(products));
    dispatch(
      filterProducts({
        price: {
          bottomPrice: price[0],
          topPrice: price[1]
        },
        colors: colors.filter((color) => colorsCheck[color])
      })
    );
  };

  const priceFilter = (
    <FormGroup>
      <Typography id='range-slider' gutterBottom>
        Price Range:
      </Typography>
      <Slider
        className={classes.slider}
        value={price}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        min={Math.min(...products.map((product) => product.basePrice))}
        max={Math.max(...products.map((product) => product.basePrice))}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );

  const colorFilter = (
    <FormGroup>
      <Typography id='colors' gutterBottom>
        Color:
      </Typography>
      {colors.map((color) => (
        <FormControlLabel
          key={color}
          className={classes.checkbox}
          control={<Checkbox name={color} />}
          label={color}
          onChange={handleColorChange}
        />
      ))}
    </FormGroup>
  );

  return (
    <div className={classes.root}>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>Filter</FormLabel>
        {priceFilter}
        {colorFilter}
        <FormHelperText>Be careful</FormHelperText>
        <Button variant='contained' onClick={handleFilter}>
          Filter
        </Button>
      </FormControl>
    </div>
  );
}
