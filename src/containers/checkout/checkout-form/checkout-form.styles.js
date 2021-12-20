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
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    },
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
  title: {
    fontSize: 23,
    fontWeight: 700,
    color: palette.textColor,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  },
  contactInfoAdditional: {
    fontSize: 13,
    marginLeft: '2%',
    width: 600,
    color: palette.textColor,
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
  checkoutFormContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 10,
    '@media (max-width: 1150px)': {
      flexDirection: 'column'
    }
  },
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
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    },
    width: 600,
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  textAreaField: {
    width: 600,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    },
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
  totalSumTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 400,
    color: palette.textColor,
    margin: 0,
    width: '100%',
    height: 20
  },
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
    marginTop: '25px',
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
  checkoutTitle: {
    fontSize: 30,
    fontWeight: 400,
    textAlign: 'center',
    color: palette.textColor,
    width: '100%',
    '@media (max-width: 768px)': {
      width: '100%'
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
    color: palette.textColor,
    lineHeight: '16px'
  },

  consentLink: {
    color: palette.textColor,
    textDecoration: 'underline',
    '&:hover': {
      color: '#1976D2',
      backgroundColor: 'transparent'
    }
  },
  yourOrderContainer: {
    height: 'max-content',
    width: '360px',
    position: 'sticky',
    top: '60px',
    padding: '32px 24px',
    marginTop: '20px',
    '@media (max-width: 1150px)': {
      position: 'inherit',
      marginLeft: '60px',
      marginBottom: '20px'
    },
    '&.MuiPaper-root': {
      backgroundColor: 'inherit'
    }
  },
  yourOrderList: {
    marginTop: '10px',
    position: 'static',
    height: '136px',
    width: '105%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    scrollBehavour: 'smooth',
    '&::-webkit-scrollbar': {
      width: '0px'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '10px'
    }
  },
  yourOrderListImg: {
    position: 'absolute',
    width: '56px',
    height: '56px',
    left: '25px',
    top: '0px'
  },
  yourOrderListItem: {
    height: '56px'
  },
  yourOrderListItemDescriptionContainer: {
    position: 'absolute',
    height: '53px',
    left: '93px',
    top: '1px'
  },
  yourOrderListItemDescriptionPrimary: {
    top: '1px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.001em'
  },
  yourOrderListItemDescriptionSecondary: {
    position: 'absolute',
    height: '32px',
    width: 'max-content',
    top: '23px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: '0.004em',
    opacity: '75%'
  },
  yourOrderListItemPrice: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '28px',
    height: '20px',
    left: '284px',
    top: '7px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'right',
    letterSpacing: '0.001em'
  },
  yourOrderTotalPrice: {
    position: 'static',
    height: '40px',
    width: '312px',
    display: 'flex',
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
  },
  yourOrderConsentLink: {
    height: '30px',
    width: '312px',
    marginTop: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '15px',
    letterSpacing: '0.015em'
  },
  yourOrderButton: {
    color: palette.button.normal.color,
    fontWeight: 600,
    backgroundColor: palette.button.normal.backgroundColor,
    '&:hover': {
      color: palette.button.hover.color,
      backgroundColor: palette.button.hover.backgroundColor
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 48px',
    position: 'static',
    height: '52px',
    width: '312px',
    left: '24px',
    margin: '24px 0px 0px 0px'
  }
}));
