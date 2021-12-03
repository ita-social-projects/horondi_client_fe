import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,

    '& > h1': {
      textAlign: 'center',
      transform: 'scale(1, 1.1)',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '59px',
      lineHeight: '46px',
      letterSpacing: '0.0025em'
    },
    '& hr': {
      color: '#242424'
    }
  },
  accordion: {
    boxShadow: 'none',
    borderBottom: '1px solid #0000001f',
    backgroundColor: 'transparent',
    paddingBottom: '10px',
    paddingTop: '10px'
  },

  heading: {
    fontSize: '19px',
    color: theme.palette.textColor,
    fontWeight: 'bold',
    '@media (max-width: 450px)': {
      fontSize: theme.spacing(2)
    }
  },
  details: {
    fontWeight: 400,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.palette.textColor,
    '@media (max-width: 450px)': {
      fontSize: theme.spacing(2)
    },
    '& > p': {
      fontSize: '16px'
    }
  }
}));
