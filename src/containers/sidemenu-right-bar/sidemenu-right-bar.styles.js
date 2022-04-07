import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: fromSideBar ? '14px' : 0,
    width: '100%'
  }),
  iconItem: {
    marginRight: '40px',
    '@media (max-width: 425px)': {
      marginRight: '0px'
    }
  },
  wishlist: {
    transform: 'scale(1.3)',
    '@media (max-width: 425px)': {
      transform: 'scale(1.1)'
    },
    '& svg': {
      color: theme.palette.textColor
    },
    '& svg:hover': {
      color: 'white'
    }
  },
  cartHeader: {
    transform: 'scale(1.3)',
    '@media (max-width: 425px)': {
      transform: 'scale(1.1)'
    },
    '& svg': {
      color: theme.palette.textColor
    },
    '& svg:hover': {
      color: 'white'
    }
  },
  currency: {
    transform: 'scale(1.3)'
  },
  language: {
    transform: 'scale(1.3)'
  }
}));
