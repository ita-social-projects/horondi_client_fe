import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/8.jpg';

export const useStyles = makeStyles((theme) => ({
  registerContainer:{
    overflowX:'hidden',
  },
  formContainer:{
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  registerBackground:{
    height:'100vh',
    width:'100%',
    position:'absolute',
    zIndex:-1,
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    filter:'brightness(30%) contrast(90%)'
  },
  formWrapper:{
    margin:theme.spacing(1),
    maxWidth:'960px',
    height: '550px',
    filter:'drop-shadow(8px 8px 10px dark-gray)',
    '& .MuiGrid-item': {
      padding: '0px !important'
    },
    '@media (max-width: 959px)': {
      padding:'0 50px'
    },
    '@media (max-width: 525px)': {
      padding:'0 15px'
    }
  },
  formBackground:{
    height: '100%',
    width: '100%',
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  registerForm: {
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
    fontSize: '1rem',
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
    width: '30px',
    height: '30px',
    margin: '0 auto',
    display: 'block',
    marginBottom: '23px'
  },
  successText: {
    color: theme.palette.textColor,
    margin: 0
  },
  successWrapper: {
    display: 'flex',
    flexDirection: 'column'
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
