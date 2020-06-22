import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginBottom: '5rem'
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
    paddingTop: '56.25%', // 16:9
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
    display: 'flex',
    justifyContent: 'center'
  }
}));
