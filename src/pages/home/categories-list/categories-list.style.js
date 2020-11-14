import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    scrollSnapAlign: 'start',
    height: '100vh',
    position: 'relative',
    scrollSnapStop: 'normal'
  },
  categoriesContainer: {
    margin: '0 auto'
  },
  carouselContainer: {},
  loadingIndicator: {
    marginTop: '3em'
  },
  title: {
    fontSize: '2em',
    color: theme.palette.textColor
  }
}));
