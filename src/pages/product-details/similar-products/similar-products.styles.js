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
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '70px'
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
