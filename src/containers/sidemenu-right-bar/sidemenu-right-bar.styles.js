import { makeStyles } from '@material-ui/core/styles';

const root = {
  display: 'flex',
  marginLeft: 'auto',
  alignItems: 'center',
  gap: '24px',
  width: '100%'
};

export const useStyles = makeStyles((theme) => ({
  topIcons: ({ fromSideBar }) => ({
    ...root,
    marginTop: fromSideBar ? '8px' : 0
  }),
  bottomIcons: ({ fromSideBar }) => ({
    ...root,
    marginTop: fromSideBar ? '8px' : 0,
    '@media (max-width: 425px)': {
      gap: '6px',
      marginBottom: fromSideBar ? '20px' : 0
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
  wishListAndCartIcon: {
    display: 'flex',
    justifyContent: 'center',
    transform: 'scale(1.1)',
    '@media (max-width: 425px)': {
      transform: 'scale(1)'
    },
    '& svg': {
      color: theme.palette.textColor
    },
    '& svg:hover': {
      color: 'white'
    }
  },
  togglItem: {
    transform: 'scale(1.1)',
    '@media (max-width: 425px)': {
      transform: 'scale(1)'
    }
  }
}));
