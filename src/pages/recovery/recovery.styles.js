import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  emailInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.lightGrayShade
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.blue
      }
    },
    '& .MuiInputBase-input': {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.textColor,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      paddingLeft: '30px'
    },
    '& .MuiInputBase-input:focus': {
      color: theme.palette.lightGrayShade
    },
    '& label': {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      background: 'white',
      paddingRight: '5px',
      transform: 'translate(13, 16) scale(1)'
    },
    '& label.Mui-focused': {
      color: theme.palette.blue
    }
  },
  recoveryText: {
    margin: '10px 0 35px',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'left',
    maxWidth: '400px'
  },
  errorText: {
    margin: '5px 0 15px',
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
