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
    width: '100%',
    padding: '25px 20px',
    position: 'absolute',
    left: '0',
    bottom: '0',
    backgroundColor: 'rgba(36, 36, 36, 0.8)',
    '& p': {
      fontSize: '14px',
      lineHeight: '1.4',
      margin: '0',
      color: theme.palette.white
    }
  },
  carousel: {
    marginBottom: '100px'
  }
}));
