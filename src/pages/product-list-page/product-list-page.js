import React from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './product-list-page.styles';
import ProductSort from './product-sort';
import { setCurrentPage } from '../../redux/filter/filter.actions';
import ProductListItem from './product-list-item';

const productsBoilerPlate = [
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Гарбуз'
      },
      {
        lang: 'eng',
        value: 'Pumpkin'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 4,
    basePrice: 555
  },
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп1'
      },
      {
        lang: 'eng',
        value: 'Rolltop1'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 3,
    basePrice: 1488
  },
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп2'
      },
      {
        lang: 'eng',
        value: 'Rolltop2'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 5,
    basePrice: 676
  },
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп3'
      },
      {
        lang: 'eng',
        value: 'Rolltop3'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 3,
    basePrice: 444
  },
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп4'
      },
      {
        lang: 'eng',
        value: 'Rolltop4'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 1,
    basePrice: 1234
  },
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп5'
      },
      {
        lang: 'eng',
        value: 'Rolltop5'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 1,
    basePrice: 1234
  },
  {
    _id: '5f0434835ac2ec33594276cd',
    name: [
      {
        lang: 'uk',
        value: 'Ролтоп6'
      },
      {
        lang: 'eng',
        value: 'Rolltop6'
      }
    ],
    images: {
      primary: {
        medium: './images/backpack.jpg'
      }
    },
    rate: 2.4,
    basePrice: 1234
  }
];

const ProductListPage = ({ category }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const changeHandler = (e, value) => dispatch(setCurrentPage(value));
  if (category === 'backpacks') {
    category = [
      {
        value: 'рюкзаки'
      },
      { value: 'backpacks' }
    ];
  }
  if (category === 'bags') {
    category = [
      {
        value: 'сумки'
      },
      { value: 'bags' }
    ];
  }
  if (category === 'accessories') {
    category = [
      {
        value: 'аксесуари'
      },
      { value: 'accessories' }
    ];
  }

  category = category[language].value;
  const itemsToShow = productsBoilerPlate.map((product, index) => (
    <ProductListItem key={index} product={product} category={category} />
  ));
  category = category.toUpperCase();
  return (
    <div className={styles.root}>
      <Typography className={styles.paginationDiv} variant='h3'>
        {category}
      </Typography>
      <div className={styles.sortDiv}>
        <ProductSort />
      </div>
      <div className={styles.div}>
        <div
          style={{ width: '25%', height: '10rem', backgroundColor: 'grey' }}
        />
        <div className={styles.productsDiv}>{itemsToShow}</div>
      </div>

      <Pagination
        className={styles.paginationDiv}
        count={10}
        variant='outlined'
        shape='rounded'
        onChange={changeHandler}
      />
    </div>
  );
};
ProductListPage.propTypes = {
  category: Proptypes.string
};
ProductListPage.defaultProps = {
  category: 'backpacks'
};
export default ProductListPage;
