import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    marginTop: 'auto'
  }),
  wishlist: {
    padding: '0 4px',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 20,
    transition: '1s',
    height: '33px',
    width: '50px',
    textAlign: 'center',
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
  currency: {
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy'
    }
  },
  language: {
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy'
    }
  }
}));
