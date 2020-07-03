import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  header: {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'space-between'
  },
  icons: {
    fontSize: '2rem',
    padding: '0 0.4rem',
    color: '#ffffff'
  }
}));
