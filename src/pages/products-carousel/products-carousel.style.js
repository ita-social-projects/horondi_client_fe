import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    '@media(min-width: 720px)': {
      padding: '0rem 10rem 3rem 10rem'
    }
  },
  caption: {
    color: '#fff',
    fontSize: '1rem'
  },
  captionBlock: {
    width: '100%',
    backgroundColor: '#3d3d3d',
    position: 'absolute',
    textAlign: 'center',
    opacity: '0.7',
    top: '0'
  }
}));
