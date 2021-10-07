import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  courierContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%'
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginLeft: '10%'
  },
  error: {
    color: '#e60000',
    marginBottom: '2%'
  },
  textField: {
    width: 600,
    marginBottom: '3%',
    '@media (max-width: 768px)': {
      width: '80%'
    }
  },
  courierTitle: ({ isLightTheme }) => ({
    fontWeight: 700,
    fontSize: 23,
    color: isLightTheme ? '#1D1C1C' : '#ffffff',
    marginLeft: '10%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  })
}));
