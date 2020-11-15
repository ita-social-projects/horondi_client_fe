import { makeStyles } from '@material-ui/core/styles';

export const defaultStyles = {
  root: {
    height: 61,
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red'
      },
      '&:hover fieldset': {
        borderColor: 'yellow'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    }
  }
};

export const useStyles = makeStyles((theme) => ({
  searchBar: {
    margin: '0 8px'
  }
}));
