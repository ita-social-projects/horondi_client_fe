import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/2.jpg';
import GoogleLogo from '../../images/google.png';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '18px'
  },
  login: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px'
  },
  loginWrapper: {
    width: '100%',
    height: '100%'
  },
  loginForm: {
    backgroundColor: theme.palette.backgroundColor,
    width: '400px',
    height: '500px',
    padding: '33px 47px 63px 53px',
    boxSizing: 'border-box',
    float: 'right',
    marginTop: '141px',
    marginRight: '53px'
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
    fontSize: '1rem',
    lineHeight: '20px',
    height: '42px',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
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
  googleBtn: {
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
  googleLogo: {
    background: `url(${GoogleLogo}) no-repeat `,
    backgroundSize: 'cover',
    width: '22px',
    height: '22px',
    marginRight: '10px'
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
      content: `'example@mail.com'`,
      color: '#828282'
    }
  },
  text: {
    fontSize: '0.875rem',
    color: theme.palette.textColor,
    textDecoration: 'none'
  }
}));
