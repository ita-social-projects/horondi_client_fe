import React, { useEffect, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
  PATTERN_TEXT,
  NONE_PATTERN
} from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setPatternsFilter } from '../../../../redux/filter/filter.actions';

const PatternsFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { products, patternsFilter, language } = useSelector(
    ({
      Products: { products },
      Filter: { patternsFilter },
      Language: { language }
    }) => ({
      products,
      patternsFilter,
      language
    })
  );

  const patterns = [
    ...new Set(
      products.map((product) =>
        product.pattern.length
          ? JSON.stringify(product.pattern)
          : JSON.stringify(NONE_PATTERN)
      )
    )
  ].map(JSON.parse);

  const [patternsCheck, setPatternsCheck] = useState({});

  useEffect(() => {
    dispatch(
      setPatternsFilter(
        patterns
          .filter((pattern) => patternsCheck[pattern[1].value])
          .map((pattern) => pattern[1].value)
      )
    );
  }, [patternsCheck]);

  useEffect(() => {
    if (!patternsFilter) setPatternsCheck({});
  });

  const handlePatternChange = (event) => {
    setPatternsCheck({
      ...patternsCheck,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <FormGroup>
      <Typography id='patterns' gutterBottom>
        {PATTERN_TEXT[language]}:
      </Typography>
      {patterns.map((pattern) => (
        <FormControlLabel
          key={pattern[1].value}
          className={styles.checkbox}
          control={
            <Checkbox
              name={pattern[1].value}
              checked={!!patternsCheck[pattern[1].value]}
            />
          }
          label={pattern[language].value}
          onChange={handlePatternChange}
        />
      ))}
    </FormGroup>
  );
};

export default PatternsFilter;
