import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: 'none',
    backgroundColor: theme.palette.backgroundColor
  },
  media: {
    position: 'relative',
    height: '500px',
    width: '350px',
    margin: '0 auto'
  },
  content: {
    padding: '25px 20px',
    position: 'absolute',
    left: '0',
    bottom: '0',
    backgroundColor: 'rgba(36, 36, 36, 0.8)',
    '& p': {
      color: theme.palette.white
    }
  },
  carousel: {
    marginBottom: '100px'
  }
}));
