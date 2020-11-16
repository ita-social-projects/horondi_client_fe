import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  profile: ({ fromSideBar, logged }) => ({
    padding: '0 4px',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 20,
    '&:hover': {
      backgroundColor: fromSideBar ? '#000' : '#fff',
      '& ul': {
        display: 'block'
      },
      '& > svg': {
        color: fromSideBar ? '#fff' : '#000'
      }
    },
    '& svg': {
      position: 'relative',
      zIndex: 5,
      fontSize: '2rem',
      color: fromSideBar ? '#000' : '#fff'
    }
  }),
  list: {
    '& .MuiMenuItem-root': {
      flexDirection: 'row',
      padding: 10,
      '& svg': {
        marginRight: '5px'
      }
    }
  }
}));
