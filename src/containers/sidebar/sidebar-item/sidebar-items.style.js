import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.textColor,
    letterSpacing: '0.1rem',
    transition: 'all 0.3s',
    fontFamily: 'Montserrat',
    padding: '30px',
    backgroundColor: '#DBDBDB',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '10px',
    borderRadius: '10px',
    height: '80px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#7F7F7F'
    }
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
