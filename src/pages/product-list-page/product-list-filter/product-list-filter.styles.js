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
    marginLeft: '160px',
    width: 28,
    height: 16,
    padding: 0,
    transform: 'scale(1.5)',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)'
      }
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200
      })
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box'
    }
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
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '14px 0',
    background: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '&:disabled': {
      backgroundColor: 'rgba(2, 2, 2, 0.2)'
    }
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
