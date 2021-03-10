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

import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_INPUT_FIELD,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../translations/checkout.translations';
import { useStyles } from './checkout-form.styles';
import { CY_CODE_ERR, DEFAULT_CURRENCY } from '../../../configs';
import { calcPriceForCart } from '../../../utils/priceCalculating';
import Delivery from './delivery';
import { CART_BUTTON_TITLES } from '../../../translations/cart.translations';
import routes from '../../../configs/routes';
import { addOrder } from '../../../redux/order/order.actions';
import {
  checkoutDefaultProps,
  checkoutFormBtnValue,
  checkoutPropTypes,
  initialValues,
  orderInputData,
  userContactInputLabels,
  userNameInputLabels
} from '../../../utils/checkout';
import { validationSchema } from '../../../validators/chekout';
import { MATERIAL_UI_COLOR, TEXT_FIELD_SIZE, TEXT_FIELD_VARIANT } from '../../../const/material-ui';

const CheckoutForm = ({ language, isLightTheme, currency, cartItems, deliveryType }) => {
  const styles = useStyles({
    isLightTheme
  });

  const dispatch = useDispatch();

  const totalPriceToPay = cartItems.reduce(
    (previousValue, currentValue) => previousValue + calcPriceForCart(currentValue, currency),
    0
  );

  const { values, handleSubmit, handleChange, setFieldValue, touched, errors } = useFormik({
    validationSchema: validationSchema(deliveryType, language),
    initialValues,

    onSubmit: (data) => {
      dispatch(addOrder(orderInputData(data, deliveryType, cartItems, language)));
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
                  <KeyboardBackspaceIcon
                    color={isLightTheme ? MATERIAL_UI_COLOR.PRIMARY : MATERIAL_UI_COLOR.ACTION}
                    className={styles.backBtnLine}
                  />
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
                  error={touched.userComment && !!errors.userComment}
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
                  {`${totalPriceToPay / 100} ${
                    currency === DEFAULT_CURRENCY
                      ? CHECKOUT_TITLES[language].UAH
                      : CHECKOUT_TITLES[language].USD
                  }`}
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
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = checkoutPropTypes;
CheckoutForm.defaultProps = checkoutDefaultProps;

export default CheckoutForm;
