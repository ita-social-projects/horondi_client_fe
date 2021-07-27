import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/2.jpg';

export const useStyles = makeStyles((theme) => ({
  container: {
    overflowX: 'hidden'
  },
  wrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    height: '100vh',
    width: '100%',
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    filter: 'brightness(30%) contrast(90%)',
    position: 'absolute',
    zIndex: -1
  },
  formWrapper: {
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
  fonWrapper: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  loginForm: {
    backgroundColor: theme.palette.backgroundColor,
    width: '100%',
    height: '550px',
    padding: '80px 63px 63px',
    boxSizing: 'border-box'
  },
  heading: {
    fontSize: '1.5rem',
    lineHeight: '29px',
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0,
    textTransform: 'capitalize',
    color: theme.palette.textColor
  },
  passwordInput: {
    marginBottom: '16px',
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
      fontSize: '0.625rem',
      marginLeft: '12px'
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
  emailInput: {
    marginBottom: '29px',
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
      fontSize: '0.625rem',
      marginLeft: '12px'
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
  loginBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '20px',
    textTransform: 'capitalize',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      color: theme.palette.button.normal.backgroundColor
    }
  },
  loginGroup: {
    position: 'relative',
    paddingBottom: '19px',
    paddingTop: '8px'
  },
  loginError: {
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
    top: '50px',
    left: '0px'
  },
  recoveryBtn: {
    float: 'right',
    fontSize: '0.875rem',
    color: theme.palette.button.disabled.backgroundColor,
    textDecoration: 'none',
    '&:hover': {
      color: '#1976D2',
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
  },
  recoveryContainer: {
    width: '100%',
    minHeight: '18px'
  },
  orContainer: {
    width: '100%',
    minHeight: '10px',
    marginBottom: '10px'
  },
  orText: {
    display: 'table',
    margin: '0 auto',
    color: '#636363',
    fontSize: '0.875rem'
  },
  registerContainer: {
    width: '100%',
    minHeight: '18px'
  },
  registerBtn: {
    float: 'right',
    fontSize: '0.875rem',
    color: theme.palette.textColor,
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#1976D2',
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
  },
  afterText: {
    '& p::after': {
      content: `' example@mail.com'`,
      color: '#828282'
    }
  },
  text: {
    fontSize: '0.875rem',
    color: theme.palette.textColor,
    textDecoration: 'none'
  }
}));
