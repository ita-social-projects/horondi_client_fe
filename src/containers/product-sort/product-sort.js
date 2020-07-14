import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import useStyles from './product-sort.styles';

const ITEMS_PER_PAGE = [9, 18, 30];
const SORT_BY_TEXT = [
  { lang: 'uk', value: 'Сортувати за:' },
  { lang: 'eng', value: 'Sort by:' }
];

const SORT_BY_SELECT_OPTIONS = [
  {
    name: 'sortDesc',
    lang: [
      { lang: 'uk', value: 'від дорогих до дешевих' },
      { lang: 'eng', value: 'price (high to low) ' }
    ],
    value: -1
  },
  {
    name: 'sortAsc',
    lang: [
      { lang: 'uk', value: 'від дешевих до дорогих' },
      { lang: 'eng', value: 'price (low to high) ' }
    ],
    value: 1
  },
  {
    name: 'popularity',
    lang: [
      { lang: 'uk', value: 'за популярністю' },
      { lang: 'eng', value: 'popularity' }
    ],
    value: -1
  },
  {
    name: 'new',
    lang: [
      { lang: 'uk', value: 'новинки' },
      { lang: 'eng', value: 'new' }
    ],
    value: -1
  }
];
const ProductSort = () => {
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const styles = useStyles();

  const sortByText = SORT_BY_TEXT[language].value;

  const selectOptions = SORT_BY_SELECT_OPTIONS.map(
    ({ name, lang, value }, index) => (
      <option key={index} name={name} value={value}>
        {lang[language].value}
      </option>
    )
  );

  const itemsOnPage = ITEMS_PER_PAGE.map((value) => (
    <Button className={styles.itemsButton} key={value} type='button'>
      {value}
    </Button>
  ));
  return (
    <div className={styles.sortDiv}>
      <div>
        {sortByText}
        <TextField
          className={styles.root}
          variant='outlined'
          SelectProps={{ native: true }}
          select
        >
          {selectOptions}
        </TextField>
      </div>
      <div>{itemsOnPage}</div>
    </div>
  );
};

export default ProductSort;
