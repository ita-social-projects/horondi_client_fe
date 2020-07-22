import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        value: 'Гарбуз'
      },
      {
        lang: 'eng',
        value: 'Garbuz'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 7234,
    color: 'red',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'фабричнмй'
        },
        {
          lang: 'eng',
          value: 'fabric'
        }
      ]
    }
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'Новий'
      },
      {
        lang: 'eng',
        value: 'New'
      }
    ],
    images: {
      primary: {
        medium: '../../../public/images/about-us/hero-bg.jpg'
      }
    },
    rate: 1,
    basePrice: 4503,
    color: 'blue',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'фабричнмй'
        },
        {
          lang: 'eng',
          value: 'fabric'
        }
      ]
    }
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
    color: 'green',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'ручний'
        },
        {
          lang: 'eng',
          value: 'handmade'
        }
      ]
    }
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
    color: 'yellow',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'національний'
        },
        {
          lang: 'eng',
          value: 'nation'
        }
      ]
    }
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
    color: 'yollow',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'вуличний'
        },
        {
          lang: 'en',
          value: 'street'
        }
      ]
    }
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
    color: 'red',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'ручний'
        },
        {
          lang: 'en',
          value: 'handmade'
        }
      ]
    }
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
    color: 'green',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'ручний'
        },
        {
          lang: 'en',
          value: 'handmade'
        }
      ]
    }
  }
];

const colors = ['red', 'green', 'blue', 'yellow'];

const patterns = [
  {
    name: [
      {
        lang: 'uk',
        value: 'фабричнмй'
      },
      {
        lang: 'en',
        value: 'fabric'
      }
    ]
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'ручний'
      },
      {
        lang: 'en',
        value: 'handmade'
      }
    ]
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'вуличний'
      },
      {
        lang: 'en',
        value: 'street'
      }
    ]
  },
  {
    name: [
      {
        lang: 'uk',
        value: 'національний'
      },
      {
        lang: 'eng',
        value: 'nation'
      }
    ]
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

  const [price, setPrice] = useState([null, null]);

  useEffect(() => {
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
  }, [products]);

  const [search, setSearch] = useState('');
  const [colorsCheck, setColorsCheck] = useState({});
  const [patternsCheck, setPatternsCheck] = useState({});

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleColorChange = (event) => {
    setColorsCheck({
      ...colorsCheck,
      [event.target.name]: event.target.checked
    });
  };

  const handlePatternChange = (event) => {
    setPatternsCheck({
      ...patternsCheck,
      [event.target.name]: event.target.checked
    });
  };

  const handleFilter = () => {
    console.log(search);
    dispatch(setAllFilterProducts(products));
    dispatch(
      filterProducts({
        search,
        price: {
          bottomPrice: price[0],
          topPrice: price[1]
        },
        colors: colors.filter((color) => colorsCheck[color]),
        patterns: patterns.filter(
          (pattern) => patternsCheck[pattern.name[1].value]
        )
      })
    );
  };

  const handleClearFilter = () => {
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
    setColorsCheck({});
    setPatternsCheck({});
    dispatch(setAllFilterProducts(products));
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
          control={<Checkbox name={color} checked={!!colorsCheck[color]} />}
          label={color}
          onChange={handleColorChange}
        />
      ))}
    </FormGroup>
  );

  const patternFilter = (
    <FormGroup>
      <Typography id='patterns' gutterBottom>
        Pattern:
      </Typography>
      {patterns.map((pattern) => (
        <FormControlLabel
          key={pattern.name[1].value}
          className={classes.checkbox}
          control={
            <Checkbox
              name={pattern.name[1].value}
              checked={!!patternsCheck[pattern.name[1].value]}
            />
          }
          label={pattern.name[1].value}
          onChange={handlePatternChange}
        />
      ))}
    </FormGroup>
  );

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormControl component='fieldset' className={classes.formControl}>
          <FormGroup>
            <TextField
              className={classes.search}
              onChange={handleSearch}
              id='outlined-search'
              label='Search field'
              type='search'
              variant='outlined'
            />
          </FormGroup>
          <FormGroup className={classes.controls}>
            <Button
              className={classes.button}
              variant='contained'
              onClick={handleFilter}
            >
              Filter
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              onClick={handleClearFilter}
            >
              Clear Filter
            </Button>
          </FormGroup>
          {priceFilter}
          {colorFilter}
          {patternFilter}
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Paper>
    </div>
  );
}
