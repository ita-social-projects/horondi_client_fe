import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_ERROR,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../translations/checkout.translations';
import { useStyles } from './checkout-form.styles';
import { DEFAULT_CURRENCY, formRegExp } from '../../../configs';
import { calcPrice } from '../../../utils/priceCalculating';
import Delivery from './delivery';
import { CART_BUTTON_TITLES } from '../../../translations/cart.translations';
import routes from '../../../configs/routes';
import { setOrder } from '../../../redux/order/order.actions';
import { checkoutFormBtnValue, orderInputData } from '../../../utils/checkout';

const CheckoutForm = ({
  language,
  isLightTheme,
  currency,
  cartItems,
  deliveryType
}) => {
  const styles = useStyles({
    isLightTheme
  });

  const dispatch = useDispatch();

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
      .min(2, CHECKOUT_ERROR[language].userComment)
      .max(500, CHECKOUT_ERROR[language].userComment)
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
    },
    onSubmit: (data) => {
      const orderInput = orderInputData(
        data,
        deliveryType,
        cartItems,
        language
      );

      dispatch(setOrder(orderInput));
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.root}>
        <div className={styles.checkoutFormContainer}>
          <div className={styles.userInfoContainer}>
            <div className={styles.checkoutTitleInfo}>
              <div className={styles.checkoutTitleInfoData}>
                <Link to={routes.pathToCart} className={styles.backBtn}>
                  <KeyboardBackspaceIcon
                    color={isLightTheme ? 'primary' : 'action'}
                    className={styles.backBtnLine}
                  />
                </Link>
                <h2 className={styles.checkoutTitle}>
                  {CHECKOUT_TITLES[language].checkoutTitle}
                </h2>
              </div>
              <div className={styles.checkoutTitleLine} />
            </div>

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
                variant='outlined'
                className={styles.formControl}
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
                {touched.paymentMethod && errors.paymentMethod && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.paymentMethod}
                  </div>
                )}
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
                  error={touched.userComment && !!errors.userComment}
                />
                {touched.userComment && errors.userComment && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.userComment}
                  </div>
                )}
              </div>
              <p className={styles.contactInfoAdditional}>
                {CHECKOUT_ADDITIONAL_INFORMATION[language].additionalInfo}
              </p>
            </div>
          </div>
          <div className={styles.deliveryContainer}>
            <div className={styles.checkoutYourOrderTitleData}>
              <h2 className={styles.checkoutTitle}>
                {CHECKOUT_TITLES[language].yourOrderTitle}
              </h2>
              <div className={styles.checkoutTitleLine} />
            </div>
            <Delivery
              deliveryType={deliveryType}
              language={language}
              isLightTheme={isLightTheme}
            />
            <div className={styles.submitInfo}>
              <div className={styles.totalSum}>
                <h4 className={styles.totalSumTitle}>
                  {CHECKOUT_TITLES[language].totalPrice}
                </h4>
                <p
                  className={`${styles.totalSumTitle} ${styles.totalSumValue}`}
                >
                  {totalPriceToPay / 100}{' '}
                  {currency === DEFAULT_CURRENCY
                    ? CHECKOUT_TITLES[language].UAH
                    : CHECKOUT_TITLES[language].USD}
                </p>
              </div>
              <button type='submit' className={styles.submitBtn}>
                {checkoutFormBtnValue(values, language)}
              </button>
              <Link to={routes.pathToMain}>
                <span className={`${styles.totalSumTitle} ${styles.goods}`}>
                  {CART_BUTTON_TITLES[language].goods}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
CheckoutForm.propTypes = {
  language: PropTypes.number,
  isLightTheme: PropTypes.bool,
  currency: PropTypes.number,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  ),
  deliveryType: PropTypes.string,
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string
  }),
  touched: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string
  })
};

CheckoutForm.defaultProps = {
  language: null,
  isLightTheme: false,
  currency: null,
  deliveryType: '',
  cartItems: [],
  values: {},
  errors: {},
  touched: {}
};

export default CheckoutForm;
