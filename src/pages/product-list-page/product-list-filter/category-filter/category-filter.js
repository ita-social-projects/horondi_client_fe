import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { CATERGORY_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setCategoryFilter } from '../../../../redux/products/products.actions';

const CategoryFilter = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { filterData, filters, language } = useSelector(
    ({ Products: { filterData, filters }, Language: { language } }) => ({
      filterData,
      filters,
      language
    })
  );

  const { categoryFilter } = filters;

  const categories = [
    ...new Set(filterData.map((product) => JSON.stringify(product.category)))
  ].map(JSON.parse);

  const handleCategoryChange = (event) => {
    if (!event.target.checked) {
      dispatch(
        setCategoryFilter(
          categoryFilter.filter((category) => category !== event.target.name)
        )
      );
    } else {
      dispatch(
        setCategoryFilter([...new Set([...categoryFilter, event.target.name])])
      );
    }
  };

  return (
    <FormGroup data-cy='category_filter'>
      <Typography id='categories' gutterBottom>
        {CATERGORY_TEXT[language].value}:
      </Typography>
      {categories.map((category, key) => (
        <FormControlLabel
          key={key}
          className={styles.checkbox}
          control={
            <Checkbox
              data-cy={category.name[1].value.toLowerCase()}
              name={category._id}
              checked={
                !!categoryFilter.find((filter) => filter === category._id)
              }
            />
          }
          label={category.name[language].value}
          onChange={handleCategoryChange}
        />
      ))}
    </FormGroup>
  );
};

export default CategoryFilter;
