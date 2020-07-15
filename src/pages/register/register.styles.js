import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/1.jpg';

// export const lightTheme = createMuiTheme({
//   registerForm: {
//     backgroundColor: 'white'
//   },
//   heading: {
//     color: 'black'
//   },
//   registerBtn: {
//     color: 'white',
//     backgroundColor: '#404040',
//     registerHoverColor: 'black'
//   },
//   loginBtn: {
//     color: 'black'
//   },
//   disabledRegister: {
//     color: '#c2c2c2',
//     backgroundColor: '#999999'
//   },
//   notchedOutline: {
//     borderColor: 'black !important'
//   },
//   inputTextColor: {
//     color: 'black'
//   },
//   inputLabelColor: {
//     color: 'black'
//   },
//   successText: {
//     color: 'black'
//   }
// });
//
// export const darkTheme = createMuiTheme({
//   registerForm: {
//     backgroundColor: '#353333'
//   },
//   heading: {
//     color: 'white'
//   },
//   registerBtn: {
//     color: 'black',
//     backgroundColor: '#cccccc',
//     registerHoverColor: 'white'
//   },
//   loginBtn: {
//     color: 'white'
//   },
//   disabledRegister: {
//     color: '#505050',
//     backgroundColor: '#868585'
//   },
//   notchedOutline: {
//     borderColor: 'white !important'
//   },
//   inputTextColor: {
//     color: 'white'
//   },
//   inputLabelColor: {
//     color: 'white'
//   },
//   successText: {
//     color: 'white'
//   }
// });

export const useStyles = makeStyles((theme) => ({
  register: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px'
  },
  registerForm: {
    backgroundColor: theme.palette.backgroundColor,
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
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0,
    color: theme.palette.textColor
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
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    height: '42px',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  loginBtn: {
    float: 'right',
    fontSize: '14px',
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
    color: theme.palette.textColor
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
