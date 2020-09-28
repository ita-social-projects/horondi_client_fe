import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from '../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST
} from '../../../../translations/checkout.translations';
import { SelfPickupTop, SelfPickupBottom } from './mail-services/self-pickup';
import { NovaPoshtaTop, NovaPoshtaBottom } from './mail-services/nova-poshta';
import { UkrposhtaTop, UkrPoshtaBottom } from './mail-services/ukrposhta';
import { CurrierBottom } from './mail-services/currier/currier-bottom';
import { getNovaPoshtaCities } from '../../../../redux/checkout/checkout.actions';

const DeliveryType = ({ deliveryType, setDeliveryType }) => {
  const style = useStyles();
  const { language, contacts } = useSelector(({ Language, Contacts }) => ({
    language: Language.language,
    contacts: Contacts.contacts
  }));

  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const { cities } = useSelector(({ Checkout }) => ({
    cities: Checkout.cities
  }));

  const citiesForNovaPoshta = cities.map((citi) => citi.description);
  const cityForNovaPoshtaBottom = cities.find(
    (value) => value.description === city
  );

  useEffect(() => {
    dispatch(getNovaPoshtaCities(city));
  }, [dispatch, city]);

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

  const deliverySwitcherTop = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return (
          <NovaPoshtaTop
            setCity={setCity}
            citiesForNovaPoshta={citiesForNovaPoshta}
          />
        );
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <UkrposhtaTop />;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return (
          <NovaPoshtaTop
            setCity={setCity}
            citiesForNovaPoshta={citiesForNovaPoshta}
          />
        );
      default:
        return (
          <SelfPickupTop
            departmentSelfPickUpStorage={departmentSelfPickUpStorage}
            departmentSelfPickUp={departmentSelfPickUp}
            selectHandlerDepartmentSelfPickup={
              selectHandlerDepartmentSelfPickup
            }
          />
        );
    }
  };

  const deliverySwitcherBottom = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return <NovaPoshtaBottom city={city} />;
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <UkrPoshtaBottom />;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return (
          <CurrierBottom cityForNovaPoshtaBottom={cityForNovaPoshtaBottom} />
        );
      case CHECKOUT_DELIVERY_TYPES[language].selfPickUP:
        return (
          <SelfPickupBottom
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
        {deliveryType && deliverySwitcherTop()}
      </div>
      {deliverySwitcherBottom()}
    </div>
  );
};

export default DeliveryType;
