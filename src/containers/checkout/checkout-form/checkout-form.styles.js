import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  formControl: {
    width: '100%',
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
    }
  },
  paymentSelect: {
    height: 50,
    marginBottom: 10
  },
  title: {
    fontSize: 23,
    fontWeight: 700,
    color: palette.textColor
  },
  contactInfoAdditional: {
    fontSize: 13,
    marginLeft: '2%',
    color: palette.textColor
  },
  orderCommentTitle: {
    fontSize: 18,
    fontWeight: 400,
    color: '#4E4E4E'
  },
  contactInfoFields: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  checkoutFormContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 10,
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  userInfoContainer: {
    width: '540px',
    '@media (max-width: 768px)': {
      width: '100%'
    }
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
    '& .MuiInputAdornment-root.MuiInputAdornment-positionStart': {
      marginRight: '4px'
    },
    width: '100%'
  },
  textAreaField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
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
  inputData: {
    marginBottom: 10,
    width: '100%'
  },
  checkoutTitleInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  backBtn: {
    position: 'absolute',
    top: '40px',
    width: 48,
    color: palette.backspaceIcon.color,
    '@media (max-width: 900px)': { top: '32px' },
    '@media (max-width: 600px)': { top: '24px' },
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.1s'
    }
  },
  checkoutTitleLine: {
    background: '#636262',
    height: 1,
    marginTop: 15
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
      marginBottom: '20px'
    },
    '&.MuiPaper-root': {
      backgroundColor: 'inherit'
    }
  },
  yourOrderList: {
    marginTop: '10px',
    position: 'static',
    height: '150px',
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
    width: '56px',
    height: '56px',
    objectFit: 'cover',
    objectPosition: '55% 50%',
    marginLeft: '10px'
  },
  yourOrderListItem: {
    height: '50%'
  },
  listItemQuantity: {
    marginBottom: '7px'
  },
  yourOrderListItemDescriptionContainer: {
    maxWidth: '184px',
    margin: '0px 0px 10px 10px'
  },
  yourOrderListItemDescriptionPrimary: {
    fontSize: '14px'
  },
  yourOrderListItemDescriptionSecondary: {
    marginTop: '5px',
    fontWeight: 'normal',
    opacity: '75%'
  },
  yourOrderListItemPrice: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0px 0px 40px'
  },
  yourOrderTotalPrice: {
    position: 'static',
    height: '40px',
    width: '312px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    left: '24px',
    flex: 'none',
    order: '3',
    flexGrow: '0',
    margin: '8px 0px',
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
    fontSize: '12px',
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
  },
  totalPrice: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    '& svg': {
      fontSize: '20px'
    }
  },
  priceForItem: {
    '& svg': {
      fontSize: '18px',
      paddingTop: '2px'
    }
  },
  deliveryTitle: {
    fontSize: 23,
    fontWeight: 700,
    color: palette.textColor,
    marginBottom: 15
  },
  tabs: {
    margin: '10px 0 15px 0',
    '& .Mui-selected': {
      backgroundColor: palette.button.normal.backgroundColor,
      color: palette.button.hover.color,
      border: `1px solid ${palette.button.normal.borderColor}`
    },
    '& .MuiTab-textColorInherit': {
      opacity: 1
    }
  },
  tab: {
    color: palette.textColor,
    border: `1px solid ${palette.button.normal.borderColor}`,
    textTransform: 'none',
    fontWeight: 600,

    '@media (max-width: 767px)': {
      fontSize: '14px'
    }
  }
}));
