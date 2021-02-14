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

const CheckoutForm = ({ language, isLightTheme }) => {
  const styles = useStyles({
    isLightTheme
  });

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
      .email(CHECKOUT_ERROR[language].phoneNumber)
      .required(CHECKOUT_ERROR[language].requiredField),
    paymentMethod: Yup.string().required(
      CHECKOUT_ERROR[language].requiredField
    ),
    userComment: Yup.string()
      .min(2, CHECKOUT_ERROR[language].firstName)
      .max(20, CHECKOUT_ERROR[language].firstName)
      .required(CHECKOUT_ERROR[language].requiredField)
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
                    error={touched.code && !!errors.code}
                  />
                  {touched.code && errors.code && (
                    <div data-cy='code-error' className={styles.error}>
                      {errors.code}
                    </div>
                  )}
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
                    error={touched.code && !!errors.code}
                  />
                  {touched.code && errors.code && (
                    <div data-cy='code-error' className={styles.error}>
                      {errors.code}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.contactInfoFields}>
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
                  error={touched.code && !!errors.code}
                />
                {touched.code && errors.code && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.code}
                  </div>
                )}
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
                  error={touched.code && !!errors.code}
                />
                {touched.code && errors.code && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.code}
                  </div>
                )}
              </div>
              <div className={styles.contactPaymentInfo}>
                <h2
                  className={`${styles.contactInfoTitle} ${styles.paymentTitle}`}
                >
                  {CHECKOUT_TITLES[language].payment}
                </h2>
                <FormControl variant='outlined' className={styles.formControl}>
                  <InputLabel variant='outlined'>
                    {CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                  </InputLabel>
                  <Select
                    label={CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                    className={styles.paymentSelect}
                    data-cy='paymentMethod'
                    name='paymentMethod'
                    error={touched.paymentMethod && !!errors.paymentMethod}
                    value={values.paymentMethod || []}
                    onChange={handleChange}
                  >
                    {Object.values(CHECKOUT_PAYMENT[language]).map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                  <p className={styles.totalSumValue}>900</p>
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
