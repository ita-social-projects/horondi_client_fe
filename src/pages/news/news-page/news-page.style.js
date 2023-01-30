import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  NewsPageItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '15px',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      display: 'flex',
      flexWrap: 'wrap'
    }
  },
  newsItems: {
    marginBottom: '80px',
    '@media (max-width: 600px)': {
      marginBottom: '30px'
    }
  }
}));
