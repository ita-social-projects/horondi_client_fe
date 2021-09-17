import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    maxWidth: 1280,
    margin: '0 auto'
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 20
  },
  loader: {
    margin: '100px auto'
  }
}));
