import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingTop: 30,
    '& *:not(h1), & *:not(h2)': {
      color: `inherit !important`,
      fontSize: '1rem',
      lineHeight: '2rem'
    },
    '& > h1': {
      textAlign: 'center',
      fontSize: '2em'
    },
    '& > h2': {
      textAlign: 'left'
    },
    '& > p': {
      lineHeight: 'initial'
    }
  }
}));
