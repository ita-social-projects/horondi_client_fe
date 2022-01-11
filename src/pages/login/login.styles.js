import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    overflowX: 'hidden'
  },
  passwordInput: {
    marginBottom: '15px',
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
        borderColor: theme.palette.blue,
        borderWidth: '2px'
      }
    }
  },
  emailInput: {
    marginBottom: '35px',
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
        borderColor: theme.palette.blue,
        borderWidth: '2px'
      }
    }
  },

  loginGroup: {
    position: 'relative'
  },
  loginError: {
    fontSize: '0.75rem',
    textAlign: 'left',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontWeight: '400',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    color: '#f44336',
    wordWrap: 'break-word',
    position: 'absolute',
    top: '33px',
    left: '0px'
  },
  recoveryBtn: {
    marginTop: '10px',
    float: 'right',
    fontSize: '0.875rem',
    color: theme.palette.textColor,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.blue,
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
  },
  recoveryContainer: {
    width: '100%',
    minHeight: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    marginTop: '5px'
  },
  orContainer: {
    width: '100%',
    marginTop: '50px',
    marginBottom: '10px',
    minHeight: '10px',
    display: 'flex'
  },
  orText: {
    margin: '0 auto',
    color: theme.palette.textColor,
    fontSize: '0.875rem'
  },
  registerContainer: {
    width: '100%',
    marginTop: '5px',
    minHeight: '18px'
  },
  registerBtn: {
    float: 'right',
    fontSize: '0.875rem',
    color: theme.palette.textColor,
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.blue,
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    }
  },
  afterText: {
    '& p::after': {
      content: `', example@mail.com'`,
      color: '#828282'
    }
  },
  text: {
    fontSize: '0.875rem',
    color: theme.palette.textColor,
    textDecoration: 'none'
  }
}));
