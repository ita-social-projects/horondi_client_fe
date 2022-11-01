import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.textColor,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    letterSpacing: theme.typography.h2.letterSpacing,
    lineHeight: theme.typography.h2.lineHeight,
    textAlign: 'center',
    marginTop: 0
  }
}));
