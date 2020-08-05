import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh'
  },
  error: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%'
  },
  errorImage: {
    width: '80%',
    height: '80%'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h2': {
      margin: '15px 20px',
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '1.2em'
      }
    }
  }
}));
