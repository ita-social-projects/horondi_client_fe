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
    height: 50,
    width: 270
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
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'space-around'
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

  button: {
    color: palette.button.normal.color,
    backgroundColor: palette.button.normal.backgroundColor,
    '&:hover': {
      color: palette.button.hover.color,
      backgroundColor: palette.button.hover.backgroundColor
    }
  }
}));
