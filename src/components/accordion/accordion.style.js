import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  accordion: {
    boxShadow: 'none',
    borderBottom: '1px solid #0000001f',
    backgroundColor: 'transparent'
  },

  heading: {
    fontFamily: 'Open Sans',
    letterSpacing: 0.5,
    fontSize: '12px',
    color: theme.palette.textColor,
    fontWeight: '700px',
    '@media (max-width: 450px)': {
      fontSize: theme.spacing(2)
    }
  },
  details: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.palette.textColor,
    '@media (max-width: 450px)': {
      fontSize: theme.spacing(2)
    },
    '& > p ': {
      fontSize: '18px',
      fontFamily: 'Open Sans',
      fontWeight: 400,
      marginTop: '0px'
    }
  }
}));
