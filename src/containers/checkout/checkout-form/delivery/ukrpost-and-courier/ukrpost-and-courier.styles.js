import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%'
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
  addressTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: palette.textColor,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  },
  error: {
    color: '#e60000',
    marginBottom: '2%'
  },
  dataInput: {
    width: 600,
    marginBottom: '1%',
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
  }
}));
