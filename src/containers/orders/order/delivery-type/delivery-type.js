import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
import { faDollarSign, faHryvnia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CART_TITLES,
  CART_TABLE_FIELDS,
  DELIVERY_TYPE,
  CART_BUTTON_TITLES
} from "../../../../translations/cart.translations";
import { useStyles } from "./delivery-type.styles";
import routes from "../../../../configs/routes";
import { useDispatch } from "react-redux";
import { addDeliveryType } from "../../../../redux/cart/cart.actions";

const DeliveryType = ({ language, totalPrice, currency }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [deliveryType, setDeliveryType] = useState("SELFPICKUP");

  const { pathToBackpacks, pathToCheckout } = routes;

  const currencySign = currency ? faDollarSign : faHryvnia;
  const handleAddDeliveryType = () => {
    dispatch(addDeliveryType(deliveryType));
  };
  const radioButtons = Object.entries(DELIVERY_TYPE[language]).map((type) => (
    <FormControlLabel
      value={type[0].toUpperCase()}
      control={<Radio color='default' size='small'/>}
      label={type[1]}
      key={type[0]}
      classes={{ label: styles.radioBtn }}
    />
  ));

  return (
    <div className={styles.root}>
      <h2>{CART_TITLES[language].order}</h2>
      <div className={styles.sumContainer}>
        <span>{CART_TABLE_FIELDS[language].total}</span>
        <span>
          {Math.round(totalPrice / 100)} <FontAwesomeIcon icon={currencySign}/>
        </span>
      </div>
      <div>
        <h3>{CART_TABLE_FIELDS[language].delivery}</h3>
        <FormControl
          component='fieldset'
          classes={{ root: styles.radioBtnWrapper }}
        >
          <RadioGroup
            aria-label='Delivery type'
            name='delivery-type'
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            {radioButtons}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles.sumContainer}>
        <span>{CART_TABLE_FIELDS[language].toPay}</span>
        <span>
          {Math.round(totalPrice / 100)} <FontAwesomeIcon icon={currencySign}/>
        </span>
      </div>
      <div className={styles.btnWrapper}>
        <Link
          to={pathToCheckout}
        >
          <Button onClick={handleAddDeliveryType} className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].checkout}
          </Button>
        </Link>
        <Link to={pathToBackpacks}>
          <span className={styles.btnCatalogue}>
            {CART_BUTTON_TITLES[language].goods}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DeliveryType;
