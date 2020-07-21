import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    display: 'flex',
    '& > span': {
      margin: '0 5px'
    }
  },
  button: {
    cursor: 'pointer'
  }
}));
