import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    marginRight: '.8rem',
    '& button': {
      padding: '0 !important',
      minWidth: 0,
      marginRight: 0
    },
    '& ul': {
      left: '0',
      transition: '.3s in-ease-out',
      marginTop: 0,
      zIndex: 2,
      backgroundColor: 'white',
      color: 'black',
      width: 'auto',
      position: 'absolute',
      listStyle: 'none',
      textAlign: 'center',
      display: 'none',
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
    },
    '&:hover': {
      color: 'black',
      backgroundColor: 'white',

      '& ul': {
        display: 'flex'
      },
      '& button': {
        '& span': {
          padding: 0,
          margin: 0,
          '& svg': {
            color: 'black !important'
          }
        }
      }
    }
  },
  icon: {
    outline: 'none',
    padding: '0 !important',
    margin: '0 !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '& .MuiSvgIcon-root': {
      marginTop: '0 !important',
      color: 'white',
      fontSize: '2rem'
    }
  },
  list: {
    '& li': {
      padding: '.3rem !important'
    }
  }
}));
export default useStyles;
