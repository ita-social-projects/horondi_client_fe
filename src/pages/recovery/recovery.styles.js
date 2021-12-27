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
        borderColor: theme.palette.textColor
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

  helperEmail: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  }
}));
