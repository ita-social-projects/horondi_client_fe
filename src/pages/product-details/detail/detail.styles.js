import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  description: {
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

export default useStyles;
