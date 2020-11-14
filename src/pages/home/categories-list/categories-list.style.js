import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    scrollSnapAlign: 'start',
    height: '100vh',
    marginTop: 50,
    position: 'relative',
    scrollSnapStop: 'normal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      height: '100%',
      width: '100%'
    },
    '& .react-multi-carousel-list': {
      height: '100%'
    }
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
