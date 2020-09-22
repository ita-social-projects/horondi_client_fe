import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from '../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST
} from '../../../../translations/checkout.translations';
import {
  SelfPickUpFirstStep,
  SelfPickUpSecondStep
} from './mail-services/self-pickup';
import { NovaPoshtaFirstStep } from './mail-services/nova-poshta/nova-poshta-first-step';
import { NovaPoshtaSecondStep } from './mail-services/nova-poshta/nova-poshta-second-step';
import { UkrPoshtaFirstStep } from './mail-services/ukrposhta/ukrposhta-first-step';
import { UkrPoshtaSecondStep } from './mail-services/ukrposhta/ukrposhta-second';
import { CurrierFirstStep } from './mail-services/currier/currier-first';
import { CurrierSecondStep } from './mail-services/currier/currier-second';
import { getNovaPoshtaCities } from '../../../../redux/checkout/checkout.actions';

const DeliveryType = ({ deliveryType, setDeliveryType }) => {
  const style = useStyles();
  const { language, contacts } = useSelector(({ Language, Contacts }) => ({
    language: Language.language,
    contacts: Contacts.contacts
  }));

  let { cities } = useSelector(({ Checkout }) => ({
    cities: Checkout.cities
  }));

  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNovaPoshtaCities(city));
  }, [dispatch, city]);

  cities = cities.map((citi) => citi.description);

  const selectHandlerDelivery = (event) => {
    setDeliveryType(event.target.value);
  };

  const departmentSelfPickUpStorage = contacts.map(
    (contact) => contact.address[language].value
  );

  const [departmentSelfPickUp, setDepartmentSeflPickUp] = useState('');

  const selectHandlerDepartmentSelfPickup = (event) => {
    setDepartmentSeflPickUp(event.target.value);
  };

  const deliveries = [
    CHECKOUT_DELIVERY_TYPES[language].selfPickUP,
    CHECKOUT_DELIVERY_TYPES[language].novaPoshta,
    CHECKOUT_DELIVERY_TYPES[language].ukrPoshta,
    CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta
  ];

  const deliverySwitcherFirstStep = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return <NovaPoshtaFirstStep cities={cities} setCity={setCity} />;
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <UkrPoshtaFirstStep />;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return <CurrierFirstStep />;
      default:
        return (
          <SelfPickUpFirstStep
            departmentSelfPickUpStorage={departmentSelfPickUpStorage}
            departmentSelfPickUp={departmentSelfPickUp}
            selectHandlerDepartmentSelfPickup={
              selectHandlerDepartmentSelfPickup
            }
          />
        );
    }
  };

  const deliverySwitcherSecondStep = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return <NovaPoshtaSecondStep city={city} />;
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <UkrPoshtaSecondStep />;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return <CurrierSecondStep />;
      case CHECKOUT_DELIVERY_TYPES[language].selfPickUP:
        return (
          <SelfPickUpSecondStep
            departmentSelfPickUpStorage={departmentSelfPickUpStorage}
            departmentSelfPickUp={departmentSelfPickUp}
          />
        );
      default:
        return '';
    }
  };

  return (
    <div>
      <div className={style.contactField}>
        <FormControl variant='outlined' className={style.dataInput}>
          <InputLabel>{CHECKOUT_DROP_LIST[language].deliveryType}</InputLabel>
          <Select
            value={deliveryType}
            onChange={selectHandlerDelivery}
            label='deliveryType'
          >
            {deliveries.map((delivery) => (
              <MenuItem key={delivery} value={delivery}>
                {delivery}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {deliveryType && deliverySwitcherFirstStep()}
      </div>
      {deliverySwitcherSecondStep()}
    </div>
  );
};

export default DeliveryType;
