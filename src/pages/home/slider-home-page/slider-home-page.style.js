import { makeStyles } from '@material-ui/core/styles';

export const sliderHome = makeStyles((theme) => ({
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
    margin: '0 auto',
    width: '1200px',
    backgroundColor: '#3d3d3d'
  }
}));
