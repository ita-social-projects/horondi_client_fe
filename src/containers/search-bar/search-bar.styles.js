import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    height: 61,
    margin: '0 8px',
    display: fromSideBar ? 'none' : 'inline',
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
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
    },
    '& .MuiFormLabel-root': {
      color: 'rgb(255 255 255 / 54%)'
    },
    '& .MuiInputBase-input': {
      color: 'white'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#dedede'
    }
  })
}));
