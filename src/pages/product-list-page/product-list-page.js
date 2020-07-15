import React from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import useStyles from './product-list-page.styles';
import ProductSort from '../../containers/product-sort';
import ProductFilter from './product-list-filter';
import { setCurrentPage } from '../../redux/filter/filter.actions';

// const productsBoilerPlate = [
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 1234
//   },
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 1234
//   },
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 12324
//   },
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 1234
//   },
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 1234
//   },
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 1234
//   },
//   {
//     name: [
//       {
//         lang: 'uk',
//         value: 'Ролтоп'
//       },
//       {
//         lang: 'eng',
//         value: 'Rolltop'
//       }
//     ],
//     images: {
//       primary: {
//         medium: '../../../public/images/about-us/hero-bg.jpg'
//       }
//     },
//     rate: 1,
//     basePrice: 1234
//   }
// ];

const ProductListPage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const changeHandler = (e, value) => dispatch(setCurrentPage(value));
  return (
    <div className={styles.root}>
      <div className={styles.div}>
        <ProductSort />
      </div>
      <div className={styles.div}>
        <div className={styles.div}>
          <ProductFilter />
        </div>
        <div className={styles.div} />
      </div>
      <div className={styles.div}>
        <Pagination
          count={10}
          variant='outlined'
          shape='rounded'
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
