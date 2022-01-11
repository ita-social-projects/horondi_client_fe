import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  title: {
    '& h2': {
      fontSize: '1.3rem'
    }
  }
}));
