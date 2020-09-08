import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { formRegExp, REGISTER_USER_DATA } from '../../../configs';
import {
  CHECKOUT_TITLES,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_DROP_LIST,
  CHECKOUT_BUTTON,
  CHECKOUT_PAYMENT,
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_DELIVERY_TYPES,
  errorMessages
} from '../../../translations/checkout.translations';
import { useStyles } from '../checkout.styles';

export const OrderForm = () => {
  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [phoneValidated, setPhoneValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [deliveryType, setDeliveryType] = useState('');
  const [paymentType, setPaymentType] = useState('');

  // USER VALUES
  const [user, setUser] = useState(REGISTER_USER_DATA);
  const { firstName, lastName, email, phoneNumber } = user;

  // HANDLERS
  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    const inputName = event.target.name;
    setUser({ ...user, [inputName]: input });
    input.match(regExp) ? setValid(true) : setValid(false);
  };

  const handleCreateOrder = () => {
    setShouldValidate(true);
    allFieldsValidated && console.log('YRA!');
  };

  const selectHandlerDelivery = (event) => {
    setDeliveryType(event.target.value);
  };

  const selectHandlerPayment = (event) => {
    setPaymentType(event.target.value);
  };

  // HOOKS
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  useEffect(() => {
    // VALID FIELDS
    if (firstNameValidated && emailValidated && lastName && phoneNumber) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated, lastName, phoneNumber]);

  // STYLES
  const style = useStyles();

  const contactsNames = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages[language].value.firstName,
      value: firstName,
      label: CHECKOUT_TEXT_FIELDS[language].firstName,
      onChange: handleChange,
      rows: 1,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    lastNameNameField: {
      inputName: 'lastName',
      errorMessage: errorMessages[language].value.lastName,
      value: lastName,
      label: CHECKOUT_TEXT_FIELDS[language].lastName,
      onChange: handleChange,
      validation: {
        value: lastNameValidated,
        setValid: setLastNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    }
  };
  const contactsEmailPhone = {
    email: {
      inputName: 'email',
      errorMessage: errorMessages[language].value.email,
      value: email,
      label: CHECKOUT_TEXT_FIELDS[language].email,
      onChange: handleChange,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: 'text',
      regExp: formRegExp.email
    },
    phoneNumberField: {
      inputName: 'phoneNumber',
      errorMessage: errorMessages[language].value.phoneNumber,
      value: phoneNumber,
      label: CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber,
      onChange: handleChange,
      validation: {
        value: phoneValidated,
        setValid: setPhoneValidated
      },
      type: 'text',
      regExp: formRegExp.phoneNumber
    }
  };

  return (
    <div>
      <div className={style.orderFormWrapper}>
        <div className={style.mainTitle}>
          <span>{CHECKOUT_TITLES[language].orderForm}</span>
        </div>
        <div className={style.contactsFields}>
          <span className={style.subTitle}>
            {CHECKOUT_TITLES[language].contactInfo}
          </span>
          <div>
            <div className={style.contactField}>
              {Object.values(contactsNames).map(
                ({
                  label,
                  inputName,
                  errorMessage,
                  value,
                  onChange,
                  validation,
                  type,
                  regExp = null
                }) => (
                  <TextField
                    required
                    fullWidth
                    key={label}
                    label={label}
                    variant='outlined'
                    name={inputName}
                    error={!validation.value && shouldValidate}
                    helperText={
                      !validation.value && shouldValidate
                        ? `${errorMessage}`
                        : ''
                    }
                    className={style.dataInput}
                    onChange={(e) => onChange(e, validation.setValid, regExp)}
                    value={value}
                    type={type}
                  />
                )
              )}
            </div>
            <div className={style.contactField}>
              {Object.values(contactsEmailPhone).map(
                ({
                  label,
                  inputName,
                  errorMessage,
                  value,
                  onChange,
                  validation,
                  type,
                  regExp = null
                }) => (
                  <TextField
                    required
                    fullWidth
                    key={label}
                    label={label}
                    variant='outlined'
                    name={inputName}
                    error={!validation.value && shouldValidate}
                    helperText={
                      !validation.value && shouldValidate
                        ? `${errorMessage}`
                        : ''
                    }
                    className={style.dataInput}
                    onChange={(e) => onChange(e, validation.setValid, regExp)}
                    value={value}
                    type={type}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className={style.subTitle}>
          <span>{CHECKOUT_TITLES[language].delivery}</span>
        </div>

        <div className={style.deliveryType}>
          <FormControl variant='outlined' className={style.dataInput}>
            <InputLabel>{CHECKOUT_DROP_LIST[language].deliveryType}</InputLabel>
            <Select
              value={deliveryType}
              onChange={selectHandlerDelivery}
              label='deliveryType'
            >
              <MenuItem value={10}>
                {CHECKOUT_DELIVERY_TYPES[language].selfPickUP}
              </MenuItem>
              <MenuItem value={10}>
                {CHECKOUT_DELIVERY_TYPES[language].novaPoshta}
              </MenuItem>
              <MenuItem value={20}>
                {CHECKOUT_DELIVERY_TYPES[language].ukrPoshta}
              </MenuItem>
              <MenuItem value={30}>
                {CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={style.subTitle}>
          <span>{CHECKOUT_TITLES[language].payment}</span>
        </div>

        <div>
          <FormControl variant='outlined' className={style.dataInput}>
            <InputLabel>{CHECKOUT_DROP_LIST[language].deliveryType}</InputLabel>
            <Select
              value={paymentType}
              onChange={selectHandlerPayment}
              label='paymentType'
            >
              <MenuItem value={10}>{CHECKOUT_PAYMENT[language].cart}</MenuItem>
              <MenuItem value={10}>{CHECKOUT_PAYMENT[language].cash}</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={style.addInfo}>
          <span>
            {CHECKOUT_ADDITIONAL_INFORMATION[language].additionalInfo}
          </span>
        </div>
        <div className={style.btnWrapper}>
          <Button className={style.btnCreateOrder} onClick={handleCreateOrder}>
            {CHECKOUT_BUTTON[language].createOrder}
          </Button>
        </div>
      </div>
    </div>
  );
};
