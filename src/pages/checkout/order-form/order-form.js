import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formRegExp, REGISTER_USER_DATA } from '../../../configs';
import {
  CHECKOUT_TITLES,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_DROP_LIST,
  CHECKOUT_BUTTON,
  CHECKOUT_ADDITIONAL_INFORMATION,
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

  // HOOKS
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  useEffect(() => {
    // VALID FIELDS
    if (firstNameValidated && emailValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated]);

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
            <div className={style.contactFild}>
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
            <div className={style.contactFild}>
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
        <span className={style.subTitle}>
          {CHECKOUT_TITLES[language].delivery}
        </span>
        <span className={style.subTitle}>
          {CHECKOUT_TITLES[language].payment}
        </span>
        <Button onClick={handleCreateOrder}>
          {CHECKOUT_BUTTON[language].createOrder}
        </Button>
      </div>
    </div>
  );
};
