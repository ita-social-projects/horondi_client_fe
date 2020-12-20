import React, { useEffect, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { IS_HOT_TEXT } from '../../../../translations/product-list.translations';
import {URL_QUERIES_NAME} from '../../../../configs/index'
import { setHotItemFilter } from '../../../../redux/products/products.actions';

const HotItemFilter = ({ language }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { isHotItemFilter, page, defaultPage } = URL_QUERIES_NAME
  const searchParams = new URLSearchParams(search);
  const [hotItem, setHotItem] = useState(false)
  useEffect(() => {
    if(searchParams.get(isHotItemFilter)){
      setHotItem(!hotItem)
      dispatch(setHotItemFilter(hotItem));
    }
  }, [dispatch, searchParams.toString()]);

  const handleChange = (event) => {
    if(event.target.checked){
      searchParams.set( isHotItemFilter, event.target.checked)
    }else {
      searchParams.delete( isHotItemFilter)
      setHotItem(!hotItem)
      dispatch(setHotItemFilter(hotItem));
    }
    searchParams.set(page, defaultPage)
    history.push(`?${searchParams.toString()}`);
  };

  return (
    <FormGroup data-cy='hot_item_filter'>
      <Typography id='isHot' gutterBottom>
        {IS_HOT_TEXT[language].value}:
        <Switch
          color='default'
          checked={hotItem}
          onChange={handleChange}
          name={isHotItemFilter}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Typography>
    </FormGroup>
  );
};

export default HotItemFilter;
