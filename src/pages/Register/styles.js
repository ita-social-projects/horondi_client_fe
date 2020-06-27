import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import BG from '../../images/1.jpg';

export const useStyles = makeStyles({
  register: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px'
  },
  registerForm: {
    backgroundColor: 'white',
    width: '400px',
    height: '600px',
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
  registerBtn: {
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
  loginBtn: {
    float: 'right',
    fontSize: '14px',
    lineHeight: '17px',
    color: 'black',
    textTransform: 'capitalize',
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
