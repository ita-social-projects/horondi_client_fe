import React from 'react';
import { useSelector } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './product-features.styles';

import {
  ADD_FEATURES,
  PRODUCT_BOTTOM,
  SELECT_NONE
} from '../../../translations/product-details.translations';

const ProductFeatures = ({
  bottomMaterials,
  additions,
  bagBottom,
  setBagBottom,
  sidePocket,
  setSidePocket,
  setPrice
}) => {
  const styles = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const { additionalPrice, available, name } = additions[0] || {};

  const setAdditionalPrice = (price) => ` +${price / 100} UAH`;

  const handleBottomChange = (event) => {
    const { value } = event.target;

    const oldPrice = bagBottom
      ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
        .additionalPrice[0].value / 100
      : 0;

    const newPrice = value
      ? bottomMaterials.find(({ name }) => name[1].value === value)
        .additionalPrice[0].value / 100
      : 0;

    setPrice((currentPrice) => currentPrice - oldPrice + newPrice);
    setBagBottom(value);
  };

  const handlePocketChange = (event) => {
    if (!sidePocket) {
      setPrice((currentPrice) => currentPrice + additionalPrice[0].value / 100);
    } else {
      setPrice((currentPrice) => currentPrice - additionalPrice[0].value / 100);
    }
    setSidePocket(event.target.checked);
  };

  const menuItems = bottomMaterials
    ? bottomMaterials.map(({ _id, name, additionalPrice: [{ value }] }) => (
      <MenuItem value={name[1].value} key={_id}>
        {name[language].value}
        {value ? (
          <span className={styles.selectPrice}>
            {setAdditionalPrice(value)}
          </span>
        ) : null}
      </MenuItem>
    ))
    : null;

  return (
    <div>
      {menuItems ? (
        <div>
          <span className={styles.label}>
            {ADD_FEATURES[language].features}:{' '}
          </span>
          <div className={styles.featuresForm}>
            <div className={styles.feature}>
              <FormControl
                data-cy='productSelect'
                className={styles.formControl}
              >
                <InputLabel>{PRODUCT_BOTTOM[language].bagBottom}</InputLabel>
                <Select
                  value={bagBottom}
                  onChange={handleBottomChange}
                  autoWidth
                >
                  <MenuItem value='' key='none'>
                    {SELECT_NONE[language].none}
                  </MenuItem>
                  {menuItems}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      ) : null}
      {available && additionalPrice ? (
        <div className={styles.checkbox}>
          <FormControlLabel
            control={
              <Checkbox checked={sidePocket} onChange={handlePocketChange} />
            }
            label={name[language].value}
          />
          <span className={styles.price}>
            {setAdditionalPrice(additionalPrice[0].value)}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default ProductFeatures;
