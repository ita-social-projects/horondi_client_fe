import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    '& ul': {
      marginTop: 0,
      zIndex: 2,
      backgroundColor: 'white',
      border: '1px solid red',
      width: 'auto',
      position: 'absolute',
      listStyle: 'none',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0',
      '& li': {
        padding: '.5rem 1.2rem',
        '&:hover': {
          backgroundColor: 'black',
          color: 'white'
        }
      }
    }
  },
  icon: {
    border: '1px solid red',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '& .MuiSvgIcon-root': {
      marginTop: '0 !important'
    }
  }
}));
export default useStyles;
