import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import BG from '../../images/2.jpg';
import GoogleLogo from '../../images/google.png';

export const useStyles = makeStyles((theme) => ({
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
    backgroundColor: 'white',
    width: '400px',
    height: '500px',
    padding: '33px 47px 63px 53px',
    boxSizing: 'border-box',
    float: 'right',
    marginTop: '141px',
    marginRight: '53px'
  },
  heading: {
    fontSize: '24px',
    lineHeight: '29px',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0,
    textTransform: 'capitalize'
  },
  passwordInput: {
    marginBottom: '11px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    }
  },
  emailInput: {
    marginBottom: '29px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    }
  },
  loginBtn: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    height: '42px',
    backgroundColor: '#404040',
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'black'
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
    fontSize: '14px',
    color: 'black',
    textTransform: 'capitalize',
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
    fontFamily: 'Montserrat',
    fontSize: '14px'
  },
  googleBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '10px',
    textTransform: 'capitalize',
    fontSize: '16px',
    fontFamily: 'Montserrat'
  },
  googleLogo: {
    background: `url(${GoogleLogo}) no-repeat `,
    backgroundSize: 'cover',
    width: '22px',
    height: '22px',
    marginRight: '10px'
  },
  registrContainer: {
    width: '100%',
    minHeight: '18px'
  },
  registrBtn: {
    float: 'right',
    fontSize: '14px',
    color: 'black',
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#1976D2',
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
  },
  disabledLogin: {
    backgroundColor: '#999999',
    color: '#c2c2c2',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    height: '42px',
    textTransform: 'capitalize'
  }
}));

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#949494'
    }
  }
});
