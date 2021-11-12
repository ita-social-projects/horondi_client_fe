import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
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
    '&:hover': {
      '& .MuiInput-underline:after, & .MuiInput-underline:before': {
        borderBottomColor: palette.black
      }
    }
  }
}));
