import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import BG from '../../images/1.jpg';

export const lightTheme = createMuiTheme({
  registerForm: {
    backgroundColor: 'white'
  },
  heading: {
    color: 'black'
  },
  registerBtn: {
    color: 'white',
    backgroundColor: '#404040',
    registerHoverColor: 'black'
  },
  loginBtn: {
    color: 'black'
  },
  disabledRegister: {
    color: '#c2c2c2',
    backgroundColor: '#999999'
  },
  notchedOutline: {
    borderColor: 'black !important'
  },
  inputTextColor: {
    color: 'black'
  },
  inputLabelColor: {
    color: 'black'
  },
  successText: {
    color: 'black'
  }
});

export const darkTheme = createMuiTheme({
  registerForm: {
    backgroundColor: '#353333'
  },
  heading: {
    color: 'white'
  },
  registerBtn: {
    color: 'black',
    backgroundColor: '#cccccc',
    registerHoverColor: 'white'
  },
  loginBtn: {
    color: 'white'
  },
  disabledRegister: {
    color: '#505050',
    backgroundColor: '#868585'
  },
  notchedOutline: {
    borderColor: 'white !important'
  },
  inputTextColor: {
    color: 'white'
  },
  inputLabelColor: {
    color: 'white'
  },
  successText: {
    color: 'white'
  }
});

export const createRegisterStyles = (theme) =>
  makeStyles({
    register: {
      background: `url(${BG}) no-repeat `,
      backgroundSize: 'cover',
      height: '1000px'
    },
    registerForm: {
      backgroundColor: theme.registerForm.backgroundColor,
      width: '400px',
      minHeight: '200px',
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
      color: theme.heading.color
    },
    dataInput: {
      marginBottom: '10px',
      paddingBottom: '22.5px',
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
        fontSize: '10px'
      }
    },
    registerBtn: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      lineHeight: '20px',
      height: '42px',
      backgroundColor: theme.registerBtn.backgroundColor,
      color: theme.registerBtn.color,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.registerBtn.registerHoverColor
      }
    },
    loginBtn: {
      float: 'right',
      fontSize: '14px',
      lineHeight: '17px',
      color: theme.loginBtn.color,
      textTransform: 'capitalize',
      textDecoration: 'none',
      marginTop: '3px',
      '&:hover': {
        color: '#1976D2',
        textDecoration: 'underline',
        backgroundColor: 'transparent'
      }
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
    disabledRegister: {
      backgroundColor: '#999999',
      color: '#c2c2c2',
      fontFamily: 'Montserrat',
      fontSize: '16px',
      lineHeight: '20px',
      height: '42px',
      textTransform: 'capitalize'
    },
    infoLogo: {
      width: '30px',
      height: '30px',
      margin: '0 auto',
      display: 'block',
      marginBottom: '23px'
    },
    successText: {
      width: '250px',
      color: theme.successText.color
    },
    notchedOutline: {
      borderColor: theme.notchedOutline.borderColor
    }
  });

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#c92121'
    }
  }
});
