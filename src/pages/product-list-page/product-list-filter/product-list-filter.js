import React, { useEffect, useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './product-list-filter.styles';
import {
  filterByPrice,
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
    basePrice: 12342
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
    basePrice: 4503
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
    basePrice: 1234
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
    basePrice: 1234
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
    basePrice: 1234
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
    basePrice: 1234
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
    basePrice: 1234
  }
];

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

  const [value, setValue] = useState([
    Math.min(...products.map((product) => product.basePrice)),
    Math.max(...products.map((product) => product.basePrice))
  ]);

  const handlePriceChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    dispatch(setAllFilterProducts(products));
    dispatch(
      filterByPrice({ topValue: newValue[1], bottomValue: newValue[0] })
    );
  };

  const valuetext = (value) => `${value}$`;

  const priceFilter = (
    <FormGroup>
      <Typography id='range-slider' gutterBottom>
        Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        min={Math.min(...products.map((product) => product.basePrice))}
        max={Math.max(...products.map((product) => product.basePrice))}
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
      />
    </FormGroup>
  );

  return (
    <div className={classes.root}>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>Assign responsibility</FormLabel>
        {priceFilter}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name='gilad' />}
            label='Gilad Gray'
          />
          <FormControlLabel
            control={<Checkbox name='jason' />}
            label='Jason Killian'
          />
          <FormControlLabel
            control={<Checkbox name='antoine' />}
            label='Antoine Llorca'
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
}
