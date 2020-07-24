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

import { useDispatch } from 'react-redux';
import useStyles from './product-list-filter.styles';
import {
  filterProducts,
  setAllFilterProducts
} from '../../../redux/filter/filter.actions';

const products = [
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 2.5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 3.5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 4.5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 5,
    basePrice: 1234,
    color: 'yellow',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'вуличний'
        },
        {
          lang: 'eng',
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 3,
    basePrice: 1234,
    color: 'red',
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 4,
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
        value: 'Гарбуз'
      },
      {
        lang: 'eng',
        value: 'Garbuz'
      }
    ],
    images: {
      primary: {
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 2.5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 3.5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 4.5,
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 5,
    basePrice: 1234,
    color: 'yellow',
    pattern: {
      name: [
        {
          lang: 'uk',
          value: 'вуличний'
        },
        {
          lang: 'eng',
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 3,
    basePrice: 1234,
    color: 'red',
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
        medium: '../../images/backpack.jpg'
      }
    },
    rate: 4,
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
  }
];

const colors = [...new Set(products.map((product) => product.color))];

const patterns = [
  ...new Set(products.map((product) => JSON.stringify(product.pattern)))
].map(JSON.parse);

export default function CheckboxesGroup() {
  const dispatch = useDispatch();

  const styles = useStyles();

  const [price, setPrice] = useState([null, null]);

  useEffect(() => {
    dispatch(setAllFilterProducts(products));
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
  }, [dispatch]);

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
    setSearch('');
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
        className={styles.slider}
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
          className={styles.checkbox}
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
          className={styles.checkbox}
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
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <FormControl component='fieldset' className={styles.formControl}>
          <FormGroup>
            <TextField
              className={styles.search}
              onChange={handleSearch}
              value={search}
              id='outlined-search'
              label='Search field'
              type='search'
              variant='outlined'
            />
          </FormGroup>
          <FormGroup className={styles.controls}>
            <Button
              className={styles.button}
              variant='contained'
              onClick={handleFilter}
            >
              Filter
            </Button>
            <Button
              className={styles.button}
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
