import { makeStyles } from '@material-ui/core/styles';

const button = {
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase',
  '@media (max-width: 450px)': {
    marginBottom: '12px',
    fontSize: '12px'
  }
};
const promoInput = {
  height: '48px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px'
};
const totalWrapper = {
  display: 'flex',
  gap: '14px',
  flexDirection: 'column',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
  minWidth: '280px'
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative'
  },
  pathBack: {
    position: 'absolute'
  },
  promoInput: {
    '&, &::placeholder': {
      ...promoInput
    }
  },
  promoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    maxWidth: '300px',
    width: '100%',
    '@media (max-width: 900px)': { maxWidth: '320px' }
  },
  discountHeading: {
    ...totalWrapper,
    alignItems: 'left'
  },
  discountInfo: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      marginRight: '5px',
      fontSize: '20px'
    },
    '& span': {
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center'
    }
  },
  discountRemark: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '14px',
    textAlign: 'justify'
  },
  resetDiscountButton: {
    ...button,
    border: '1px solid',
    borderColor: palette.button.normal.borderColor,
    padding: '12px',
    width: '100%',
    '& span': {
      fontWeight: 600
    },
    '@media (max-width: 450px)': {
      fontSize: '12px'
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
    },
    '@media (max-width: 450px)': {
      fontSize: '12px'
    }
  },
  ordersButton: {
    ...button,
    width: '100%',
    padding: '16px 42px',
    background: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
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
    },
    '@media (max-width: 900px)': {
      width: '100%'
    }
  },
  promoAndTotalWrapper: {
    maxWidth: '1200px',
    minHeight: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: '50px',
    paddingBottom: '100px',
    '@media (max-width: 900px)': {
      width: '100%',
      gap: '14px',
      flexDirection: 'column-reverse',
      maxWidth: '320px',
      margin: '0 auto'
    },
    '@media (max-width: 650px)': {
      padding: '16px 0',
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
