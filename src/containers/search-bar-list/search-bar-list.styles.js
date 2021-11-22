import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  searchBarList: {
    width: 450,
    height: 'fit-content',
    maxHeight: '100vh',
    minHeight: '150px',
    overflowY: 'auto',
    position: 'absolute',
    top: 64,
    right: 0,
    backgroundColor: 'white',
    zIndex: 10000
  },
  emptyList: {
    position: 'absolute',
    left: '50%',
    color: 'black',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));
