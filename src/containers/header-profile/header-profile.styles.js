import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  profile: ({ fromSideBar }) => ({
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    transition: 'background-color 0.5s linear',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: fromSideBar ? '#000' : '#242424',
      '& ul': {
        display: 'block'
      },
      '& > svg': {
        color: '#fff'
      }
    },

    '& svg': {
      position: 'relative',
      top: '5%',
      left: '10%',
      fontSize: '2rem',
      color: fromSideBar ? '#000' : '#fff',
      outline: 'none'
    }
  }),

  list: {
    '& .MuiPaper-root': {
      marginTop: '22px',
      marginLeft: `${window.innerWidth - document.body.clientWidth + 1}px`,
      padding: '8px 0',
      backgroundColor: '#000',
      borderRadius: '0px'
    },
    '& .MuiMenuItem-root': {
      color: '#fff',
      flexDirection: 'row',
      paddingRight: '10px',
      '&:hover': {
        backgroundColor: '#1b1b1b'
      },
      '& svg': {
        margin: '0 16px'
      }
    }
  }
}));
