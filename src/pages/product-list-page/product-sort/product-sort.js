import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import useStyles from './product-sort.styles';
import ProductsPerPage from '../products-per-page';
import {
  setSortByDate,
  setSortByPrice,
  setSortByRate,
  setSortByPopularity
} from '../../../redux/filter/filter.actions';

const SORT_BY_TEXT = [
  { lang: 'uk', value: 'Сортувати за:' },
  { lang: 'eng', value: 'Sort by:' }
];

const ProductSort = () => {
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const styles = useStyles();
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    const { name, value } = JSON.parse(e.target.value);

    if (name === 'sortAsc' || name === 'sortDesc') {
      return dispatch(setSortByPrice(value));
    }
    if (name === 'rate') {
      return dispatch(setSortByRate(value));
    }
    if (name === 'date') {
      return dispatch(setSortByDate(value));
    }
    if (name === 'popularity') {
      return dispatch(setSortByPopularity(value));
    }
  };
  const SORT_BY_SELECT_OPTIONS = [
    {
      lang: [
        {
          lang: 'uk',
          value: 'популярністю'
        },
        { lang: 'eng', value: 'popularity' }
      ],
      optionValue: {
        name: 'popularity',
        value: -1
      }
    },
    {
      name: 'sortDesc',
      lang: [
        { lang: 'uk', value: 'від дорогих до дешевих' },
        { lang: 'eng', value: 'price (high to low) ' }
      ],
      optionValue: {
        name: 'sortDesc',
        value: -1
      }
    },
    {
      name: 'sortAsc',
      lang: [
        { lang: 'uk', value: 'від дешевих до дорогих' },
        { lang: 'eng', value: 'price (low to high) ' }
      ],
      optionValue: { name: 'sortAsc', value: 1 }
    },
    {
      name: 'rate',
      lang: [
        { lang: 'uk', value: 'за рейтингом' },
        { lang: 'eng', value: 'rate' }
      ],
      optionValue: {
        name: 'rate',
        value: -1
      }
    },
    {
      name: 'new',
      lang: [
        { lang: 'uk', value: 'новинки' },
        { lang: 'eng', value: 'new' }
      ],
      optionValue: {
        name: 'date',
        value: -1
      }
    }
  ];

  const sortByText = SORT_BY_TEXT[language].value;

  const selectOptions = SORT_BY_SELECT_OPTIONS.map(
    ({ name, lang, optionValue }, index) => (
      <option key={index} name={name} value={JSON.stringify(optionValue)}>
        {lang[language].value}
      </option>
    )
  );

  return (
    <div className={styles.sortDiv}>
      <div>
        {sortByText}
        <TextField
          select
          SelectProps={{ native: true }}
          onChange={(e) => selectHandler(e)}
          className={styles.root}
          variant='outlined'
        >
          {selectOptions}
        </TextField>
      </div>
      <ProductsPerPage />
    </div>
  );
};

export default ProductSort;
