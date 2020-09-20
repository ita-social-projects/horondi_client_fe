import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { useStyles } from '../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST,
  CHECKOUT_TEXT_FIELDS
} from '../../../../translations/checkout.translations';
import {
  SelfPickUpFirstStep,
  SelfPickUpSecondStep
} from './mail-services/self-pickup';
import { NovaPoshtaFirstStep } from './mail-services/nova-poshta/nova-poshta-first-step';
import { NovaPoshtaSecondStep } from './mail-services/nova-poshta/nova-poshta-second-step';
import { getNovaPoshtaCities } from '../../../../redux/checkout/checkout.actions';

const DeliveryType = ({ deliveryType, setDeliveryType }) => {
  const style = useStyles();
  const { language, contacts } = useSelector(
    ({ Language, Checkout, Contacts }) => ({
      language: Language.language,
      contacts: Contacts.contacts
    })
  );
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNovaPoshtaCities(city));
  }, [dispatch, city]);
  const [region, setRegion] = useState('');

  // useEffect(() => {
  //   dispatch(getNovaPoshtaWarehouse(department));
  // }, [dispatch, department]);

  const selectHandlerRegion = (event) => {
    setRegion(event.target.value);
  };

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

  const regions = ['Lviv', 'Kyiv', 'Odesa'];

  const deliveries = [
    CHECKOUT_DELIVERY_TYPES[language].selfPickUP,
    CHECKOUT_DELIVERY_TYPES[language].novaPoshta,
    CHECKOUT_DELIVERY_TYPES[language].ukrPoshta,
    CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta
  ];

  const ukrPoshtaFirstStep = (
    <Autocomplete
      options={[]}
      getOptionLabel={(option) => option}
      className={style.dataInput}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(event) => console.log('I AM UKRPOSHTA')}
          label='City'
          variant='outlined'
        />
      )}
    />
  );

  const currierFirstStep = (
    <Autocomplete
      options={[]}
      getOptionLabel={(option) => option}
      className={style.dataInput}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(event) => console.log('I AM GROOT')}
          label='City'
          variant='outlined'
        />
      )}
    />
  );

  const ukrPoshtaSecondStep = (
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
          value={[]}
          onChange={() => {
            console.log('UKRPOSTA!');
          }}
          label='department'
        >
          {departmentSelfPickUpStorage.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

  const currierSecondStep = (
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

  const deliverySwitcherFirstStep = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return <NovaPoshtaFirstStep />;
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return ukrPoshtaFirstStep;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return currierFirstStep;
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
        return <NovaPoshtaSecondStep />;
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return ukrPoshtaSecondStep;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return currierSecondStep;
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
