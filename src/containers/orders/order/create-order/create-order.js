import React, { useState } from 'react';

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  CART_TITLES,
  CART_TABLE_FIELDS,
  DELIVERY_TYPE,
  CART_BUTTON_TITLES
} from '../../../../translations/cart.translations';
import { useStyles } from './create-order.styles';
import routes from '../../../../configs/routes';

const CreateOrder = ({ language, totalPrice, currency }) => {
  const styles = useStyles();
  const [deliveryType, setDeliveryType] = useState('SELFPICKUP');
  const { pathToBackpacks, pathToCheckout } = routes;
  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';
  const radioButtons = Object.entries(DELIVERY_TYPE[language]).map((type) => (
    <FormControlLabel
      value={type[0].toUpperCase()}
      control={<Radio color='default' />}
      label={type[1]}
      key={type[0]}
    />
  ));

  return (
    <div className={styles.root}>
      <h2>{CART_TITLES[language].order}</h2>
      <div>
        <span>{CART_TABLE_FIELDS[language].total}</span>
        <span>
          {totalPrice} <FontAwesomeIcon icon={currencySign} />
        </span>
      </div>
      <div>
        <h3>{CART_TABLE_FIELDS[language].delivery}</h3>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='gender'
            name='gender1'
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            {radioButtons}
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <span>{CART_TABLE_FIELDS[language].toPay}</span>
        <span>
          {totalPrice} <FontAwesomeIcon icon={currencySign} />
        </span>
      </div>
      <div className={styles.btnWrapper}>
        <Link to={pathToBackpacks}>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].goods}
          </Button>
        </Link>
        <Link to={pathToCheckout}>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].checkout}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateOrder;
