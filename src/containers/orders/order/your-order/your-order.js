import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Button
} from '@material-ui/core';
import { Loader } from '../../../../components/loader/loader';
import { IMG_URL } from '../../../../configs';
import { useStyles } from '../../cart/filled-cart/filled-cart.styles';

const isSelfpickup = false;

const YourOrder = ({ ...props }) => {
  const btnStyles = useStyles();
  const { cartItems, cartLoading } = useSelector((state) => ({
    cartItems: state.Cart.list,
    cartLoading: state.Cart.loading
  }));
  const {
    currency,
    checkoutFormBtnValue,
    consentLink,
    t,
    currencySign,
    totalPriceToPay,
    values,
    language,
    styles,
    isLightTheme
  } = props;

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <Paper
      style={{
        height: 'max-content',
        width: '360px',
        position: 'fixed',
        padding: '32px 24px',
        marginTop: '20px'
      }}
    >
      <Typography
        margin={20}
        className={styles.checkoutYourOrderTitleData}
        style={{
          fontWeight: 'bold',
          position: 'static',
          left: '24px',
          top: '32px',
          flex: 'none',
          order: '0',
          flexGrow: '0',
          margin: '0px 0px 16px 0px'
        }}
        gutterBottom
        variant='h3'
        component='div'
      >
        {t('checkout.checkoutTitles.yourOrderTitle')}
      </Typography>
      <Divider variant='fullWidth' />
      <List
        style={{
          marginTop: '10px',
          position: 'static',
          height: '136px',
          width: '105%',
          overflowX: 'hidden',
          overflowY: 'scroll'
        }}
        gutterBottom
      >
        {cartItems
          ? cartItems.map((item) => (
            <ListItem
              style={{
                height: '56px'
              }}
              key={item._id}
              alignItems='center'
            >
              <Typography
                style={{
                  position: 'absolute',
                  width: '20px',
                  height: '22px',
                  left: '0px',
                  top: '19px',
                  overflow: 'hidden',
                    // fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  lineHeight: '22px',

                    /* identical to box height, or 157% */

                  letterSpacing: '0.0025em'
                }}
                component='div'
              >
                <div>x {item.quantity}</div>
              </Typography>
              <img
                style={{
                  position: 'absolute',
                  width: '56px',
                  height: '56px',
                  left: '25px',
                  top: '0px'
                }}
                className={styles.itemImg}
                src={`${IMG_URL}${item.product.images.primary.thumbnail} `}
                alt='product-img'
              />
              <ListItemText
                component='div'
                style={{
                  position: 'absolute',

                  height: '53px',
                  left: '93px',
                  top: '1px'
                }}
                primary={
                  <div
                    style={{
                        // position: 'absolute',
                      top: '1px',
                        // fontFamily: 'Open Sans',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '14px',
                      lineHeight: '20px',

                        /* identical to box height, or 143% */

                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.001em'
                    }}
                  >
                    {item.product.name[language].value}
                  </div>
                }
                secondary={
                  <div
                    style={{
                      position: 'absolute',
                      height: '32px',
                      width: 'max-content',
                      top: '23px',
                        // fontFamily: 'Open Sans',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '12px',
                      lineHeight: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                        // alignItems: 'center',
                      letterSpacing: '0.004em'
                    }}
                  >
                    <div>
                      {t('product.productDescription.bottomMaterial')}:{' '}
                      {item.product.bottomMaterial.material.name[language].value}
                    </div>
                    <div>
                      {t('common.size')}: {item.options.size.name}
                    </div>
                  </div>
                }
              />
              <Typography
                style={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '28px',
                  height: '20px',
                  left: '284px',
                  top: '7px',
                    // fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '20px',
                  textAlign: 'right',
                  letterSpacing: '0.001em'
                }}
                component='div'
              >
                <div>{item.price[currency].value}</div>
                <div
                  style={{
                    width: '3px'
                  }}
                >
                  {' '}
                </div>
                <div>
                  <FontAwesomeIcon icon={currencySign} />
                </div>
              </Typography>
            </ListItem>
          ))
          : null}
      </List>
      <Divider variant='fullWidth' />
      {isSelfpickup && (
        <>
          <Typography>isSelfpickup Section</Typography>
          <Divider variant='fullWidth' />
        </>
      )}
      <Typography
        className={styles.checkoutYourOrderTitleData}
        style={{
          position: 'static',
          height: '40px',
          width: '312px',
          justifyContent: 'space-between',
          flexDirection: 'row',
          left: '24px',
          flex: 'none',
          order: '3',
          flexGrow: '0',
          margin: '16px 0px 0px 0px',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '28px',
          letterSpacing: '0.0015em'
        }}
      >
        {t('common.toPay')}:
        <div>
          {Math.ceil(totalPriceToPay)} <FontAwesomeIcon icon={currencySign} />
        </div>{' '}
      </Typography>
      <Divider variant='fullWidth' />
      <div
        style={{
          height: '30px',
          width: '312px',
          marginTop: '10px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '11px',
          lineHeight: '15px',
          letterSpacing: '0.015em'
        }}
      >
        {consentLink}
      </div>
      <Button
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px 48px',
          position: 'static',
          height: '52px',
          width: '312px',
          left: '24px',
          margin: '16px 0px 0px 0px'
        }}
        variant='contained'
        type='submit'
        className={
          isLightTheme ? btnStyles.lightThemeOrdersButton : btnStyles.darkThemeOrdersButton
        }
      >
        {checkoutFormBtnValue(values, language)}
      </Button>
    </Paper>
  );
};

export default YourOrder;
