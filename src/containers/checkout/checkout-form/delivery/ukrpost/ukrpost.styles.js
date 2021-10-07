import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
  ukrPostTitle: ({ isLightTheme }) => ({
    fontWeight: 700,
    fontSize: 23,
    color: isLightTheme ? '#1D1C1C' : '#ffffff',
    marginLeft: '10%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }),
  dataInput: {
    width: '60%',
    marginBottom: '3%',
    '@media (max-width: 768px)': {
      width: '100%'
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
