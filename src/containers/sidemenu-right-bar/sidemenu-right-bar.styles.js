import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    gap: '24px',
    marginTop: fromSideBar ? '8px' : 0,
    width: '100%',
    '@media (max-width: 425px)': {
      gap: '6px'
    }
  }),
  iconItem: {
    '@media (max-width: 425px)': {
      marginRight: '0px'
    }
  },
  flexColumn: {
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
    '@media (max-width: 425px)': {
      gap: '16px'
    }
  },
  wishlist: {
    display: 'flex',
    justifyContent: 'center',
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
    display: 'flex',
    justifyContent: 'center',
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
  togglItem: {
    transform: 'scale(1.3)',
    '@media (max-width: 425px)': {
      transform: 'scale(1.1)'
    }
  }
}));
