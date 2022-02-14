import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles((theme) => ({
  app: {
    overflowY: 'scroll'
  },
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  },
  body: {
    backgroundColor: '#fff'
  },
  mainBar: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  rootApp: {
    width: '95vw',
    margin: '0 auto',
    color: theme.palette.textColor
  },
  containerApp: {
    maxWidth: 1100,
    margin: '0 auto'
  }
}));
