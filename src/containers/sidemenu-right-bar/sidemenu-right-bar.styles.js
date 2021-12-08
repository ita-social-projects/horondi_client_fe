import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 'auto',
    width: '100%'
  }),
  wishlist: {
    padding: '8px 4px',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 20,
    transition: '1s',
    height: '45px',
    width: '70px',
    textAlign: 'center',
    transform: 'scale(1.0)',
    '&:hover': {
      backgroundColor: 'black',
      '& svg': {
        color: 'white'
      }
    },
    '& svg': {
      position: 'relative',
      zIndex: 5,
      fontSize: '2rem',
      border: 'none',
      outline: 'none',
      color: theme.palette.textColor
    }
  },
  cartHeader: {
    transform: 'scale(1.3)',
    '& svg': {
      color: theme.palette.textColor
    },
    '& svg:hover': {
      color: 'white'
    }
  },
  currency: {
    transform: 'scale(1.3)',
    '& div': {
      color: theme.palette.textColor
    },
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy',
      color: 'white'
    }
  },
  language: {
    transform: 'scale(1.3)',
    '& div': {
      color: theme.palette.textColor
    },
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy',
      color: 'white'
    }
  }
}));
