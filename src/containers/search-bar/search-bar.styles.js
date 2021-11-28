import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: (fromNavBar) => ({
    height: fromNavBar && 61,
    display: 'inline',
    '@media (max-width: 768px)': {
      height: '70px'
    },
    '& label.Mui-focused': {
      color: 'white',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      borderBottomColor: 'white',
      transition: 'all 0.5s linear'
    },
    '& .MuiFormLabel-root': {
      fontSize: !fromNavBar && '14px',
      color: 'rgb(255 255 255 / 54%)',
      '@media (max-width: 768px)': {
        marginTop: '2px'
      }
    },
    '& .MuiInputBase-input': {
      color: 'white',
      padding: !fromNavBar && '10px 51px 10px 0'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#dedede',
      transition: 'all 0.5s linear'
    }
  }),
  sticky: {
    '& label.Mui-focused': {
      display: 'none'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#0000 !important'
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      borderBottomColor: '#0000 !important'
    }
  }
}));
