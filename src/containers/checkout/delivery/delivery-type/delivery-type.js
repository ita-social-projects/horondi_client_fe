import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import { useStyles } from '../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST,
  CHECKOUT_TEXT_FIELDS
} from '../../../../translations/checkout.translations';
import DeliveryInfo from './delivery-info/delivery-info';
import { SelfPickupTop, SelfPickupBottom } from './mail-services/self-pickup';
import { NovaPoshtaTop, NovaPoshtaBottom } from './mail-services/nova-poshta';
import { UkrposhtaTop, UkrPoshtaBottom } from './mail-services/ukrposhta';
import { CurrierBottom } from './mail-services/currier/currier-bottom';
import { getNovaPoshtaCities } from '../../../../redux/checkout/checkout.actions';
import SimpleModal from '../../order-form/modal';

const DeliveryType = ({
  deliveryType,
  setDeliveryType,
  handleDeliveryTypeValidator,
  shouldValidate,
  allFieldsValidated
}) => {
  const style = useStyles();
  const { language, contacts } = useSelector(({ Language, Contacts }) => ({
    language: Language.language,
    contacts: Contacts.contacts
  }));

  const [city, setCity] = useState('');
  const [departmentValue, setDepartmentValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [buildValue, setBuildValue] = useState('');
  const [apartmentValue, setApartmentValue] = useState('');

  const dispatch = useDispatch();

  const { cities } = useSelector(({ Checkout }) => ({
    cities: Checkout.cities
  }));
  const userData = {
    firstName: 'Тарас',
    lastName: 'Куник',
    email: 'tapiklviv@gmail.com',
    password: '',
    phoneNumber: '+380934837702'
  };
  const citiesForNovaPoshta = cities.map(
    (cityForNovaPoshta) => cityForNovaPoshta && cityForNovaPoshta.description
  );

  const cityForNovaPoshtaBottom = useMemo(
    () => cities.find((value) => value.description === city),
    [cities, city]
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
      case CHECKOUT_DELIVERY_TYPES[language].selfPickUP:
        return (
          <SelfPickupTop
            departmentSelfPickUpStorage={departmentSelfPickUpStorage}
            departmentSelfPickUp={departmentSelfPickUp}
            selectHandlerDepartmentSelfPickup={
              selectHandlerDepartmentSelfPickup
            }
          />
        );
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <UkrposhtaTop />;
      default:
        return (
          <NovaPoshtaTop
            setCity={setCity}
            citiesForNovaPoshta={citiesForNovaPoshta}
          />
        );
    }
  };

  const deliverySwitcherBottom = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return (
          <NovaPoshtaBottom
            city={city}
            handleDeliveryTypeValidator={handleDeliveryTypeValidator}
            departmentValue={departmentValue}
            setDepartmentValue={setDepartmentValue}
          />
        );
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <UkrPoshtaBottom />;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return (
          <CurrierBottom
            cityForNovaPoshtaBottom={cityForNovaPoshtaBottom}
            handleDeliveryTypeValidator={handleDeliveryTypeValidator}
            setStreetValue={setStreetValue}
            setBuildValue={setBuildValue}
            setApartmentValue={setApartmentValue}
            streetValue={streetValue}
            buildValue={buildValue}
            apartmentValue={apartmentValue}
          />
        );
      case CHECKOUT_DELIVERY_TYPES[language].selfPickUP:
        return (
          <SelfPickupBottom
            departmentSelfPickUpStorage={departmentSelfPickUpStorage}
            departmentSelfPickUp={departmentSelfPickUp}
            handleDeliveryTypeValidator={handleDeliveryTypeValidator}
          />
        );
      default:
        return '';
    }
  };

  const deliveryInfoSwitcher = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return (
          <DeliveryInfo
            cityForNovaPoshtaBottom={cityForNovaPoshtaBottom}
            from={CHECKOUT_DELIVERY_TYPES[language].novaPoshta}
          />
        );
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return <DeliveryInfo />;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return (
          <DeliveryInfo
            cityForNovaPoshtaBottom={cityForNovaPoshtaBottom}
            from={CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta}
          />
        );
      case CHECKOUT_DELIVERY_TYPES[language].selfPickUP:
        return <DeliveryInfo />;
      default:
        return '';
    }
  };

  return (
    <div>
      <div className={style.contactField}>
        <FormControl
          variant='outlined'
          className={style.dataInput}
          error={shouldValidate && deliveryType === '' && true}
        >
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
          {deliveryType === '' && (
            <FormHelperText>
              {CHECKOUT_TEXT_FIELDS[language].deliveryType}
            </FormHelperText>
          )}
        </FormControl>
        {deliveryType && deliverySwitcherTop()}
      </div>
      {deliverySwitcherBottom()}
      {deliveryInfoSwitcher()}
      <div>
        <SimpleModal
          shouldValidate={shouldValidate}
          allFieldsValidated={allFieldsValidated}
          personalData={userData}
        />
      </div>
    </div>
  );
};

export default DeliveryType;
