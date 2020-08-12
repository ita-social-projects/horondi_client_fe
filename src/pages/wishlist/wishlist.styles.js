import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 20px'
  },
  button: {
    color: theme.palette.button.normal.color,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  }
}));
