import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  emailInput: {
    '& h4': {
      fontSize: '34px',
      lineHeight: '46px'
    },
    '& label': {
      fontWeight: 400,
      fontSize: '16px',
      transform: 'translate(14px, 12px) scale(1)'
    },
    '& div > input': {
      padding: '11px 14px !important',
      position: 'relative',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px'
    },
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.textColor,
        '& legend': {
          fontSize: '11px'
        }
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.black,
        borederWidth: '2px'
      }
    }
  },
  recoveryText: {
    margin: '0 0 24px',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'left',
    maxWidth: '450px'
  },
  errorText: {
    margin: '5px 0 10px 14px',
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
      color: theme.palette.lightGrayShade
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
