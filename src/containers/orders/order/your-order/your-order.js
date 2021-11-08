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
        paddingLeft: '20px',
        paddingTop: '30px',
        marginTop: '20px',
        paddingBottom: '30px',
        marginBottom: '20px',
        paddingRight: '20px'
      }}
    >
      <Typography
        margin={20}
        className={styles.checkoutYourOrderTitleData}
        style={{
          fontWeight: 'bold',
          marginTop: '10px',
          marginBottom: '20px'
        }}
        gutterBottom
        variant='h3'
        component='div'
      >
        {t('checkout.checkoutTitles.yourOrderTitle')}
      </Typography>
      <Divider variant='fullWidth' />
      <List gutterBottom>
        {cartItems.map((item) => (
          <ListItem key={item._id} alignItems='center'>
            <div>
              <Typography>x {item.quantity}</Typography>
            </div>
            <img
              className={styles.itemImg}
              src={`${IMG_URL}${item.product.images.primary.thumbnail} `}
              alt='product-img'
            />
            <ListItemText
              primary={`${item.product.name[language].value}`}
              secondary={
                <div>
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
            <Typography style={{ fontWeight: 'bold' }}>
              {item.price[currency].value} <FontAwesomeIcon icon={currencySign} />
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider variant='fullWidth' />
      {isSelfpickup && (
        <>
          <Typography>isSelfpickup Section</Typography>
          <Divider variant='fullWidth' />
        </>
      )}
      <Typography className={styles.checkoutYourOrderTitleData} style={{ margin: '20px 0' }}>
        {t('common.toPay')}:{' '}
        <div>
          {Math.ceil(totalPriceToPay)} <FontAwesomeIcon icon={currencySign} />
        </div>{' '}
      </Typography>
      <Divider variant='fullWidth' />
      <div style={{ margin: '10px' }}>{consentLink}</div>
      <Button
        style={{ marginTop: '20px' }}
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
