import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    color: fromSideBar ? '#000' : '#fff',
    borderRadius: 0,
    height: 32,
    '&:hover': {
      backgroundColor: fromSideBar ? '#000' : '#fff',
      color: fromSideBar ? '#fff' : '#000'
    }
  }),
  cartIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '45px'
  }
}));
