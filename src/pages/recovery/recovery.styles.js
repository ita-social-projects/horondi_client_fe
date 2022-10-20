import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  emailInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#828282'
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.blue
      }
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Open Sans',
      color: theme.palette.textColor,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      paddingLeft: '30px'
    },
    '& .MuiInputBase-input:focus': {
      color: '#828282'
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
    fonFamily: 'Open Sans',
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
      color: '#828282 !important'
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
