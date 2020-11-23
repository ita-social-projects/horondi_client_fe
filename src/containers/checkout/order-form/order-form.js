import React, { useState, useEffect } from 'react';
import { TextField, Button, FormHelperText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Delivery from '../delivery';

import { formRegExp, REGISTER_USER_DATA } from '../../../configs';
import {
  CHECKOUT_TITLES,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_DROP_LIST,
  CHECKOUT_BUTTON,
  CHECKOUT_PAYMENT,
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_ERROR
} from '../../../translations/checkout.translations';
import { useStyles } from '../checkout.styles';

export const OrderForm = () => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));

  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [phoneValidated, setPhoneValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [deliveryTypeValidator, setDeliveryTypeValidator] = useState(false);
  const [openModal, setOpenModal] = useState(shouldValidate);
  const [paymentType, setPaymentType] = useState('');
  const [user, setUser] = useState(REGISTER_USER_DATA);
  const [userComment, setUserComment] = useState('');
  const { firstName, lastName, email, phoneNumber } = user;

  const userData = {
    ...user,
    paymentType,
    userComment
  };

  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    const inputName = event.target.name;
    setUser({ ...user, [inputName]: input });
    input.match(regExp) ? setValid(true) : setValid(false);
  };

  const handleCreateOrder = () => {
    setShouldValidate(true);
    allFieldsValidated && setOpenModal(true);
  };

  const handleDeliveryTypeValidator = (city) => {
    setDeliveryTypeValidator(city);
  };

  const selectHandlerPayment = (event) => {
    setPaymentType(event.target.value);
  };

  const style = useStyles({ deliveryTypeValidator, isLightTheme });

  useEffect(() => {
    if (
      firstNameValidated &&
      emailValidated &&
      lastNameValidated &&
      phoneValidated &&
      paymentType &&
      deliveryTypeValidator
    ) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [
    firstNameValidated,
    emailValidated,
    lastNameValidated,
    phoneValidated,
    paymentType,
    deliveryTypeValidator
  ]);

  const contactsNames = [
    {
      inputName: 'firstName',
      errorMessage: CHECKOUT_ERROR[language].firstName,
      value: firstName,
      label: CHECKOUT_TEXT_FIELDS[language].firstName,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      }
    },
    {
      inputName: 'lastName',
      errorMessage: CHECKOUT_ERROR[language].lastName,
      value: lastName,
      label: CHECKOUT_TEXT_FIELDS[language].lastName,
      validation: {
        value: lastNameValidated,
        setValid: setLastNameValidated
      }
    }
  ];

  const contactsEmailPhone = [
    {
      inputName: 'email',
      errorMessage: CHECKOUT_ERROR[language].email,
      value: email,
      label: CHECKOUT_TEXT_FIELDS[language].email,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      regExp: formRegExp.email
    },
    {
      inputName: 'phoneNumber',
      errorMessage: CHECKOUT_ERROR[language].phoneNumber,
      value: phoneNumber,
      label: CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber,
      validation: {
        value: phoneValidated,
        setValid: setPhoneValidated
      },
      regExp: formRegExp.phoneNumber
    }
  ];

  return (
    <>
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
              {contactsNames.map(
                ({ errorMessage, value, validation, label, inputName }) => (
                  <TextField
                    helperText={
                      !validation.value && shouldValidate
                        ? `${errorMessage}`
                        : ''
                    }
                    onChange={(e) =>
                      handleChange(e, validation.setValid, formRegExp.name)
                    }
                    value={value || ''}
                    required
                    fullWidth
                    key={label}
                    label={label}
                    variant='outlined'
                    name={inputName}
                    error={!validation.value && shouldValidate}
                    className={style.dataInput}
                    type='text'
                  />
                )
              )}
            </div>
            <div className={style.contactField}>
              {contactsEmailPhone.map(
                ({
                  label,
                  inputName,
                  errorMessage,
                  value,
                  validation,
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
                    onChange={(e) =>
                      handleChange(e, validation.setValid, regExp)
                    }
                    value={value || ''}
                    type='text'
                  />
                )
              )}
            </div>
          </div>
        </div>
        <Delivery
          handleDeliveryTypeValidator={handleDeliveryTypeValidator}
          deliveryTypeValidator={deliveryTypeValidator}
          shouldValidate={shouldValidate}
          userData={userData}
          allFieldsValidated={allFieldsValidated}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <div className={style.subTitle}>
          <span>{CHECKOUT_TITLES[language].payment}</span>
        </div>
        <div>
          <FormControl
            variant='outlined'
            className={style.dataInput}
            error={shouldValidate && paymentType === '' && true}
          >
            <InputLabel>
              {CHECKOUT_DROP_LIST[language].paymentMethod}
            </InputLabel>
            <Select
              value={paymentType}
              onChange={selectHandlerPayment}
              label='paymentType'
            >
              <MenuItem value='card'>
                {CHECKOUT_PAYMENT[language].card}
              </MenuItem>
              <MenuItem value='cash'>
                {CHECKOUT_PAYMENT[language].cash}
              </MenuItem>
            </Select>
            {paymentType === '' && (
              <FormHelperText>
                {CHECKOUT_TEXT_FIELDS[language].paymentMethod}
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className={style.comments}>
          <TextField
            value={userComment}
            fullWidth
            multiline
            rows={3}
            onChange={(e) => setUserComment(e.target.value)}
            variant='outlined'
            label={CHECKOUT_TEXT_FIELDS[language].orderComment}
          />
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
    </>
  );
};
