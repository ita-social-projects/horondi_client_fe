import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { IS_HOT_TEXT } from '../../../../translations/product-list.translations';
import { setHotItemFilter } from '../../../../redux/products/products.actions';

const HotItemFilter = () => {
  const dispatch = useDispatch();

  const { filters, language } = useSelector(
    ({ Products: { filters }, Language: { language } }) => ({
      filters,
      language
    })
  );

  const { isHotItemFilter } = filters;

  const handleChange = (event) => {
    dispatch(setHotItemFilter(event.target.checked));
  };

  return (
    <FormGroup data-cy='hot_item_filter'>
      <Typography id='isHot' gutterBottom>
        {IS_HOT_TEXT[language].value}:
        <Switch
          checked={isHotItemFilter}
          onChange={handleChange}
          name='isHotItemFilter'
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Typography>
    </FormGroup>
  );
};

export default HotItemFilter;
