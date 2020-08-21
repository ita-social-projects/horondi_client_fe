import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.textColor,
    letterSpacing: '0.1rem',
    transition: 'all 0.3s',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase'
  },
  list: {
    width: 250
  }
}));
