import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem'
  },
  div: {
    display: 'flex',
    border: '1px solid red',
    alignItems: 'center',
    padding: '1rem',
    justifyContent: 'center'
  },
  sortDiv: {
    alignItems: 'center',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));
export default useStyles;
