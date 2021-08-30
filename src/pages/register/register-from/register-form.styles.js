import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  registerForm: {
    backgroundColor: theme.palette.backgroundColor,
    width: '100%',
    height: '550px',
    padding: '20px 63px 40px',
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
    marginBottom: '5px',
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
  consentMessage: {
    fontSize: 12,
    letterSpacing: '.3px',
    color: '#929292',
    lineHeight: '16px',
    'text-align': 'center'
  },

  consentLink: {
    color: '#929292',
    textDecoration: 'underline',
    '&:hover': {
      color: '#1976D2',
      backgroundColor: 'transparent'
    }
  },

  registerBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '10px',
    marginTop: '10px',
    textTransform: 'capitalize',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      color: theme.palette.button.normal.backgroundColor
    },
    alignItems: 'center'
  },
  loginBtn: {
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
  afterText: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  }
}));
