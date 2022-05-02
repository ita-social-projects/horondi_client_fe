import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  authBtn: {
    border: '1px solid black',
    borderRadius: '0px',
    textTransform: 'uppercase',
    background: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    },
    '&:disabled': {
      color: theme.palette.button.disabled.backgroundColor
    }
  }
}));
