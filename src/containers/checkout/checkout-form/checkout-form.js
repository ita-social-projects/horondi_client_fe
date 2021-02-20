import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { CHECKOUT_ADDITIONAL_INFORMATION, CHECKOUT_PAYMENT, CHECKOUT_TEXT_FIELDS, CHECKOUT_TITLES } from '../../../translations/checkout.translations';
import { useStyles } from './checkout-form.styles';
import { DEFAULT_CURRENCY, deliveryTypes, formRegExp } from '../../../configs';
import { calcPrice } from '../../../utils/priceCalculating';
import Delivery from './delivery';
import { CART_BUTTON_TITLES, DELIVERY_TYPE } from '../../../translations/cart.translations';
import routes from '../../../configs/routes';
import { setOrder } from '../../../redux/order/order.actions';
import { checkoutDefaultProps, checkoutFormBtnValue, checkoutPropTypes, initialValues, orderInputData } from '../../../utils/checkout';
import { validationSchema } from '../../../validators/chekout';

const CheckoutForm = ({ language, isLightTheme, currency, cartItems, deliveryType }) => {
  const styles = useStyles({
    isLightTheme
  });

  const dispatch = useDispatch();

  const totalPriceToPay = cartItems.reduce((previousValue, currentValue) => previousValue + calcPrice(currentValue, currency), 0);

  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    validationSchema: validationSchema(deliveryType, language),
    initialValues,
    onSubmit: (data) => {
      const orderInput = orderInputData(data, deliveryType, cartItems, language);
      dispatch(setOrder(orderInput));
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.root}>
        <Grid item className={styles.checkoutFormContainer}>
          <Grid item className={styles.userInfoContainer}>
            <div className={styles.checkoutTitleInfo}>
              <div className={styles.checkoutTitleInfoData}>
                <Link to={routes.pathToCart} className={styles.backBtn}>
                  <KeyboardBackspaceIcon color={isLightTheme ? 'primary' : 'action'} className={styles.backBtnLine} />
                </Link>
                <h2 className={styles.checkoutTitle}>{CHECKOUT_TITLES[language].checkoutTitle}</h2>
              </div>
              <div className={styles.checkoutTitleLine} />
            </div>

            <div className={styles.contactInfoWrapper}>
              <h2 className={styles.contactInfoTitle}>{CHECKOUT_TITLES[language].contactInfo}</h2>
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
              <h2 className={`${styles.contactInfoTitle} ${styles.paymentTitle}`}>{CHECKOUT_TITLES[language].payment}</h2>
              <FormControl error={touched.paymentMethod && !!errors.paymentMethod} variant='outlined' className={styles.formControl}>
                <InputLabel variant='outlined'>{CHECKOUT_TEXT_FIELDS[language].paymentMethod}</InputLabel>
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
              <h2 className={styles.contactInfoTitle}>{CHECKOUT_TITLES[language].orderComment}</h2>
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
              <p className={styles.contactInfoAdditional}>{CHECKOUT_ADDITIONAL_INFORMATION[language].additionalInfo}</p>
            </div>
          </Grid>
          <Grid item className={styles.deliveryContainer}>
            <div className={styles.checkoutYourOrderTitleData}>
              <h2 className={styles.checkoutTitle}>{CHECKOUT_TITLES[language].yourOrderTitle}</h2>
              <div className={styles.checkoutTitleLine} />
            </div>
            <Delivery deliveryType={deliveryType} language={language} isLightTheme={isLightTheme} values={values} errors={errors} touched={touched} handleChange={handleChange} />
            <div className={styles.submitInfo}>
              <div className={styles.totalSum}>
                <h4 className={styles.totalSumTitle}>{CHECKOUT_TITLES[language].totalPrice}</h4>
                <p className={`${styles.totalSumTitle} ${styles.totalSumValue}`}>
                  {totalPriceToPay / 100} {currency === DEFAULT_CURRENCY ? CHECKOUT_TITLES[language].UAH : CHECKOUT_TITLES[language].USD}
                </p>
              </div>
              <button type='submit' className={styles.submitBtn}>
                {checkoutFormBtnValue(values, language)}
              </button>
              <Link to={routes.pathToMain}>
                <span className={`${styles.totalSumTitle} ${styles.goods}`}>{CART_BUTTON_TITLES[language].goods}</span>
              </Link>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = checkoutPropTypes;
CheckoutForm.defaultProps = checkoutDefaultProps;

export default CheckoutForm;
