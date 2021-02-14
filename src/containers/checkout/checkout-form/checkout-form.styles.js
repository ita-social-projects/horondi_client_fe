import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.textColor,
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    width: 250,
    marginLeft: '2%',
    marginBottom: '3%'
  },
  paymentSelect: {
    height: 50
  },
  contactInfoTitle: ({ isLightTheme }) => ({
    fontSize: 18,
    fontWeight: 400,
    color: isLightTheme ? '#4E4E4E' : '#fffff',
    width: '40%',
    marginLeft: '2%'
  }),
  paymentTitle: {
    marginTop: '3%'
  },
  contactInfoAdditional: {
    fontSize: 13,
    marginLeft: '2%'
  },
  orderCommentTitle: {
    fontSize: 18,
    fontWeight: 400,
    color: '#4E4E4E'
  },
  contactInfoFields: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
  },
  a: {
    margin: 0
  },
  contactPaymentInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1%'
  },
  checkoutFormContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  userInfoContainer: {
    width: '60%'
  },
  contactInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start'
  },
  error: {
    color: '#e60000',
    marginLeft: '5px'
  },
  textField: {
    width: 300,
    margin: 10
  },
  textAreaField: {
    width: 500,
    marginLeft: '2%'
  },

  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 19,
    background: palette.button.normal.backgroundColor,
    borderRadius: '10px',
    width: 300,
    height: 50,
    cursor: 'pointer',
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  }
}));
