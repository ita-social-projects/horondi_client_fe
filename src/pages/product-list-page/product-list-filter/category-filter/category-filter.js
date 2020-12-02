import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { push } from "connected-react-router";
import { useStyles } from './category-filter.style';
import { CATERGORY_TEXT, SORT_BY_SELECT_OPTIONS } from '../../../../translations/product-list.translations';
import {
  setCategoryFilter,
  setModelsFilter
} from '../../../../redux/products/products.actions';

const CategoryFilter = ({ filterData, filters, language }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { categoryFilter } = filters;

  const categoriesName = filterData.map(
    (product) => product.category.name[1].value
  );

  const categories = filterData
    .map((product) => product.category)
    .filter(
      (category, index) =>
        categoriesName.indexOf(category.name[1].value) === index
    );

  const handleCategoryChange = (event) => {
    const categoryName = categories.filter(elment=>elment._id===event.target.value)[0].name[1].value.toLowerCase()
    console.log(categoryName)
    dispatch(
      setCategoryFilter(event.target.value)
    );
    dispatch(push(`/${categoryName}`));
    dispatch(setModelsFilter([]));
  };

  const selectOptions = categories.map(category => (<option key={category.name[1].value}
    value={category._id}>
    {category.name[language].value}
  </option>)
  );
  return (
    <FormGroup data-cy='category_filter'>
      <TextField
        select
        SelectProps={{ native: true }}
        color='default'
        onChange={handleCategoryChange}
        className={styles.root}
        variant='outlined'
      >
        {selectOptions}
      </TextField>
    </FormGroup>
  );
};

export default CategoryFilter;
