import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    maxWidth: 1280,
    margin: '0 auto'
  },
  loader: {
    margin: '100px auto'
  }
}));
