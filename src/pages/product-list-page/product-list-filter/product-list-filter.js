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
    language
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
      },
      Language: { language }
    }) => ({
      products,
      currentPage,
      productsPerPage,
      sortByPrice,
      isHotItem,
      sortByRate,
      sortByPopularity,
      category,
      language
    })
  );

  useEffect(() => {
    setPrice([
      Math.min(...products.map((product) => product.basePrice)),
      Math.max(...products.map((product) => product.basePrice))
    ]);
  }, [products]);

  const colors = [
    ...new Set(
      products.map((product) => JSON.stringify(product.colors[0].simpleName))
    )
  ].map(JSON.parse);

  const patterns = [
    ...new Set(
      products.map((product) =>
        product.pattern.length
          ? JSON.stringify(product.pattern)
          : JSON.stringify([
            {
              lang: 'uk',
              value: 'Немає'
            },
            {
              lang: 'eng',
              value: 'None '
            }
          ])
      )
    )
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
        colors: colors
          .filter((color) => colorsCheck[color[1].value])
          .map((color) => color[1].value),
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

  const searchText = ['Пошук', 'Search'];

  const priceText = ['Ціна', 'Price Range'];

  const colorsText = ['Колір', 'Colors'];

  const patternText = ['Гобелен', 'Pattern'];

  const filterButtonText = ['Фільтр', 'Filter'];

  const clearFilterButtonText = ['Очистити', 'Clear Filter'];

  const priceFilter = (
    <FormGroup>
      <Typography id='range-slider' gutterBottom>
        {priceText[language]}:
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
        {colorsText[language]}:
      </Typography>
      {colors.map((color) => (
        <FormControlLabel
          key={color[1].value}
          className={styles.checkbox}
          control={
            <Checkbox
              name={color[1].value}
              checked={!!colorsCheck[color[1].value]}
            />
          }
          label={color[language].value}
          onChange={handleColorChange}
        />
      ))}
    </FormGroup>
  );

  const patternFilter = (
    <FormGroup>
      <Typography id='patterns' gutterBottom>
        {patternText[language]}:
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
              label={searchText[language]}
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
              {filterButtonText[language]}
            </Button>
            <Button
              className={styles.button}
              variant='contained'
              onClick={handleClearFilter}
            >
              {clearFilterButtonText[language]}
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
