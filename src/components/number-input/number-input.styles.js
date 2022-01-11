import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    display: 'flex',
    justifyContent: 'center',
    '& input::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '& input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '& input[type=number]': {
      MozAppearance: 'textfield'
    }
  },
  button: {
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      minWidth: 40
    }
  },
  inputQuantity: {
    width: '30px',
    textAlign: 'center'
  },
  inputText: {
    textAlign: 'center'
  }
}));
