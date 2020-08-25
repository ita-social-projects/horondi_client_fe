import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { MODEL_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setModelsFilter } from '../../../../redux/products/products.actions';

const ModelsFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { filterData, filters, language } = useSelector(
    ({ Products: { filterData, filters }, Language: { language } }) => ({
      filterData,
      filters,
      language
    })
  );

  const { modelsFilter } = filters;

  const modelsName = filterData.map((product) => product.model[1].value);

  const models = filterData
    .map((product) => product.model)
    .filter((model, index) => modelsName.indexOf(model[1].value) === index);

  const handleCategoryChange = (event) => {
    if (!event.target.checked) {
      dispatch(
        setModelsFilter(
          modelsFilter.filter((model) => model !== event.target.name)
        )
      );
    } else {
      dispatch(
        setModelsFilter([...new Set([...modelsFilter, event.target.name])])
      );
    }
  };

  const [isFiltersHidden, hideFilters] = useState(false);

  return (
    <FormGroup data-cy='category_filter'>
      <Typography
        className={styles.filterName}
        data-cy='categories'
        gutterBottom
        onClick={() => hideFilters(!isFiltersHidden)}
      >
        <span>{MODEL_TEXT[language].value}:</span>
        <span style={{ textDecoration: 'underline' }}>{models.length}</span>
      </Typography>
      {isFiltersHidden &&
        models.map((model) => (
          <FormControlLabel
            key={model[1].value}
            className={styles.checkbox}
            control={
              <Checkbox
                data-cy={model[1].value.toLowerCase()}
                name={model[1].value}
                checked={
                  !!modelsFilter.find((filter) => filter === model[1].value)
                }
              />
            }
            label={model[language].value}
            onChange={handleCategoryChange}
          />
        ))}
      <Divider />
    </FormGroup>
  );
};

export default ModelsFilter;
