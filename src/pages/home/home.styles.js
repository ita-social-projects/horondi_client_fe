import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  home: {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.backgroundColor,
    textAlign: 'center'
  },
  homeHeader: {
    position: 'relative',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'normal',
    height: 'calc(100vh - 50px)'
  }
}));
