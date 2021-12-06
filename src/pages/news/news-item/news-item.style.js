import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Montserrat',
    boxShadow: 'none',
    borderRadius: '0px',
    background: 'none'
  },
  Link: {
    textDecoration: 'none'
  },
  container: {
    maxWidth: '350px',
    padding: '20px 0px 50px 0px'
  },
  newsDateAutor: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    lineHeight: '20px',
    padding: '15px 0px',
    fontWeight: '400'
  },
  imagesContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '324px',
    width: '100%',
    overflow: 'hidden'
  },
  media: {
    backgroundPosition: 'bottom',
    height: '324px',
    transition: '2s',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  newsItemContent: {
    padding: '0px',
    height: '200px'
  },
  ArticleTitleContainer: {
    padding: '0px',
    height: '100px'
  },
  ArticleTitle: {
    fontWeight: '600',
    letterSpacing: '-0.7px',
    fontSize: '20px',
    lineHeight: '28px'
  },
  newsText: {
    textAlign: 'justify',
    lineHeight: '1.5rem',
    margin: '0px',
    '& p': {
      lineHeight: '1.5rem'
    }
  },

  newsFooter: {
    display: 'block',
    padding: '25px 0px 0px 0px'
  },
  newsButton: {
    height: '44px',
    display: 'block',
    width: '100%',
    padding: '0px',
    textDecoration: 'none',
    color: '#020202',
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderRadius: '0px',
    border: '1px solid #020202',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '0.4px'
  },
  newsAuthorFooter: {
    display: 'block'
  },
  authorName: {
    padding: 0
  }
}));
