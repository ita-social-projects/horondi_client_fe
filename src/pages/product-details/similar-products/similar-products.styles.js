import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  similarItems: {
    textAlign: 'center',
    '@media (max-width: 900px)': {
      paddingTop: '32px'
    },
    '@media (max-width: 600px)': {
      paddingTop: '16px'
    }
  },
  emptySimilarItems: { height: '180px' },
  carousel: {
    marginTop: '2rem',
    marginBottom: theme.spacing(4),
    paddingBottom: '25px',
    paddingTop: '15px'
  },
  title: {
    fontSize: theme.typography.h3.fontSize,
    '@media (max-width: 600px)': {
      fontSize: theme.typography.h4.fontSize
    }
  },
  price: {
    display: 'flex',
    whiteSpace: 'nowrap',
    '& span': {
      paddingTop: '2px'
    }
  }
}));
