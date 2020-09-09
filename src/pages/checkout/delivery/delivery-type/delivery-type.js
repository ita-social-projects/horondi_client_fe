import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST,
  CHECKOUT_TEXT_FIELDS
} from '../../../../translations/checkout.translations';
import ContactsPage from '../../../contacts';

const DeliveryType = ({ deliveryType, setDeliveryType }) => {
  const style = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  // const [deliveryType, setDeliveryType] = useState('');
  const [department, setDepartment] = useState('');
  const [region, setRegion] = useState('');

  const selectHandlerDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const selectHandlerRegion = (event) => {
    setRegion(event.target.value);
  };

  const departments = [1, 2, 3];
  const regions = ['Lviv', 'Kyiv', 'Odesa'];
  const [city, setCity] = useState('');

  const selectHandlerDelivery = (event) => {
    setDeliveryType(event.target.value);
  };

  const selectHandlerCity = (event) => {
    setCity(event.target.value);
  };

  const deliveries = [
    CHECKOUT_DELIVERY_TYPES[language].selfPickUP,
    CHECKOUT_DELIVERY_TYPES[language].novaPoshta,
    CHECKOUT_DELIVERY_TYPES[language].ukrPoshta,
    CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta
  ];

  const novaPoshta = () => (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>{CHECKOUT_DROP_LIST[language].department}</InputLabel>
        <Select
          value={department}
          onChange={selectHandlerDepartment}
          label='department'
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

  const ukrPoshta = () => (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>Region</InputLabel>
        <Select value={region} onChange={selectHandlerRegion} label='region'>
          {regions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>Department</InputLabel>
        <Select
          value={department}
          onChange={selectHandlerDepartment}
          label='department'
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

  const currier = () => (
    <div className={style.contactField}>
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].street}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].building}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].apartment}
        variant='outlined'
        className={style.dataInputCurrier}
      />
    </div>
  );

  const cities = ['Lviv', 'Brody'];

  const deliverySwitcher = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return novaPoshta();
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return ukrPoshta();
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return currier();
      default:
        console.log('default!');
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
        {deliveryType &&
          (deliveryType === CHECKOUT_DELIVERY_TYPES[language].selfPickUP ? (
            <ContactsPage />
          ) : (
            <FormControl variant='outlined' className={style.dataInput}>
              <InputLabel>{CHECKOUT_TEXT_FIELDS[language].city}</InputLabel>
              <Select value={city} onChange={selectHandlerCity} label='city'>
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
      </div>
      {deliverySwitcher()}
    </div>
  );
};

export default DeliveryType;
