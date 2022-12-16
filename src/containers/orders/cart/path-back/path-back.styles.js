import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  path: {
    marginTop: '48px',
    '@media (max-width: 900px)': { marginTop: '40px' },
    '@media (max-width: 600px)': { marginTop: '32px' },
    '&, & a': {
      fontSize: theme.typography.subtitle1.fontSize,
      '@media (max-width: 900px)': { fontSize: theme.typography.subtitle2.fontSize },
      '@media (max-width: 600px)': { fontSize: theme.typography.body1.fontSize },
      color: theme.palette.textColor,
      fontWeight: theme.typography.body2.fontWeight
    },
    '& span': {
      fontWeight: theme.typography.body1.fontWeight
    },
    '& a:hover': {
      fontWeight: theme.typography.body1.fontWeight,
      transition: '0.5s'
    }
  }
}));
