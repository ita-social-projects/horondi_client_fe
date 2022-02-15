import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  dataInput: {
    marginTop: '24px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& div > input': {
      padding: '11px 14px !important',
      position: 'relative'
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
    fontWeight: '400',
    margin: '4px 0 24px'
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
  }
}));
