import React from 'react';
import { useFormik } from 'formik';
import { Grid, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_BUTTON,
  CHECKOUT_ERROR,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../translations/checkout.translations';
import { useStyles } from './checkout-form.styles';
import { CART_BUTTON_TITLES } from '../../../translations/cart.translations';
import Delivery from './delivery';
import { calcPrice } from '../../../utils/priceCalculating';
import { DEFAULT_CURRENCY, formRegExp } from '../../../configs';

const CheckoutForm = ({ language, isLightTheme, currency, cartItems, match }) => {
  console.log(match);
  const styles = useStyles({
    isLightTheme
  });
  const totalPriceToPay = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + calcPrice(currentValue, currency),
    0
  );

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, CHECKOUT_ERROR[language].firstName)
      .max(20, CHECKOUT_ERROR[language].firstName)
      .required(CHECKOUT_ERROR[language].requiredField),
    lastName: Yup.string()
      .min(2, CHECKOUT_ERROR[language].lastName)
      .max(20, CHECKOUT_ERROR[language].lastName)
      .required(CHECKOUT_ERROR[language].requiredField),
    email: Yup.string()
      .email(CHECKOUT_ERROR[language].email)
      .required(CHECKOUT_ERROR[language].requiredField),
    phoneNumber: Yup.string()
      .matches(formRegExp.phoneNumber, CHECKOUT_ERROR[language].phoneNumber)
      .required(CHECKOUT_ERROR[language].requiredField),
    paymentMethod: Yup.string().required(
      CHECKOUT_ERROR[language].requiredField
    ),
    userComment: Yup.string()
      .min(2, CHECKOUT_ERROR[language].firstName)
      .max(20, CHECKOUT_ERROR[language].firstName)
  });

  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    validationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      paymentMethod: '',
      userComment: ''
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.root}>
        <Grid item xs={12}>
          <div className={styles.checkoutFormContainer}>
            <div className={styles.userInfoContainer}>
              <div className={styles.contactInfoWrapper}>
                <h2 className={styles.contactInfoTitle}>
                  {CHECKOUT_TITLES[language].contactInfo}
                </h2>
                <div className={styles.contactInfoFields}>
                  <div className={styles.inputData}>
                    <TextField
                      size='small'
                      id='outlined-basic'
                      data-cy='firstName'
                      name='firstName'
                      className={styles.textField}
                      variant='outlined'
                      label={CHECKOUT_TEXT_FIELDS[language].firstName}
                      value={values.firstName}
                      onChange={handleChange}
                      error={touched.firstName && !!errors.firstName}
                    />
                    {touched.firstName && errors.firstName && (
                      <div data-cy='code-error' className={styles.error}>
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className={styles.inputData}>
                    <TextField
                      size='small'
                      id='standard-start-adornment'
                      data-cy='lastName'
                      name='lastName'
                      className={styles.textField}
                      variant='outlined'
                      label={CHECKOUT_TEXT_FIELDS[language].lastName}
                      value={values.lastName}
                      onChange={handleChange}
                      error={touched.lastName && !!errors.lastName}
                    />
                    {touched.lastName && errors.lastName && (
                      <div data-cy='code-error' className={styles.error}>
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.contactInfoFields}>
                  <div className={styles.inputData}>
                    <TextField
                      size='small'
                      id='standard-start-adornment'
                      data-cy='email'
                      name='email'
                      className={styles.textField}
                      variant='outlined'
                      label={CHECKOUT_TEXT_FIELDS[language].email}
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && !!errors.email}
                    />
                    {touched.email && errors.email && (
                      <div data-cy='code-error' className={styles.error}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className={styles.inputData}>
                    <TextField
                      size='small'
                      id='standard-start-adornment'
                      data-cy='phoneNumber'
                      name='phoneNumber'
                      className={styles.textField}
                      variant='outlined'
                      label={CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      error={touched.phoneNumber && !!errors.phoneNumber}
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <div data-cy='code-error' className={styles.error}>
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.contactPaymentInfo}>
                <h2
                  className={`${styles.contactInfoTitle} ${styles.paymentTitle}`}
                >
                  {CHECKOUT_TITLES[language].payment}
                </h2>
                <FormControl
                  error={touched.paymentMethod && !!errors.paymentMethod}
                  variant='outlined' className={styles.formControl}
                >
                  <InputLabel variant='outlined'>
                    {CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                  </InputLabel>
                  <Select
                    label={CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                    className={styles.paymentSelect}
                    data-cy='paymentMethod'
                    name='paymentMethod'
                    value={values.paymentMethod}
                    onChange={handleChange}
                  >
                    {Object.values(CHECKOUT_PAYMENT[language]).map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {touched.paymentMethod && errors.paymentMethod && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.paymentMethod}
                  </div>
                )}
              </div>
              <div className={styles.contactPaymentInfo}>
                <h2 className={styles.contactInfoTitle}>
                  {CHECKOUT_TITLES[language].orderComment}
                </h2>
                <div>
                  <TextField
                    size='small'
                    id='outlined-multiline-static'
                    data-cy='userComment'
                    name='userComment'
                    multiline
                    rows={4}
                    className={styles.textAreaField}
                    variant='outlined'
                    value={values.userComment}
                    onChange={handleChange}
                    error={touched.code && !!errors.code}
                  />
                  {touched.code && errors.code && (
                    <div data-cy='code-error' className={styles.error}>
                      {errors.code}
                    </div>
                  )}
                </div>
                <p className={styles.contactInfoAdditional}>
                  {CHECKOUT_ADDITIONAL_INFORMATION[language].additionalInfo}
                </p>
              </div>
            </div>
            <div className={styles.deliveryContainer}>
              <Delivery language={language} isLightTheme={isLightTheme} />
              <div className={styles.submitInfo}>
                <div className={styles.totalSum}>
                  <h4 className={styles.totalSumTitle}>
                    {CHECKOUT_TITLES[language].totalPrice}
                  </h4>
                  <p className={`${styles.totalSumTitle  } ${  styles.totalSumValue}`}>
                    {totalPriceToPay / 100} {
                      currency === DEFAULT_CURRENCY ?
                        CHECKOUT_TITLES[language].UAH :
                        CHECKOUT_TITLES[language].USD
                    }
                  </p>
                </div>
                <button type='submit' className={styles.submitBtn}>
                  {values.paymentMethod === '' ||
                  values.paymentMethod === CHECKOUT_PAYMENT[language].cash
                    ? CHECKOUT_BUTTON[language].confirmOrder
                    : CHECKOUT_BUTTON[language].payOrder}
                </button>
                <Link to='/'>
                  <span className={`${styles.totalSumTitle} ${styles.goods}`}>
                    {CART_BUTTON_TITLES[language].goods}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

CheckoutForm.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  paymentMethod: '',
  userComment: '',
  values: {},
  errors: {},
  touched: {}
};

export default CheckoutForm;
