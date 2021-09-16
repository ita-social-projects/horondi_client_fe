import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  profile: ({ fromSideBar, logged }) => ({
    padding: '0 4px',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 20,
    transition: '1s',
    height: '33px',
    width: '50px',
    textAlign: 'center',

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
      color: fromSideBar ? '#000' : '#fff',
      border: 'none',
      outline: 'none'
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
