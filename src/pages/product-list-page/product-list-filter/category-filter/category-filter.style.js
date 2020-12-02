import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    '& .MuiOutlinedInput-input': {
      height: '30px',
      fontSize: '0.9em',
      padding: '0 10rem 0 .4rem'
    },
    '& .MuiOutlinedInput-input:focus': {
      borderColor: 'black'
    },
    '& svg': {
      right: '0'
    }
  }
}));
