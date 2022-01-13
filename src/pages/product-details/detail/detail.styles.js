import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  description: {
    '& > p': {
      fontSize: '14px'
    },
    textAlign: 'left',
    '@media (max-width: 400px)': {
      padding: '0'
    }
  },
  subtitle: {
    fontWeight: '700',
    alignSelf: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  }
}));
