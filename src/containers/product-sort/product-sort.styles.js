import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '.5rem',
    marginRight: '17px',
    display: 'inline-block',
    '& .MuiOutlinedInput-input': {
      height: '25px',
      width: '130px',
      fontSize: '13px',
      padding: '0 .5rem 0 .4rem'
    },
    '& .MuiOutlinedInput-input:focus': {
      borderColor: 'black'
    },
    '& svg': {
      right: '0'
    }
  },
  sortByText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '7px'
  },
  sortDiv: {
    display: 'flex',
    border: '1px solid green',
    alignItems: 'center'
  },
  itemsButton: {
    width: '40px',
    height: '25px'
  },
  '&:active': {
    backgroundColor: 'black',
    color: 'white'
  }
}));

export default useStyles;
