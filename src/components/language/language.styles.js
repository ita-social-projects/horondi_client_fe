import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '1.2rem',
    padding: 0,
    minWidth: 20
  },
  selectEmpty: {
    marginTop: 0,
    minWidth: '20px'
  },
  icons: {
    position: 'relative',
    fontSize: '2rem',
    paddingRight: '0.8rem',
    color: '#ffffff'
  }
}));
export default useStyles;
