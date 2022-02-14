import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  paths: {
    margin: '60px 0 30px',
    color: palette.textColor,
    display: 'flex',
    justifyContent: 'flex-start',
    '& a': {
      letterSpacing: '0.0025em',
      color: palette.textColor,
      fontWeight: 'normal'
    },
    '& a:hover': {
      fontWeight: 'bold',
      transition: '0.3s'
    }
  }
}));
