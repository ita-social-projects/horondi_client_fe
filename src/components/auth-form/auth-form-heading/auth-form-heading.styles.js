import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.textColor,
    fontSize: '38px',
    fontWeight: theme.typography.h2.fontWeight,
    letterSpacing: theme.typography.h2.letterSpacing,
    lineHeight: theme.typography.h2.lineHeight,
    textAlign: 'center',
    margin: '0 0 40px',
    '@media (max-width: 600px)': {
      fontSize: theme.typography.h2.fontSize,
      marginBottom: '32px'
    }
  }
}));
