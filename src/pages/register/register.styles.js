import { makeStyles } from '@material-ui/core/styles';
import BACKGROUND from '../../images/8.jpg';
import BACKGROUND_REGISTERED_USER from '../../images/4.jpg';

export const useStyles = makeStyles((theme) => ({
  registerContainer: {
    overflowX: 'hidden'
  },
  formContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerBackground: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    background: `url(${BACKGROUND}) no-repeat `,
    backgroundSize: 'cover',
    filter: 'brightness(30%) contrast(90%)'
  },
  formWrapper: {
    alignItems: 'center',
    margin: theme.spacing(1),
    maxWidth: '960px',
    height: '550px',
    filter: 'drop-shadow(8px 8px 10px dark-gray)',
    '& .MuiGrid-item': {
      padding: '0px !important'
    },
    '@media (max-width: 959px)': {
      padding: '0 50px'
    },
    '@media (max-width: 525px)': {
      padding: '0 15px'
    }
  },
  formBackground: {
    height: '100%',
    width: '100%',
    background: `url(${BACKGROUND}) no-repeat `,
    backgroundSize: 'cover',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  formBackgroundRegisteredUser: {
    height: '350px',
    width: '275px',
    background: `url(${BACKGROUND_REGISTERED_USER}) no-repeat `,
    backgroundSize: 'cover',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  registerForm: {
    backgroundColor: theme.palette.backgroundColor,
    width: '100%',
    height: '550px',
    padding: '30px 63px 63px',
    boxSizing: 'border-box'
  },
  registerSucces: {
    backgroundColor: theme.palette.backgroundColor,
    width: '100%',
    height: '350px',
    padding: '30px 63px 63px',
    '& p': {
      textAlign: 'center',
      fontSize: '20px'
    }
  },
  registerSuccesInfo: {
    display: 'flex',
    flexDirection: 'column',
    height: '225px'
  },
  heading: {
    fontSize: '1.5rem',
    lineHeight: '29px',
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0,
    color: theme.palette.textColor
  },
  dataInput: {
    marginBottom: '10px',
    paddingBottom: '15px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& div > input': {
      padding: '11px 14px !important',
      position: 'relative'
    },
    '& p': {
      position: 'absolute',
      top: '40px',
      fontSize: '0.625rem'
    },
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.textColor
      }
    }
  },
  registerBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '10px',
    textTransform: 'capitalize',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      color: theme.palette.button.normal.backgroundColor
    }
  },
  loginBtn: {
    float: 'right',
    fontSize: '0.825rem',
    lineHeight: '17px',
    color: theme.palette.button.disabled.backgroundColor,
    textTransform: 'capitalize',
    textDecoration: 'none',
    marginTop: '3px',
    '&:hover': {
      color: '#1976D2',
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
  },
  googleText: {
    textAlign: 'center',
    padding: '0px',
    margin: '5px'
  },
  registerError: {
    fontSize: '0.75rem',
    margin: '3px 14px 0px',
    textAlign: 'left',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontWeight: '400',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    color: '#f44336',
    wordWrap: 'break-word',
    position: 'absolute',
    top: '42px',
    left: '0px'
  },
  registerGroup: {
    position: 'relative',
    paddingBottom: '22px'
  },
  registerWrapper: {
    width: '100%',
    height: '100%'
  },
  infoLogo: {
    width: '34px',
    height: '34px',
    margin: '0 auto',
    display: 'block',
    marginBottom: '23px'
  },
  notchedOutline: {
    borderColor: theme.palette.textColor
  },
  afterText: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  },
  inputTextColor: {
    color: theme.palette.textColor
  },
  inputLabelColor: {
    color: theme.palette.textColor
  }
}));
