import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#3d3d3d',
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  slider: {
    color: '#4d4d4d'
  },
  checkbox: {
    textTransform: 'capitalize'
  }
}));

export default useStyles;
