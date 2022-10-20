import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  authBtn: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    width: '450px',
    height: '50px',
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
