import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 3rem 2rem 2rem',
    width: '100vw'
  },
  div: {
    display: 'flex',
    border: '1px solid red',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  sortDiv: {
    alignItems: 'center',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    '& Mui-selected': {
      backgroundColor: 'black !important'
    }
  }
}));
export default useStyles;
