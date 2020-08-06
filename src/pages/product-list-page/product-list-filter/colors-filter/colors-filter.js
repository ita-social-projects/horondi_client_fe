import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setColorsFilter } from '../../../../redux/filter/filter.actions';

const ColorsFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { products, colorsFilter, language } = useSelector(
    ({
      Products: { products },
      Filter: { colorsFilter },
      Language: { language }
    }) => ({
      products,
      colorsFilter,
      language
    })
  );

  const colors = [
    ...new Set(
      products.map((product) => JSON.stringify(product.colors[0].simpleName))
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
    <FormGroup>
      <Typography id='colors' gutterBottom>
        {COLORS_TEXT[language]}:
      </Typography>
      {colors.map((color) => (
        <FormControlLabel
          key={color[1].value}
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
