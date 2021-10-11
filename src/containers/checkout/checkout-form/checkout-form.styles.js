import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.textColor,
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    width: 600,
    marginBottom: 10,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '89%',
      margin: 0
    }
  },
  paymentSelect: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  title: ({ isLightTheme }) => ({
    fontSize: 23,
    fontWeight: 700,
    color: isLightTheme ? '#1D1C1C' : '#ffffff',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }),
  contactInfoAdditional: {
    fontSize: 13,
    marginLeft: '2%',
    width: 600,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '80%'
    }
  },
  orderCommentTitle: {
    fontSize: 18,
    fontWeight: 400,
    color: '#4E4E4E'
  },
  contactInfoFields: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '80%',
      margin: 0
    }
  },
  contactPaymentInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%'
  },
  checkoutFormContainer: ({ isLightTheme }) => ({
    display: 'flex',
    fontFamily: 'Open Sans',
    color: isLightTheme ? '#242424' : '#FEFEFE',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 10,
    '@media (max-width: 1150px)': {
      flexDirection: 'column'
    }
  }),
  userInfoContainer: {
    width: '60%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  contactInfoWrapper: {
    display: 'flex',
    marginLeft: '10%',
    flexDirection: 'column',
    width: '100%'
  },
  error: {
    color: '#e60000',
    marginLeft: '3%'
  },
  textField: {
    width: 600,
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  textAreaField: {
    width: 600,
    '@media (max-width: 768px)': {
      width: '89%',
      margin: 0
    }
  },
  submitInfo: {
    marginLeft: '6%',
    width: 334,
    '@media (max-width: 768px)': {
      width: '80%',
      marginLeft: '10%'
    }
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 17,
    outline: 'none',
    background: palette.button.normal.backgroundColor,
    borderRadius: '10px',
    width: 280,
    margin: '0px auto 20px',
    height: 43,
    cursor: 'pointer',
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  totalSum: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262',
    margin: '9% 0 7% 0',
    height: 50
  },
  totalSumTitle: ({ isLightTheme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 400,
    color: isLightTheme ? '#363636' : '#fff',
    margin: 0,
    width: '100%',
    height: 20
  }),
  totalSumValue: {
    justifyContent: 'flex-end'
  },
  delivery: {
    width: '100%'
  },
  deliveryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '36%',
    '@media (max-width: 1150px)': {
      width: '100%',
      marginTop: '2%'
    }
  },
  inputData: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10
  },
  checkoutTitleInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '6%',
    width: '100%',
    '@media (max-width: 768px)': {
      marginLeft: '10%',
      width: '89%'
    }
  },
  checkoutTitleInfoData: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  backBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '0 20px 0 0',
    height: '100%',
    width: 48,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.1s'
    }
  },
  checkoutTitle: ({ isLightTheme }) => ({
    fontSize: 30,
    fontWeight: 400,
    textAlign: 'center',
    color: isLightTheme ? '#000000' : '#ffffff',
    width: '100%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  }),
  checkoutYourOrderTitleData: {
    display: 'flex',
    flexDirection: 'column',
    width: 370,
    marginLeft: '6%',
    '@media (max-width: 768px)': {
      width: '89%',
      marginLeft: '10%'
    }
  },
  checkoutTitleLine: {
    width: '90%',
    background: '#636262',
    height: 1,
    marginTop: 15,
    '@media (max-width: 768px)': {
      width: '90%'
    }
  },

  consentMessage: {
    fontSize: 12,
    letterSpacing: '.3px',
    color: '#929292',
    lineHeight: '16px'
  },

  consentLink: {
    color: '#929292',
    textDecoration: 'underline',
    '&:hover': {
      color: '#1976D2',
      backgroundColor: 'transparent'
    }
  }
}));
