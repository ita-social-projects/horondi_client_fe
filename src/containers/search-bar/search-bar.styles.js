import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    height: 61,
    margin: '0 8px',
    '& label.Mui-focused': {
      color: fromSideBar ? 'black' : 'white'
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      borderBottomColor: fromSideBar ? 'black' : 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red'
      },
      '&:hover fieldset': {
        borderColor: 'yellow'
      },
      '&.Mui-focused fieldset': {
        borderColor: fromSideBar ? 'black' : 'white'
      }
    },
    '& .MuiFormLabel-root': {
      color: fromSideBar ? 'rgb(0 0 0 / 54%)' : 'rgb(255 255 255 / 54%)'
    },
    '& .MuiInputBase-input': {
      color: fromSideBar ? 'black' : 'white'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: fromSideBar ? '#353535' : '#dedede'
    }
  })
}));
