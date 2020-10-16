import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    margin: '10em 0'
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
