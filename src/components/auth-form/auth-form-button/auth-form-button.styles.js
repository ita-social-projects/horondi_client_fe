import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  authBtn: {
    fontFamily: theme.typography.fontFamily,
    background: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    lineHeight: theme.typography.h2.lineHeight,
    height: '50px',
    textTransform: 'uppercase',
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    },
    '&:disabled': {
      color: theme.palette.button.disabled.backgroundColor
    }
  }
}));
