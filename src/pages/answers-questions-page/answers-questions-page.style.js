import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    '& li': {
      fontSize: '17px',
      fontFamily: 'Open Sans',
      fontWeight: 400,
      letterSpacing: 0.5,
      lineHeight: '30px'
    }
  }
}));
