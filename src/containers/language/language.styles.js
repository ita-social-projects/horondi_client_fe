import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    '@media (max-width: 768px)': {
      display: 'block'
    },
    '& > div > div': {
      fontSize: '19px !important',
      fontWeight: '500',
      '&:hover': {
        position: 'static'
      }
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      borderBottomColor: '#0000 !important'
    }
  }
}));
