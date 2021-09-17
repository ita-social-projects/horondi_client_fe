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
    },
    height: '42px',
    paddingTop: '5px'
  },

  language: {
    '@media (max-width: 450px)': {
      display: 'none'
    },
    height: '42px',
    paddingTop: '5px'
  },

  cart: {
    '@media (max-width: 450px)': {
      display: 'none'
    },
    height: '42px',
    paddingTop: '5px'
  },

  profile: {
    '@media (max-width: 450px)': {
      display: 'none'
    },
    height: '42px',
    paddingTop: '5px'
  }
}));
