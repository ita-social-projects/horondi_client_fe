import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  description: {
    fontSize: '14px',
    textAlign: 'left',
    '@media (max-width: 400px)': {
      padding: '0'
    }
  },
  subtitle: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: '14px',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  }
}));
