import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1280,
    margin: '50px auto',
    display: 'flex',
    flexFlow: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
    height: '100vh',
    position: 'relative',
    scrollSnapStop: 'normal'
  }
}));
