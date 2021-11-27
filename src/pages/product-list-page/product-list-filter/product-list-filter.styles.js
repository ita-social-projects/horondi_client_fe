import { makeStyles } from '@material-ui/core';

const drawerWidth = 250;

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '283px',
    padding: '10px 20px 10px 8px'
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
  priceRange: {
    marginTop: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  priceRangeInput: {
    marginLeft: '15px',
    '& input': {
      width: '44px',
      fontSize: '14px',
      padding: '9px .5rem'
    }
  },
  slider: {
    color: '#4d4d4d',
    padding: '60px 0'
  },
  popular: {
    borderTop: '1px solid gray',
    padding: '25px 0',
    margin: '0'
  },
  popularSwitch: {
    marginLeft: '90px'
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
    marginBottom: '13px',
    padding: '14px 0',
    backgroundColor: theme.palette.textColor,
    color: theme.palette.button.hover.color,
    fontSize: '14px'
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
