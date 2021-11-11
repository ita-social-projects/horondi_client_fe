import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  courierContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%'
  },
  inputWrapper: {
    width: '100%',
    marginLeft: '10%'
  },
  error: {
    color: '#e60000',
    marginBottom: '2%'
  },
  textField: {
    width: 600,
    marginBottom: 16,
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    },
    '@media (max-width: 768px)': {
      width: '80%'
    }
  },
  courierTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: palette.textColor,
    marginLeft: '10%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }
}));
