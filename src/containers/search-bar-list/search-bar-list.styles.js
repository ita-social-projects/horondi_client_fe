import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  searchBarList: {
    width: '100%',
    height: 'fit-content',
    maxHeight: '100vh',
    minHeight: '150px',
    overflowY: 'auto',
    position: 'absolute',
    top: 96,
    right: 0,
    backgroundColor: 'white',
    zIndex: 10000,
    '@media (min-width: 555px)': {
      top: 52,
      width: '450px'
    }
  },
  emptyList: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    fontSize: 15
  }
}));
