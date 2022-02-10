import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { TextField, InputAdornment } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import DeliveryType from './delivery-type';
import { useStyles } from './checkout-form.styles';
import {
  CY_CODE_ERR,
  deliveryTypes,
  SESSION_STORAGE,
  TEXT_FIELDS,
  TEXT_FIELD_VARIANT
} from '../../../configs';
import Delivery from './delivery';
import routes from '../../../configs/routes';
import { addOrder, addPaymentMethod, getFondyData } from '../../../redux/order/order.actions';
import {
  checkoutDefaultProps,
  checkoutFormBtnValue,
  checkoutPropTypes,
  getCurrentCurrency,
  getThemeColor,
  handleError,
  updateInitialValues,
  stateInitialValues,
  orderInputData,
  userContactInputLabels
} from '../../../utils/checkout';
import { getCurrencySign } from '../../../utils/currency';
import { validationSchema } from '../../../validators/checkout';
import {
  clearSessionStorage,
  getFromSessionStorage,
  setToSessionStorage
} from '../../../services/session-storage.service';
import { checkoutPayMethod } from './const';
import YourOrder from '../../orders/order/your-order';
import { calcPriceForCart } from '../../../utils/priceCalculating';

const { pathToUserAgreement, pathToTerms, pathToCart } = routes;
const userContactLabels = userContactInputLabels();

const CheckoutForm = ({ currency, cartItems, cartOperations }) => {
  const styles = useStyles();
  const currencySign = getCurrencySign(currency);
  const userData = useSelector(({ User }) => User.userData);
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const { clearCart } = cartOperations;
  const dispatch = useDispatch();
  const [deliveryType, setDeliveryType] = useState(
    getFromSessionStorage(SESSION_STORAGE.DELIVERY_TYPE) || deliveryTypes.SELFPICKUP
  );
  const [initialValues, setInitialValues] = useState(stateInitialValues);
  const [pricesFromQuery, setPricesFromQuery] = useState([]);

  const totalPriceToPay = pricesFromQuery.reduce(
    (previousValue, currentValue, index) =>
      previousValue + calcPriceForCart(currentValue, cartItems[index].quantity),
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
      </Link>{' '}
      {t('checkout.checkoutAdditionalInfo.consent.2')}
      <Link className={styles.consentLink} to={pathToTerms} target='_blank' rel='noreferrer'>
        {' '}
        {t('checkout.checkoutAdditionalInfo.consent.3')}{' '}
      </Link>
    </div>
  );

  const { values, handleSubmit, handleChange, setFieldValue, touched, errors } = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchema(deliveryType, t),
    initialValues,

    onSubmit: (data) => {
      if (data.paymentMethod === checkoutPayMethod.card) {
        dispatch(addPaymentMethod(checkoutPayMethod.card));
        dispatch(
          getFondyData({
            order: orderInputData(data, deliveryType, cartItems, language),
            currency: getCurrentCurrency(currency),
            amount: String(totalPriceToPay),
            language
          })
        );
      } else {
        dispatch(addOrder(orderInputData(data, deliveryType, cartItems, language)));
        dispatch(addPaymentMethod(checkoutPayMethod.cash));
      }
      clearSessionStorage();
      clearCart();
    }
  });

  useEffect(() => {
    setToSessionStorage(SESSION_STORAGE.CHECKOUT_FORM, values);
  }, [values]);

  useEffect(() => {
    if (userData) {
      setInitialValues(updateInitialValues(userData, deliveryType));
    }
  }, [userData, deliveryType]);

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
                {userContactLabels.map((field) => (
                  <div key={field.name} className={styles.inputData}>
                    <TextField
                      data-testid={field.name}
                      size={TEXT_FIELDS.SMALL}
                      data-cy={field.name}
                      name={field.name}
                      className={styles.textField}
                      variant={TEXT_FIELD_VARIANT.OUTLINED}
                      label={field.label}
                      value={values[field.name]}
                      onChange={handleChange}
                      error={handleError(touched[field.name], errors[field.name])}
                      InputProps={
                        field.name === 'phoneNumber' && {
                          maxLength: 9,
                          startAdornment: <InputAdornment position='start'>+380</InputAdornment>
                        }
                      }
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
            <DeliveryType
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              deliveryType={deliveryType}
              setDeliveryType={setDeliveryType}
            />
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
                  data-testid='paymentMetod'
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
                  size={TEXT_FIELDS.SMALL}
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
            <YourOrder
              checkoutFormBtnValue={checkoutFormBtnValue}
              consentLink={consentLink}
              t={t}
              currency={currency}
              currencySign={currencySign}
              totalPriceToPay={totalPriceToPay}
              values={values}
              language={language}
              styles={styles}
              deliveryType={deliveryType}
              setPricesFromQuery={setPricesFromQuery}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = checkoutPropTypes;
CheckoutForm.defaultProps = checkoutDefaultProps;

export default CheckoutForm;
