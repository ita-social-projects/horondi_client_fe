import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootSelect: {
    width: '36px',
    height: '33px',
    appearance: 'none',
    fontFamily: 'Ropa Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '19px',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    border: 'none',

    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  languageOption: {
    backgroundColor: theme.palette.primary,
    width: '36px',
    textAlign: 'center',
    padding: '3rem'
  }
}));
export default useStyles;
