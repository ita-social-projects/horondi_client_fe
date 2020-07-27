import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useDispatch, useSelector } from 'react-redux';
import useStyles from './product-list-filter.styles';
import { getFiltredProducts } from '../../../redux/filter/filter.actions';

export default function CheckboxesGroup() {
  const dispatch = useDispatch();

  const styles = useStyles();

  const [price, setPrice] = useState([null, null]);

  const {
    products,
    currentPage,
    productsPerPage,
    sortByPrice,
    sortByRate,
    sortByPopularity,
    category
  } = useSelector(
    ({
      Products: { products },
      Filter: {
        currentPage,
        productsPerPage,
        sortByPrice,
        isHotItem,
        sortByRate,
        sortByPopularity,
        category
      }
    }) => ({
      products,
      currentPage,
      productsPerPage,
      sortByPrice,
      isHotItem,
      sortByRate,
      sortByPopularity,
      category
    })
  );
  useEffect(() => {
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
  }, [products]);

  const colors = [
    ...new Set(products.map((product) => product.colors[0].simpleName))
  ];

  const patterns = [
    ...new Set(products.map((product) => JSON.stringify(product.pattern)))
  ].map(JSON.parse);

  const [search, setSearch] = useState('');
  const [colorsCheck, setColorsCheck] = useState({});
  const [patternsCheck, setPatternsCheck] = useState({});

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleColorChange = (event) => {
    setColorsCheck({
      ...colorsCheck,
      [event.target.name]: event.target.checked
    });
  };

  const handlePatternChange = (event) => {
    setPatternsCheck({
      ...patternsCheck,
      [event.target.name]: event.target.checked
    });
  };

  const handleFilter = () => {
    dispatch(
      getFiltredProducts({
        search,
        price,
        colors: colors.filter((color) => colorsCheck[color]),
        patterns: patterns
          .filter((pattern) => patternsCheck[pattern[1].value])
          .map((pattern) => pattern[1].value),
        skip: currentPage * productsPerPage,
        limit: productsPerPage,
        basePrice: sortByPrice,
        rate: sortByRate,
        purchasedProducts: sortByPopularity
      })
    );
  };

  const handleClearFilter = () => {
    setSearch('');
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
    setColorsCheck({});
    setPatternsCheck({});
    dispatch(getFiltredProducts());
  };

  const priceFilter = (
    <FormGroup>
      <Typography id='range-slider' gutterBottom>
        Price Range:
      </Typography>
      <Slider
        className={styles.slider}
        value={price}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        min={Math.min(...products.map((product) => product.basePrice))}
        max={Math.max(...products.map((product) => product.basePrice))}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );

  const colorFilter = (
    <FormGroup>
      <Typography id='colors' gutterBottom>
        Color:
      </Typography>
      {colors.map((color) => (
        <FormControlLabel
          key={color}
          className={styles.checkbox}
          control={<Checkbox name={color} checked={!!colorsCheck[color]} />}
          label={color}
          onChange={handleColorChange}
        />
      ))}
    </FormGroup>
  );

  const patternFilter = (
    <FormGroup>
      <Typography id='patterns' gutterBottom>
        Pattern:
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
          label={pattern[1].value}
          onChange={handlePatternChange}
        />
      ))}
    </FormGroup>
  );

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <FormControl component='fieldset' className={styles.formControl}>
          <FormGroup>
            <TextField
              className={styles.search}
              onChange={handleSearch}
              value={search}
              id='outlined-search'
              label='Search field'
              type='search'
              variant='outlined'
            />
          </FormGroup>
          <FormGroup className={styles.controls}>
            <Button
              className={styles.button}
              variant='contained'
              onClick={handleFilter}
            >
              Filter
            </Button>
            <Button
              className={styles.button}
              variant='contained'
              onClick={handleClearFilter}
            >
              Clear Filter
            </Button>
          </FormGroup>
          {priceFilter}
          {colorFilter}
          {patternFilter}
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Paper>
    </div>
  );
}
