import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '.5rem',
    display: 'inline-block',
    '& .MuiSelect-select': {
      borderRadius: '5px !important',
      outline: '1px solid red'
    },
    '& .MuiInputBase-input': {
      border: 'none'
    }
  },
  sortByText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '7px'
  }
}));

export default useStyles;
