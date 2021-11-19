import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  profile: ({ fromSideBar }) => ({
    padding: '0 4px',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 20,
    transition: '1s',
    height: '33px',
    width: '50px',
    textAlign: 'center',

    '&:hover': {
      backgroundColor: fromSideBar ? palette.black : palette.white,
      '& ul': {
        display: 'block'
      },
      '& > svg': {
        color: fromSideBar ? palette.white : palette.black
      }
    },

    '& svg': {
      position: 'relative',
      zIndex: 5,
      fontSize: '2rem',
      color: fromSideBar ? palette.black : palette.white,
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
