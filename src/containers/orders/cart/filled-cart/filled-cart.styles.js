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
    backgroundColor: '#3F3F3F',
    color: '#FEFEFE'
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
  padding: 10
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
  letterSpacing: '0.0015em',
  '@media (max-width: 850px)': {
    marginTop: '20px'
  }
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  promoInput: {
    '&, &::placeholder': {
      ...promoInput,
      border: `1px solid ${palette.cart.borderColor}`
    }
  },
  promoWrapper: {
    display: 'flex',
    width: '360px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  promoButton: {
    ...button,
    background: palette.textColor,
    color: palette.backgroundColor,
    '&:hover': palette.type === 'light' ? lightThemeButtonHover : darkThemeButtonHover
  },
  shoppingButton: {
    ...button,
    width: '298px',
    height: '44px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: palette.textColor,
    marginTop: '18px',
    background: palette.backgroundColor,
    color: palette.textColor,
    '&:hover': palette.type === 'light' ? lightThemeButtonHover : darkThemeButtonHover
  },
  ordersButton: {
    ...button,
    width: '255px',
    height: '52px',
    background: palette.textColor,
    color: palette.backgroundColor,
    marginBottom: '20px',
    '&:hover': palette.type === 'light' ? lightThemeButtonHover : darkThemeButtonHover
  },
  orderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media (max-width: 813px)': {
      flexDirection: 'column'
    }
  },
  totalWrapper: {
    ...totalWrapper,
    color: palette.textColor
  },
  promoAndTotalWrapper: {
    maxWidth: '1200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '100px',
    '@media (max-width: 850px)': {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
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
