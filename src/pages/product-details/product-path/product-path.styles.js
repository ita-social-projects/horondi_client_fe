import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paths: {
    marginTop: '48px',
    marginBottom: '30px',
    '@media (max-width: 900px)': { marginTop: '40px', marginBottom: '24px' },
    '@media (max-width: 600px)': { marginTop: '32px', marginBottom: '18px' },
    '& span': {
      fontWeight: theme.typography.body1.fontWeight
    },
    '&, & a': {
      fontSize: theme.typography.subtitle1.fontSize,
      color: theme.palette.textColor,
      fontWeight: theme.typography.body2.fontWeight,
      '@media (max-width: 900px)': { fontSize: theme.typography.subtitle2.fontSize },
      '@media (max-width: 600px)': { fontSize: theme.typography.body1.fontSize }
    },
    '& a:hover': {
      fontWeight: theme.typography.body1.fontWeight,
      transition: '0.3s'
    }
  }
}));
