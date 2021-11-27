import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  registerForm: {
    backgroundColor: palette.backgroundColor,
    width: '100%',
    height: '100%',
    padding: '0 119px 0px 118px',
    boxSizing: 'border-box'
  },
  heading: {
    fontSize: '34px',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    paddingTop: '44px',
    margin: 0,
    color: palette.textColor
  },
  dataInput: {
    marginTop: '24px',
    fontFamily: 'Open Sans',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& div > input': {
      padding: '12px 16px !important',
      position: 'relative',
      width: '419px',
      height: '22px'
    },
    '& p': {
      position: 'relative',
      margin: '3px 16px 0',
      fontSize: '12px'
    },
    '& label.Mui-focused': {
      color: palette.blue
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.blue
      }
    }
  },
  checkbox: {
    padding: '4px 8px 24px 12px'
  },
  consentMessage: {
    fontSize: '12px',
    letterSpacing: '.3px',
    fontWeight: '400px',
    margin: '4px 0 24px',
    fontFamily: 'Open Sans'
  },
  consentLink: {
    color: palette.textColor,
    fontWeight: '400px',
    textDecoration: 'underline',
    '&:hover': {
      color: '#1976D2',
      backgroundColor: 'transparent'
    }
  },
  registerBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '48px',
    height: '44px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase',
    background: palette.textColor,
    color: palette.backgroundColor,
    '&:hover': {
      color: palette.button.normal.backgroundColor
    },
    '&:disabled': {
      color: palette.button.disabled.backgroundColor
    },
    alignItems: 'center'
  },
  loginBtn: {
    float: 'right',
    fontSize: '12px',
    color: palette.textColor,
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
    fontSize: '12px',
    fontFamily: 'Open Sans',
    marginTop: '0px',
    marginBottom: '8px'
  },
  registerError: {
    fontSize: '0.75rem',
    margin: '10px 14px 0px',
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
    position: 'relative'
  },
  afterText: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#F44336'
    }
  }
}));
