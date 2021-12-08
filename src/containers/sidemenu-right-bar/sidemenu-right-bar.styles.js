import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
      color: 'black',
      border: 'none',
      outline: 'none'
    }
  },
  cartHeader: {
    transform: 'scale(1.3)'
  },
  currency: {
    transform: 'scale(1.3)',
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy'
    }
  },
  language: {
    transform: 'scale(1.3)',
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy'
    }
  }
}));
