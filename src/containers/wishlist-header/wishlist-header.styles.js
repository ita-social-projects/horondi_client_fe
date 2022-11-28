import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: (fromSideBar) => ({
    width: '40px',
    height: '40px',
    color: '#fff',
    borderRadius: '50%',
    transition: 'background-color 0.5s linear',
    '&:hover': {
      backgroundColor: '#242424'
    },
    '& .MuiBadge-badge': {
      color: '#fff',
      backgroundColor: '#F44336'
    },
    '@media (max-width: 900px)': {
      marginRight: fromSideBar ? '0px' : '10px'
    }
  })
}));
