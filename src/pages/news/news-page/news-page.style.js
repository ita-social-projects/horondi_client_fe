import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  newsTitle: {
    textAlign: 'center',
    height: '205px',
    margin: '0px',
    padding: '0px',
    lineHeight: '225px',
    fontSize: '59px',
    fontWeight: '300',
    letterSpacing: '-2px'
  },
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
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  }
}));
