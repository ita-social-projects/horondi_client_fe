import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  accordion: {
    boxShadow: 'none',
    borderBottom: '1px solid',
    backgroundColor: 'transparent',
    '&::before': {
      borderBottom: '1px solid'
    },
    '&:last-child': {
      borderBottom: '1px solid'
    }
  },

  heading: {
    '& h1': {
      fontStyle: 'normal',
      lineHeight: '32px',
      fontFamily: 'Open Sans',
      letterSpacing: 0.5,
      fontSize: '24px',
      color: theme.palette.textColor,
      fontWeight: 'bold',
      '@media (max-width: 450px)': {
        fontSize: theme.spacing(2)
      }
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
