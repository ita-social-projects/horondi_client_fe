import { makeStyles } from '@material-ui/core/styles';

const title = {
  padding: '15px 0',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '32px'
};

export const useStyles = makeStyles((theme) => ({
  similarItems: {
    textAlign: 'center',
    paddingTop: '70px',
    '@media (max-width: 600px)': {
      paddingTop: '10px'
    }
  },
  carousel: {
    marginTop: '2rem',
    marginBottom: theme.spacing(4),
    paddingBottom: '25px'
  },
  title: {
    ...title
  },
  price: {
    display: 'flex',
    whiteSpace: 'nowrap',
    paddingTop: '2px',
    '& span': {
      paddingTop: '2px'
    }
  }
}));
