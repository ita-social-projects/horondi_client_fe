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
  }
}));
