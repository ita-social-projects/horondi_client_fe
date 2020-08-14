import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setColorsFilter } from '../../../../redux/products/products.actions';

const ColorsFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { filterData, filters, language } = useSelector(
    ({ Products: { filterData, filters }, Language: { language } }) => ({
      filterData,
      filters,
      language
    })
  );

  const { colorsFilter } = filters;

  const colors = [
    ...new Set(
      filterData.map((product) => JSON.stringify(product.colors[0].simpleName))
    )
  ].map(JSON.parse);

  const handleColorChange = (event) => {
    if (!event.target.checked) {
      dispatch(
        setColorsFilter(
          colorsFilter.filter((color) => color !== event.target.name)
        )
      );
    } else {
      dispatch(
        setColorsFilter([...new Set([...colorsFilter, event.target.name])])
      );
    }
  };

  return (
    <FormGroup data-cy='colors_filter'>
      <Typography id='colors' gutterBottom>
        {COLORS_TEXT[language].value}:
      </Typography>
      {colors.map((color, key) => (
        <FormControlLabel
          key={key}
          className={styles.checkbox}
          control={
            <Checkbox
              name={color[1].value}
              checked={
                !!colorsFilter.find((filter) => filter === color[1].value)
              }
            />
          }
          label={color[language].value}
          onChange={handleColorChange}
        />
      ))}
    </FormGroup>
  );
};

export default ColorsFilter;
