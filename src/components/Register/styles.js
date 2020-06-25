import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import BG from '../../images/1.jpg';

export const useStyles = makeStyles({
  register: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
    left: '0px',
    top: '0px'
  },
  registerForm: {
    backgroundColor: 'white',
    width: '400px',
    height: '600px',
    position: 'absolute',
    right: '53px',
    top: '141px',
    padding: '33px 47px 63px 53px',
    boxSizing: 'border-box'
  },
  heading: {
    fontSize: '24px',
    lineHeight: '29px',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0
  },
  dataInput: {
    marginBottom: '10px',
    color: 'black',
    paddingBottom: '22.5px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    }
  },
  inputSize: {
    height: '41px'
  },
  registerBtn: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    height: '42px',
    backgroundColor: '#404040',
    color: 'white',
    textTransform: 'capitalize',
    marginBottom: '23px',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  disabledRegisterBtn: {
    backgroundColor: '#999999',
    marginBottom: '23px',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    height: '42px'
  },
  loginBtn: {
    float: 'right',
    fontSize: '14px',
    lineHeight: '17px',
    color: 'black',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#1976D2',
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
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
