import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '96px 165px',
    '& .react-multi-carousel-item': {
      maxWidth: '350px'
    },
    '& .react-multi-carousel-item:not(:last-child)': {
      marginRight: '30px'
    },
    '@media (max-width: 768px)': {
      '& .react-multiple-carousel__arrow': {
        width: '40px !important',
        height: '40px !important',
        zIndex: 0
      }
    },
    '& > div': {
      width: '100%'
    },
    '& .react-multi-carousel-list': {
      marginTop: '24px'
    }
  },
  catalogInner: {
    maxWidth: '1110px'
  },
  categoriesContainer: {},
  carouselContainer: {},
  loadingIndicator: {
    marginTop: '3em'
  },
  title: {
    fontSize: '2em',
    color: theme.palette.textColor
  },
  categoryTitle: {
    marginTop: '0px',
    marginBottom: '24px',
    zIndex: '10',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '46px',
    letterSpacing: '0.0025em',
    fontSize: '34px',
    color: theme.palette.textColor
  }
}));
