import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootLanguage: {
    '& div': {
      padding: '0 !important'
    },

    '& svg': {
      display: 'none'
    }
  },
  rootSelect: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    textAlign: 'center',
    width: '60px',
    height: '33px',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    border: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
    '& li': {
      height: '33px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      width: '11rem !important'
    }
  }
}));
export default useStyles;
