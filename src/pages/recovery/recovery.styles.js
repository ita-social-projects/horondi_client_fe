import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  emailInput: {
    '& label': {
      fontWeight: 400,
      fontSize: '16px',
      transform: 'translate(14px, 12px) scale(1)'
    },
    '& .MuiOutlinedInput-input': {
      padding: '11px 14px',
      fontWeight: theme.typography.h5.fontWeight,
      fontSize: theme.typography.h5.fontSize
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
    margin: '3px 0 24px',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'left',
    maxWidth: '450px'
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
