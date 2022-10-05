import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  emailInput: {
    marginBottom: '21px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& div > input': {
      padding: '11px 14px !important',
      position: 'relative'
    },
    '& p': {
      position: 'absolute',
      top: '40px'
    },
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.black,
        borederWidth: '2px'
      }
    }
  },
  recoveryText: {
    margin: '5px 0 15px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.75rem',
    lineHeight: '15px',
    textAlign: 'left',
    maxWidth: '400px'
  },
  errorText: {
    marginTop: '-20px',
    height: 'fit-content',
    lineHeight: '12px',
    minHeight: '12px',
    fontSize: '12px',
    color: theme.palette.error.main,
    '@media (max-width: 600px)': {
      minHeight: '24px'
    }
  },
  helperEmail: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  },
  successText: {
    lineHeight: '24px',
    maxWidth: '400px'
  },
  heading: {
    fontSize: '28px'
  }
}));
