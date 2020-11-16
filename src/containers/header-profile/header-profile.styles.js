import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  profile: ({ fromSideBar }) => ({
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
    '&::after': {
      display: props.logged ? 'block' : 'none',
      content: `''`,
      width: 30,
      height: 30,
      background: 'white',
      position: 'absolute',
      left: '5px',
      top: '1px',
      zIndex: 2,
      borderRadius: '50%'
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
