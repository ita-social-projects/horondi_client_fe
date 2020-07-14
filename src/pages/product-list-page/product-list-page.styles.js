import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  div: {
    display: 'flex',
    border: '1px solid red',

    padding: '1rem',
    justifyContent: 'center'
  }
}));
export default useStyles;
