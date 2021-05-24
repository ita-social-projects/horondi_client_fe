import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    marginTop: fromSideBar ? 'auto' : 0
  }),
  currency: {
    '@media (max-width: 450px)': {
      display: 'none'
    }
  },
  language: {
    '@media (max-width: 450px)': {
      display: 'none'
    }
  }
}));
