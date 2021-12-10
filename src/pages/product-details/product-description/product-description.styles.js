import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  details: {
    padding: '2rem'
  },
  description: {
    width: '50%',
    borderBottom: '1px solid #5B5B5B'
  },
  title: {
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'capitalize'
  },
  text: {
    '& p': {
      fontSize: '14px',
      lineHeight: '19px',
      margin: '0'
    }
  }
}));
