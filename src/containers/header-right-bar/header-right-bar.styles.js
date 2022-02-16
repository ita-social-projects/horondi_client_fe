import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 'auto',
    padding: 0
  }),
  wishlist: {
    '@media (max-width: 480px)': {
      marginRight: '0'
    }
  },
  cart: {
    '@media (max-width: 480px)': {
      marginRight: '0'
    }
  }
}));
