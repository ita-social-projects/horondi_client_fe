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
import { CourierBottom } from './mail-services/courier/courier-bottom';
import {
  getFondyData,
  getNovaPoshtaCities
} from '../../../../redux/checkout/checkout.actions';
import SimpleModal from './modal/order-form-modal';

const DeliveryType = ({
  deliveryType,
  setDeliveryType,
  handleDeliveryTypeValidator,
  shouldValidate,
  allFieldsValidated,
  userData,
  openModal,
  setOpenModal
}) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const { language, contacts, cities } = useSelector(
    ({ Language, Contacts, Checkout }) => ({
      language: Language.language,
      contacts: Contacts.contacts,
      cities: Checkout.cities
    })
  );

  const [city, setCity] = useState('');
  const [departmentValue, setDepartmentValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [buildValue, setBuildValue] = useState('');
  const [apartmentValue, setApartmentValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const personalData = {
    ...userData,
    city,
    departmentValue,
    streetValue,
    buildValue,
    apartmentValue,
    deliveryType,
    totalPrice
  };

  const fondyData = useMemo(() => {
    const crypto = window.crypto || window.msCrypto;
    const array = new Uint32Array(1);
    return {
      amount: !!totalPrice && totalPrice * 100,
      orderID: crypto.getRandomValues(array)
    };
  }, [totalPrice]);

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

  useEffect(() => {
    fondyData.amount && dispatch(getFondyData(fondyData));
  }, [dispatch, fondyData, totalPrice]);

  useEffect(() => {
    deliveryType === CHECKOUT_DELIVERY_TYPES[language].selfPickUP &&
      setCity('');
    deliveryType === CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta &&
      setDepartmentValue('');
    if (deliveryType === CHECKOUT_DELIVERY_TYPES[language].novaPoshta) {
      setBuildValue('');
      setApartmentValue('');
      setStreetValue('');
    }
  }, [deliveryType, language]);

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
    CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta
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
    case CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta:
      return (
        <CourierBottom
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
          setTotalPrice={setTotalPrice}
          isRenderPrice={departmentValue}
        />
      );
    case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
      return <DeliveryInfo />;
    case CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta:
      return (
        <DeliveryInfo
          cityForNovaPoshtaBottom={cityForNovaPoshtaBottom}
          from={CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta}
          setTotalPrice={setTotalPrice}
          isRenderPrice={streetValue}
        />
      );
    case CHECKOUT_DELIVERY_TYPES[language].selfPickUP:
      return (
        <DeliveryInfo
          from={CHECKOUT_DELIVERY_TYPES[language].selfPickUP}
          setTotalPrice={setTotalPrice}
        />
      );
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
          fondyData={fondyData}
          shouldValidate={shouldValidate}
          allFieldsValidated={allFieldsValidated}
          personalData={personalData}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
};

export default DeliveryType;
