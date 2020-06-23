import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginBottom: '5rem'
  },
  container: {
    minWidth: '20rem'
  },
  imagesContainer: {
    height: '25rem',
    width: '25rem',
    overflow: 'hidden',
    borderRadius: '5px'
  },
  media: {
    height: '25rem',
    width: '25rem',
    paddingTop: '56.25%',
    transition: '2s',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  ArticleTitle: {
    minHeight: '8rem'
  },
  newsText: {
    textAlign: 'justify',
    maxHeight: '30rem',
    overflow: 'hidden'
  },
  newsFooter: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, auto))',
    gridColumnGap: '10px'
  },
  newsButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    color: 'white',
    marginLeft: '1rem',
    marginBottom: '0.5rem',
    backgroundColor: '#4c4545',
    '&:hover': {
      color: 'black'
    }
  },
  newsAuthorFooter: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));
