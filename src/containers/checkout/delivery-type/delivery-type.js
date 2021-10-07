import React, { useState, useEffect } from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { CHECKOUT_TITLES, DELIVERY_TYPE } from '../../../translations/checkout.translations';

import { useStyles } from './delivery-type.styles';
import { addDeliveryType } from '../../../redux/cart/cart.actions';
import { deliveryTypes, SESSION_STORAGE } from '../../../configs';
import { getFromSessionStorage } from '../../../services/session-storage.service';
import { setDeliveryTypeToStorage } from '../../../utils/checkout';

const DeliveryType = ({ language }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [deliveryType, setDeliveryType] = useState(
    getFromSessionStorage(SESSION_STORAGE.DELIVERY_TYPE) || deliveryTypes.SELFPICKUP
  );

  const handleAddDeliveryType = () => {
    dispatch(addDeliveryType(deliveryType));
    setDeliveryTypeToStorage(deliveryType);
  };

  useEffect(() => {
    handleAddDeliveryType();
  }, [deliveryType]);

  const radioButtons = Object.entries(DELIVERY_TYPE[language]).map((type) => (
    <FormControlLabel
      value={type[0].toUpperCase()}
      control={<Radio color='default' size='small' />}
      label={type[1]}
      key={type[0]}
      classes={{ label: styles.radioBtn }}
    />
  ));

  return (
    <div className={styles.root}>
      <div>
        <h3 className={styles.deliveryTitle}>{CHECKOUT_TITLES[language].delivery}</h3>
        <FormControl component='fieldset' classes={{ root: styles.radioBtnWrapper }}>
          <RadioGroup
            aria-label='Delivery type'
            name='delivery-type'
            value={deliveryType}
            onClick={handleAddDeliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            {radioButtons}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default DeliveryType;
