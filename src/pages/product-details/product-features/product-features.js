import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './product-features.styles';

import {
  ADD_FEATURES,
  PRODUCT_BOTTOM,
  SELECT_NONE
} from '../../../translations/product-details.translations';
import { setProductToSend } from '../../../redux/products/products.actions';
import { DEFAULT_PRICE } from '../../../configs';

const ProductFeatures = ({ bottomMaterials, additions, currencySign }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, totalPrice, bagBottom, sidePocket, currency } = useSelector(
    ({ Language, Currency, Products: { productToSend } }) => ({
      language: Language.language,
      totalPrice: productToSend.totalPrice,
      sidePocket: productToSend.sidePocket,
      bagBottom: productToSend.bagBottom.value,
      currency: Currency.currency
    })
  );

  const { additionalPrice, name } =
    additions && additions.length ? additions[0] : {};

  const handleBottomChange = (event) => {
    const { value } = event.target;

    const oldPrice = bagBottom
      ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
          .additionalPrice
      : DEFAULT_PRICE;

    const newPrice = value
      ? bottomMaterials.find(({ name }) => name[1].value === value)
          .additionalPrice
      : DEFAULT_PRICE;

    const newTotalPrice = totalPrice.map((item, i) => {
      item.value = item.value - oldPrice[i].value + newPrice[i].value;
      return item;
    });

    const bottomNameToSend = value
      ? bottomMaterials.find(({ name }) => name[1].value === value).name
      : '';

    dispatch(
      setProductToSend({
        totalPrice: newTotalPrice,
        bagBottom: { value, name: bottomNameToSend }
      })
    );
  };

  const handlePocketChange = (event) => {
    const { checked } = event.target;
    let newTotalPrice;

    if (!sidePocket) {
      newTotalPrice = totalPrice.map((item, i) => {
        item.value += additionalPrice[i].value;
        return item;
      });
    } else {
      newTotalPrice = totalPrice.map((item, i) => {
        item.value -= additionalPrice[i].value;
        return item;
      });
    }

    dispatch(
      setProductToSend({
        totalPrice: newTotalPrice,
        sidePocket: checked
      })
    );
  };

  const menuItems = bottomMaterials
    ? bottomMaterials.map(({ _id, name, additionalPrice }) => (
        <MenuItem value={name[1].value} key={_id}>
          <span>
            {name[language].value}{' '}
            {additionalPrice[0].value ? (
              <span className={styles.selectPrice}>
                +
                <FontAwesomeIcon icon={currencySign} />
                {(additionalPrice[currency].value / 100).toFixed()}
              </span>
            ) : null}
          </span>
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
      {additionalPrice ? (
        <div className={styles.checkbox}>
          <FormControlLabel
            control={
              <Checkbox checked={sidePocket} onChange={handlePocketChange} />
            }
            label={
              <span>
                {name[language].value}{' '}
                <span className={styles.selectPrice}>
                  +
                  <FontAwesomeIcon icon={currencySign} />
                  {additionalPrice[currency].value / 100}
                </span>
              </span>
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductFeatures;
