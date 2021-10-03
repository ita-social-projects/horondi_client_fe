import { makeStyles } from '@material-ui/core/styles';

const button = {
  width: '131px',
  height: '48px',
  borderRadius: '4px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase'
};
const lightThemeButtonHover = {
  '&:hover': {
    backgroundColor: '#3F3F3F'
  }
};
const darkThemeButtonHover = {
  '&:hover': {
    backgroundColor: '#020202',
    color: '#FEFEFE'
  }
};
const promoInput = {
  width: '221px',
  height: '48px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.005em',
  textAlign: 'center',
  border: '1px solid rgba(91, 91, 91, 0.2)'
};
const totalWrapper = {
  width: '255px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
  letterSpacing: '0.0015em'
};

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  lightThemePromoInput: {
    '&, &::placeholder': {
      ...promoInput,
      color: 'rgba(36, 36, 36, 0.75)'
    }
  },
  darkThemePromoInput: {
    ...promoInput,
    color: '#FEFEFE'
  },
  promoWrapper: {
    display: 'flex',
    width: '360px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lightThemePromoButton: {
    ...button,
    background: '#020202',
    color: '#FEFEFE',
    ...lightThemeButtonHover
  },
  darkThemePromoButton: {
    ...button,
    background: '#FFFFFF',
    color: '#242424',
    ...darkThemeButtonHover
  },
  lightThemeShoppingButton: {
    ...button,
    width: '298px',
    height: '44px',
    border: '1px solid #020202',
    marginTop: '18px',
    background: '#FEFEFE',
    color: '#242424',
    ...darkThemeButtonHover
  },
  darkThemeShoppingButton: {
    ...button,
    width: '298px',
    height: '44px',
    border: '1px solid #FEFEFE',
    marginTop: '18px',
    background: '#242424',
    color: '#FEFEFE',
    ...darkThemeButtonHover
  },
  lightThemeOrdersButton: {
    ...button,
    width: '255px',
    height: '52px',
    background: '#020202',
    color: '#FEFEFE',
    marginBottom: '20px',
    ...lightThemeButtonHover
  },
  darkThemeOrdersButton: {
    ...button,
    width: '255px',
    height: '52px',
    background: '#FFFFFF',
    color: '#242424',
    marginBottom: '20px',
    ...darkThemeButtonHover
  },
  orderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media (max-width: 813px)': {
      flexDirection: 'column'
    }
  },
  lightThemeTotalWrapper: {
    ...totalWrapper,
    color: '#242424'
  },
  darkThemeTotalWrapper: {
    ...totalWrapper,
    color: '#FEFEFE'
  },
  similarProductsWrapper: {
    textAlign: 'center'
  },
  promoAndTotalWrapper: {
    maxWidth: '1200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '100px'
  },
  totalPrice: {
    marginBottom: '20px'
  },
  orderTable: {
    flexGrow: 1,
    marginRight: 50,
    '@media (max-width: 813px)': {
      marginRight: 'initial'
    }
  }
}));
