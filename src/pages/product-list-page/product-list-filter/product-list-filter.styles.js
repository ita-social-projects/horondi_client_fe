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
    textTransform: 'capitalize',
    marginLeft: '0.1rem'
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
  },
  search: {
    margin: '0.55rem 0'
  },
  controls: {
    display: 'inline'
  },
  button: {
    width: '8rem',
    margin: '0 0.2rem 1rem'
  },
  filterName: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '0.5em 0'
  }
}));

export default useStyles;
