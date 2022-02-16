import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: fromSideBar ? 'auto' : 0,
    padding: 0
  }),
  wishlist: {
    marginRight: '37px',
    '@media (max-width: 450px)': {
      display: 'none'
    },
    '@media (max-width: 480px)': {
      marginRight: '0'
    }
  },
  cart: {
    marginRight: '37px',
    '@media (max-width: 480px)': {
      marginRight: '0'
    }
  }
}));
