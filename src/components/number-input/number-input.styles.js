import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  root: {
    '& .MuiOutlinedInput-root': {
      fontSize: '18px',
      fontWeight: 400,
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: palette.text.secondary },
      '@media (max-width: 425px)': {
        fontSize: '16px'
      }
    },
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
    },
    '& input': {
      padding: '18.5px 8px'
    }
  },
  button: {
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      minWidth: '40px'
    },
    '&.MuiButton-root': {
      minWidth: 0
    }
  }
}));
