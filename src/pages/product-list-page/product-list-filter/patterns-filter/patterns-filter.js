import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { PATTERN_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setPatternsFilter } from '../../../../redux/products/products.actions';

const PatternsFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { filterData, filters, language } = useSelector(
    ({ Products: { filterData, filters }, Language: { language } }) => ({
      filterData,
      filters,
      language
    })
  );

  const { patternsFilter } = filters;

  const patternsName = filterData.map((product) => product.pattern[1].value);

  const patterns = filterData
    .map((product) => product.pattern)
    .filter(
      (pattern, index) => patternsName.indexOf(pattern[1].value) === index
    );

  const handlePatternChange = (event) => {
    if (!event.target.checked) {
      dispatch(
        setPatternsFilter(
          patternsFilter.filter((pattern) => pattern !== event.target.name)
        )
      );
    } else {
      dispatch(
        setPatternsFilter([...new Set([...patternsFilter, event.target.name])])
      );
    }
  };

  const [hideFilters, setHideFilters] = useState(true);

  return (
    <FormGroup data-cy='patterns_filter'>
      <Typography
        className={styles.filterName}
        id='patterns'
        gutterBottom
        onClick={() => setHideFilters(!hideFilters)}
      >
        <span>{PATTERN_TEXT[language].value}:</span>
        <span style={{ textDecoration: 'underline' }}>{patterns.length}</span>
      </Typography>
      {hideFilters ||
        patterns.map((pattern) => (
          <FormControlLabel
            key={pattern[1].value}
            className={styles.checkbox}
            control={
              <Checkbox
                name={pattern[1].value}
                checked={
                  !!patternsFilter.find((filter) => filter === pattern[1].value)
                }
              />
            }
            label={pattern[language].value}
            onChange={handlePatternChange}
          />
        ))}
      <Divider />
    </FormGroup>
  );
};

export default PatternsFilter;
