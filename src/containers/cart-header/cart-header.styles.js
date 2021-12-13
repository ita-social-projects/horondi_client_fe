import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    color: fromSideBar ? '#000' : '#fff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    transition: 'background-color 0.5s linear',
    '&:hover': {
      backgroundColor: fromSideBar ? '#000' : '#242424',
      color: '#fff'
    },
    '& .MuiBadge-badge': {
      color: '#fff',
      backgroundColor: '#F44336'
    },
    '@media (max-width: 900px)': {
      marginRight: '10px'
    }
  }),
  svg: {
    width: '24px',
    height: '24px'
  }
}));
