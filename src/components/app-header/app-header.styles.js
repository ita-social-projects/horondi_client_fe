import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    top: '0'
  },
  header: {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'space-between'
  },
  icons: {
    position: 'relative',
    fontSize: '2rem',
    paddingRight: '0.8rem',
    color: '#ffffff'
  }
}));
