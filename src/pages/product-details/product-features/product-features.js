import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { setProductToSend } from '../../../redux/products/products.actions';

const ProductFeatures = ({ bottomMaterials, additions }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, totalPrice, bagBottom, sidePocket } = useSelector(
    ({ Language, Products: { productToSend } }) => ({
      language: Language.language,
      totalPrice: productToSend.totalPrice,
      sidePocket: productToSend.sidePocket.isSelected,
      bagBottom: productToSend.bagBottom.value
    })
  );

  const { additionalPrice, available, name } = additions[0] || {};

  const setAdditionalPrice = (price) => ` +${price} UAH`;

  const additionsNameToSend = useMemo(
    () => (additions.length >= 1 ? additions[0].name : null),
    [additions]
  );

  const bottomNameToSend = useMemo(
    () =>
      bottomMaterials
        ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
        : null,
    [bagBottom, bottomMaterials]
  );

  const handleBottomChange = (event) => {
    const { value } = event.target;
    const oldPrice = bagBottom
      ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
        .additionalPrice[0].value
      : 0;
    const newPrice = value
      ? bottomMaterials.find(({ name }) => name[1].value === value)
        .additionalPrice[0].value
      : 0;
    const newTotalPrice = totalPrice - oldPrice + newPrice;

    dispatch(
      setProductToSend({
        totalPrice: newTotalPrice,
        bagBottom: { value, name: bottomNameToSend }
      })
    );
  };

  const handlePocketChange = (event) => {
    const { checked } = event.target;
    if (!sidePocket) {
      dispatch(
        setProductToSend({ totalPrice: totalPrice + additionalPrice[0].value })
      );
    } else {
      dispatch(
        setProductToSend({ totalPrice: totalPrice - additionalPrice[0].value })
      );
    }

    dispatch(
      setProductToSend({
        sidePocket: { isSelected: checked, additionsNameToSend }
      })
    );
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
