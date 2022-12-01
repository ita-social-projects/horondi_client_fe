import { makeStyles } from '@material-ui/core/styles';

const button = {
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase'
};
const promoInput = {
  height: '48px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  '@media (max-width: 425px)': {
    fontSize: '12px'
  }
};
const totalWrapper = {
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px'
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 650px)': { position: 'relative' }
  },
  promoInput: {
    '&, &::placeholder': {
      ...promoInput,
      border: `1px solid ${palette.cart.borderColor}`
    }
  },
  textField: {
    width: '75%'
  },
  promoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '& >div': {
      display: 'flex',
      gap: '8px'
    }
  },
  promoButton: {
    ...button,
    background: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,
    padding: '20px',
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  },
  shoppingButton: {
    ...button,
    border: '1px solid',
    borderColor: palette.button.normal.borderColor,
    padding: '12px',
    width: '100%',
    '& span': {
      fontWeight: 600
    }
  },
  ordersButton: {
    ...button,
    width: '100%',
    padding: '16px 42px',
    background: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,
    marginBottom: '20px',
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    },
    '@media (max-width: 900px)': {
      padding: '14px 90px'
    },
    '@media (max-width: 450px)': {
      padding: '14px 65px'
    }
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
    color: palette.textColor,
    '& a': {
      width: '100%'
    }
  },
  promoAndTotalWrapper: {
    maxWidth: '1200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: '50px',
    paddingBottom: '100px',
    '@media (max-width: 900px)': {
      width: '100%',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '@media (max-width: 650px)': {
      paddingTop: '12px',
      paddingBottom: '48px',
      position: 'sticky',
      bottom: 0,
      background: palette.backgroundColor,
      boxShadow: `0px -10px 10px -5px ${palette.divider}`
    }
  },
  totalPrice: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& svg': {
      marginRight: '5px',
      fontSize: '20px'
    },
    '& >div': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  orderTable: {
    flexGrow: 1,
    '@media (max-width: 813px)': {
      marginRight: 'initial'
    }
  }
}));
