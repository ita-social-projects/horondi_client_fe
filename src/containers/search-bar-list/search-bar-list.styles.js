import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  searchBarList: {
    width: '450px',
    height: 'fit-content',
    maxHeight: '436px',
    minHeight: '110px',
    overflowY: 'auto',
    position: 'absolute',
    top: 54,
    right: 0,
    backgroundColor: 'white',
    boxShadow: 'rgb(197 197 197) 0px 5px 10px',
    zIndex: 10000,
    '&::-webkit-scrollbar': {
      width: '8px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.2)',
      borderRadius: '3px'
    },
    '@media (max-width: 1000px)': { top: 50 },
    '@media (max-width: 768px)': {
      top: 94
    },
    '@media (max-width: 500px)': {
      width: '100%',
      maxHeight: '400px',
      minHeight: '100px'
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
