import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { CATERGORY_TEXT } from '../../../../translations/product-list.translations';
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

  const models = filterData
    .map((product) => product.model)
    .filter(
      (model, index, self) =>
        self.map((model) => model[1].value).indexOf(model[1].value) === index
    );

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

  return (
    <FormGroup data-cy='category_filter'>
      <Typography id='categories' gutterBottom>
        {CATERGORY_TEXT[language].value}:
      </Typography>
      {models.map((model) => (
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
    </FormGroup>
  );
};

export default ModelsFilter;
