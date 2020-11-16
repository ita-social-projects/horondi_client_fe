import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  searchBarList: {
    width: 450,
    height: 'fit-content',
    maxHeight: '600px',
    overflowY: 'auto',
    position: 'absolute',
    top: 64,
    right: 0,
    backgroundColor: 'white',
    zIndex: 10
  }
}));
