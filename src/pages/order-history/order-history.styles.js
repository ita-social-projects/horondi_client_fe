import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  mainTitle: {
    textAlign: 'center',
    fontSize: 39,
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 72,
    '@media screen and (max-width:768px)': {
      fontSize: '28px'
    }
  },
  loader: {
    margin: '100px auto'
  }
}));
