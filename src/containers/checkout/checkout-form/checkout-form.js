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
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeliveryType from '../delivery-type/delivery-type';
import { useStyles } from './checkout-form.styles';
import { CY_CODE_ERR, SESSION_STORAGE } from '../../../configs';
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
import { validationSchema } from '../../../validators/checkout';
import { TEXT_FIELD_SIZE, TEXT_FIELD_VARIANT } from '../../../const/material-ui';
import {
  clearSessionStorage,
  getFromSessionStorage,
  setToSessionStorage
} from '../../../services/session-storage.service';
import { checkoutPayMethod } from './const';

const { pathToUserAgreement, pathToCart } = routes;

const CheckoutForm = ({ currency, cartItems, deliveryType }) => {
  const styles = useStyles();
  const currencySign = getCurrencySign(currency);
  const userData = useSelector(({ User }) => User.userData);
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const dispatch = useDispatch();
  const totalPriceToPay = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + calcPriceForCart(currentValue, currency, currentValue.quantity),
    0
  );
  const consentLink = (
    <div className={styles.consentMessage}>
      {' '}
      {t('checkout.checkoutAdditionalInfo.consent.0')}
      <Link
        className={styles.consentLink}
        to={pathToUserAgreement}
        target='_blank'
        rel='noreferrer'
      >
        {' '}
        {t('checkout.checkoutAdditionalInfo.consent.1')}{' '}
      </Link>
    </div>
  );

  const { dirty, values, handleSubmit, handleChange, setFieldValue, touched, errors, resetForm } =
    useFormik({
      validationSchema: validationSchema(deliveryType, t),
      initialValues,

      onSubmit: (data) => {
        data.paymentMethod === checkoutPayMethod.card
          ? dispatch(addPaymentMethod(checkoutPayMethod.card)) &&
            dispatch(
              getFondyData({
                order: orderInputData(data, deliveryType, cartItems, language),
                currency: getCurrentCurrency(currency),
                amount: String(totalPriceToPay),
                language
              })
            )
          : dispatch(addOrder(orderInputData(data, deliveryType, cartItems, language))) &&
            dispatch(addPaymentMethod(checkoutPayMethod.cash));
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

  useEffect(() => {
    resetForm({
      values: {
        ...values,
        courierOffice: '',
        city: '',
        street: '',
        flat: '',
        region: '',
        district: '',
        regionId: '',
        districtId: '',
        cityId: ''
      }
    });
  }, [deliveryType]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.root}>
        <Grid item className={styles.checkoutFormContainer}>
          <div className={styles.checkoutTitleInfo}>
            <div className={styles.checkoutTitleInfoData}>
              <Link to={pathToCart} className={styles.backBtn}>
                <KeyboardBackspaceIcon color={getThemeColor()} className={styles.backBtnLine} />
              </Link>
            </div>
            <h2 className={styles.checkoutTitle}>{t('checkout.checkoutTitles.checkoutTitle')}</h2>
            <div className={styles.checkoutTitleLine} />
          </div>
          <Grid item className={styles.userInfoContainer}>
            <div className={styles.contactInfoWrapper}>
              <h3 className={styles.title}>{t('checkout.checkoutTitles.contactInfo')}</h3>
              <div className={styles.contactInfoFields}>
                {userNameInputLabels(language).map((field) => (
                  <div key={field.name} className={styles.inputData}>
                    <TextField
                      size={TEXT_FIELD_SIZE.SMALL}
                      data-cy={field.name}
                      name={field.name}
                      className={styles.textField}
                      variant={TEXT_FIELD_VARIANT.OUTLINED}
                      label={field.label}
                      value={values[field.name]}
                      onChange={handleChange}
                      error={touched[field.name] && !!errors[field.name]}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <div data-cy={CY_CODE_ERR} className={styles.error}>
                        {t(errors[field.name])}
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
                      data-cy={field.name}
                      name={field.name}
                      className={styles.textField}
                      variant={TEXT_FIELD_VARIANT.OUTLINED}
                      label={field.label}
                      value={values[field.name]}
                      onChange={handleChange}
                      error={handleError(touched[field.name], errors[field.name])}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <div data-cy={CY_CODE_ERR} className={styles.error}>
                        {t(errors[field.name])}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <DeliveryType />
            <Delivery
              deliveryType={deliveryType}
              language={language}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
            <div className={styles.contactPaymentInfo}>
              <h2 className={styles.title}>{t('checkout.checkoutTitles.payment')}</h2>
              <FormControl
                error={touched.paymentMethod && !!errors.paymentMethod}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                className={styles.formControl}
              >
                <InputLabel variant={TEXT_FIELD_VARIANT.OUTLINED}>
                  {t('checkout.checkoutTextFields.paymentMethod')}
                </InputLabel>
                <Select
                  label={t('checkout.checkoutTextFields.paymentMethod')}
                  className={styles.paymentSelect}
                  data-cy='paymentMethod'
                  name='paymentMethod'
                  value={values.paymentMethod}
                  onChange={handleChange}
                >
                  {Object.values(checkoutPayMethod).map((value) => (
                    <MenuItem key={value} value={value}>
                      {t(`checkout.checkoutPayment.${value}`)}
                    </MenuItem>
                  ))}
                </Select>
                {touched.paymentMethod && errors.paymentMethod && (
                  <div data-cy={CY_CODE_ERR} className={styles.error}>
                    {t(errors.paymentMethod)}
                  </div>
                )}
              </FormControl>
            </div>
            <div className={styles.contactPaymentInfo}>
              <h2 className={styles.title}>{t('checkout.checkoutTitles.orderComment')}</h2>
              <div>
                <TextField
                  size={TEXT_FIELD_SIZE.SMALL}
                  data-cy='userComment'
                  name='userComment'
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
                    {t(errors.userComment)}
                  </div>
                )}
              </div>
              <p className={styles.contactInfoAdditional}>
                {t('checkout.checkoutAdditionalInfo.additionalInfo')}
              </p>
            </div>
          </Grid>
          <Grid item className={styles.deliveryContainer}>
            <div className={styles.checkoutYourOrderTitleData}>
              <h2 className={styles.title}>{t('checkout.checkoutTitles.yourOrderTitle')}</h2>
              <div className={styles.checkoutTitleLine} />
            </div>
            <div className={styles.submitInfo}>
              <div className={styles.totalSum}>
                <h4 className={styles.totalSumTitle}>{t('common.toPay')}</h4>
                <p className={`${styles.totalSumTitle} ${styles.totalSumValue}`}>
                  {Math.round(totalPriceToPay)}
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
