import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_INPUT_FIELD,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../translations/checkout.translations';
import { useStyles } from './checkout-form.styles';
import { CY_CODE_ERR, SESSION_STORAGE, LANGUAGES_LIST } from '../../../configs';
import { calcPriceForCart } from '../../../utils/priceCalculating';
import Delivery from './delivery';
import routes from '../../../const/routes';
import { addOrder, addPaymentMethod, getFondyData } from '../../../redux/order/order.actions';
import {
  checkoutDefaultProps,
  checkoutFormBtnValue,
  checkoutPropTypes,
  getCurrentCurrency,
  handleError,
  initialValues,
  getThemeColor,
  orderInputData,
  setUserValues,
  userContactInputLabels,
  userNameInputLabels
} from '../../../utils/checkout';
import { getCurrencySign } from '../../../utils/currency';
import { validationSchema } from '../../../validators/chekout';
import { TEXT_FIELD_SIZE, TEXT_FIELD_VARIANT } from '../../../const/material-ui';
import {
  clearSessionStorage,
  getFromSessionStorage,
  setToSessionStorage
} from '../../../services/session-storage.service';

const { pathToUserAgreement, pathToCart } = routes;

const CheckoutForm = ({ language, isLightTheme, currency, cartItems, deliveryType }) => {
  const styles = useStyles({
    isLightTheme
  });
  const currencySign = getCurrencySign(currency);
  const userData = useSelector(({ User }) => User.userData);

  const dispatch = useDispatch();
  const totalPriceToPay = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + calcPriceForCart(currentValue, currency, currentValue.quantity),
    0
  );
  const consentLink =
    language === LANGUAGES_LIST[0].value ? (
      <div className={styles.consentMessage}>
        {' '}
        {CHECKOUT_ADDITIONAL_INFORMATION[language].consent[0]}
        <Link
          className={styles.consentLink}
          to={pathToUserAgreement}
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          {CHECKOUT_ADDITIONAL_INFORMATION[language].consent[1]}{' '}
        </Link>
      </div>
    ) : (
      ''
    );

  const {
    dirty,
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    touched,
    errors,
    resetForm
  } = useFormik({
    validationSchema: validationSchema(deliveryType, language),
    initialValues,

    onSubmit: (data) => {
      data.paymentMethod === CHECKOUT_PAYMENT[language].card
        ? dispatch(addPaymentMethod(CHECKOUT_PAYMENT[language].card)) &&
          dispatch(
            getFondyData({
              order: orderInputData(data, deliveryType, cartItems, language),
              currency: getCurrentCurrency(currency),
              amount: String(totalPriceToPay)
            })
          )
        : dispatch(addOrder(orderInputData(data, deliveryType, cartItems, language))) &&
          dispatch(addPaymentMethod(CHECKOUT_PAYMENT[language].cash));
      clearSessionStorage();
    }
  });

  useEffect(() => {
    if (userData && !getFromSessionStorage(SESSION_STORAGE.CHECKOUT_FORM)) {
      resetForm({ values: setUserValues(values, userData, deliveryType) });
    }
  }, [userData]);

  useEffect(() => {
    dirty && setToSessionStorage(SESSION_STORAGE.CHECKOUT_FORM, values);
  }, [values]);

  useEffect(() => {
    resetForm({ values: getFromSessionStorage(SESSION_STORAGE.CHECKOUT_FORM) });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.root}>
        <Grid item className={styles.checkoutFormContainer}>
          <Grid item className={styles.userInfoContainer}>
            <div className={styles.checkoutTitleInfo}>
              <div className={styles.checkoutTitleInfoData}>
                <Link to={pathToCart} className={styles.backBtn}>
                  <KeyboardBackspaceIcon color={getThemeColor()} className={styles.backBtnLine} />
                </Link>
                <h2 className={styles.checkoutTitle}>{CHECKOUT_TITLES[language].checkoutTitle}</h2>
              </div>
              <div className={styles.checkoutTitleLine} />
            </div>
            <div className={styles.contactInfoWrapper}>
              <h2 className={styles.contactInfoTitle}>{CHECKOUT_TITLES[language].contactInfo}</h2>
              <div className={styles.contactInfoFields}>
                {userNameInputLabels(language).map((field) => (
                  <div key={field.name} className={styles.inputData}>
                    <TextField
                      size={TEXT_FIELD_SIZE.SMALL}
                      data-cy={CHECKOUT_INPUT_FIELD[field.name]}
                      name={CHECKOUT_INPUT_FIELD[field.name]}
                      className={styles.textField}
                      variant={TEXT_FIELD_VARIANT.OUTLINED}
                      label={field.label}
                      value={values[field.name]}
                      onChange={handleChange}
                      error={touched[field.name] && !!errors[field.name]}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <div data-cy={CY_CODE_ERR} className={styles.error}>
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.contactInfoFields}>
                {userContactInputLabels(language).map((field) => (
                  <div key={field.name} className={styles.inputData}>
                    <TextField
                      size={TEXT_FIELD_SIZE.SMALL}
                      data-cy={CHECKOUT_INPUT_FIELD[field.name]}
                      name={CHECKOUT_INPUT_FIELD[field.name]}
                      className={styles.textField}
                      variant={TEXT_FIELD_VARIANT.OUTLINED}
                      label={field.label}
                      value={values[field.name]}
                      onChange={handleChange}
                      error={handleError(touched[field.name], errors[field.name])}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <div data-cy={CY_CODE_ERR} className={styles.error}>
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.contactPaymentInfo}>
              <h2 className={`${styles.contactInfoTitle} ${styles.paymentTitle}`}>
                {CHECKOUT_TITLES[language].payment}
              </h2>
              <FormControl
                error={touched.paymentMethod && !!errors.paymentMethod}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                className={styles.formControl}
              >
                <InputLabel variant={TEXT_FIELD_VARIANT.OUTLINED}>
                  {CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                </InputLabel>
                <Select
                  label={CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                  className={styles.paymentSelect}
                  data-cy={CHECKOUT_INPUT_FIELD.paymentMethod}
                  name={CHECKOUT_INPUT_FIELD.paymentMethod}
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
                  <div data-cy={CY_CODE_ERR} className={styles.error}>
                    {errors.paymentMethod}
                  </div>
                )}
              </FormControl>
            </div>
            <div className={styles.contactPaymentInfo}>
              <h2 className={styles.contactInfoTitle}>{CHECKOUT_TITLES[language].orderComment}</h2>
              <div>
                <TextField
                  size={TEXT_FIELD_SIZE.SMALL}
                  data-cy={CHECKOUT_INPUT_FIELD.userComment}
                  name={CHECKOUT_INPUT_FIELD.userComment}
                  multiline
                  rows={4}
                  className={styles.textAreaField}
                  variant={TEXT_FIELD_VARIANT.OUTLINED}
                  value={values.userComment}
                  onChange={handleChange}
                  error={handleError(touched.userComment, errors.userComment)}
                />
                {touched.userComment && errors.userComment && (
                  <div data-cy={CY_CODE_ERR} className={styles.error}>
                    {errors.userComment}
                  </div>
                )}
              </div>
              <p className={styles.contactInfoAdditional}>
                {CHECKOUT_ADDITIONAL_INFORMATION[language].additionalInfo}
              </p>
            </div>
          </Grid>
          <Grid item className={styles.deliveryContainer}>
            <div className={styles.checkoutYourOrderTitleData}>
              <h2 className={styles.checkoutTitle}>{CHECKOUT_TITLES[language].yourOrderTitle}</h2>
              <div className={styles.checkoutTitleLine} />
            </div>
            <Delivery
              deliveryType={deliveryType}
              language={language}
              isLightTheme={isLightTheme}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
            <div className={styles.submitInfo}>
              <div className={styles.totalSum}>
                <h4 className={styles.totalSumTitle}>{CHECKOUT_TITLES[language].totalPrice}</h4>
                <p className={`${styles.totalSumTitle} ${styles.totalSumValue}`}>
                  {Math.round(totalPriceToPay / 100)}
                  {'\u00A0'}
                  <FontAwesomeIcon icon={currencySign} />
                </p>
              </div>
              <button type='submit' className={styles.submitBtn}>
                {checkoutFormBtnValue(values, language)}
              </button>
              {consentLink}
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
