import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Montserrat',
    width: '90%',
    marginBottom: '5rem'
  },
  Link: {
    textDecoration: 'none'
  },
  container: {
    minWidth: '20rem',
    maxWidth: '27rem'
  },
  imagesContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
    maxHeight: '20rem',
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
      backgroundColor: 'black'
    }
  },
  newsAuthorFooter: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));
