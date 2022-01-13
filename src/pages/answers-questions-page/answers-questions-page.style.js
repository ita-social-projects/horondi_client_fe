import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    '& li': {
      fontSize: '17px',
      fontFamily: 'Open Sans',
      fontWeight: 400,
      letterSpacing: 0.5,
      lineHeight: '30px'
    },

    '& > h1': {
      textAlign: 'center',
      transform: 'scale(1, 1.1)',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '59px',
      lineHeight: '46px',
      letterSpacing: '0.0025em',
      marginTop: '80px'
    },
    '& hr': {
      color: '#242424'
    }
  }
}));
