import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  ukrPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '2%'
  },
  error: {
    color: '#e60000',
    marginTop: 15
  },
  ukrPostTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: palette.textColor,
    marginLeft: '10%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
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
  },
  selectorInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '2%',
    marginLeft: '10%'
  }
}));
