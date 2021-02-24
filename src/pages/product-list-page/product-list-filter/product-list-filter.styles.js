import { makeStyles } from '@material-ui/core';

const drawerWidth = 250;
export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '250px',
    padding: '10px 20px 10px 10px'
  },
  root: {
    color: '#3d3d3d',
    display: 'flex',
    '@media (max-width: 959px)': {
      position: 'fixed',
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    }
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
    fontSize: '0.9em',
    width: '100%',
    margin: '0 0.2rem 1rem'
  },
  filterName: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontSize: '1.2em',
    padding: '0.5em 0',
    color: theme.palette.textColor,
    textTransform: 'uppercase'
  }
}));
