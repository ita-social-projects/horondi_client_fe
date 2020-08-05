import React, { useEffect, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { CATERGORY_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setCategoryFilter } from '../../../../redux/filter/filter.actions';

const CategoryFilter = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { products, categoryFilter, language } = useSelector(
    ({
      Products: { products },
      Filter: { categoryFilter },
      Language: { language }
    }) => ({
      products,
      categoryFilter,
      language
    })
  );

  const categories = [
    ...new Set(products.map((product) => JSON.stringify(product.category)))
  ].map(JSON.parse);

  const [categoryCheck, setCategoryCheck] = useState({});

  useEffect(() => {
    if (!categoryFilter)
      setCategoryCheck({ [selectedCategory.name[1].value]: true });
  }, [categoryFilter]);

  useEffect(() => {
    setCategoryCheck({ [selectedCategory.name[1].value]: true });
  }, [selectedCategory]);

  useEffect(() => {
    dispatch(
      setCategoryFilter(
        categories
          .filter((category) => categoryCheck[category.name[1].value])
          .map((category) => category._id)
      )
    );
  }, [categoryCheck, dispatch]);

  const handleCategoryChange = (event) => {
    setCategoryCheck({
      ...categoryCheck,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <FormGroup>
      <Typography id='categories' gutterBottom>
        {CATERGORY_TEXT[language]}:
      </Typography>
      {categories.map((category) => (
        <FormControlLabel
          key={category.name[1].value}
          className={styles.checkbox}
          control={
            <Checkbox
              name={category.name[1].value}
              checked={!!categoryCheck[category.name[1].value]}
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
