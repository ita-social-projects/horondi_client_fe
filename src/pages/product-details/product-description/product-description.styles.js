import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  details: {
    flex: '0 1 60%',
    paddingTop: '50px'
  },
  description: {
    borderBottom: '1px solid #5B5B5B'
  },
  title: {
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'capitalize'
  },
  text: {
    '& p': {
      display: 'inline',
      fontSize: '14px',
      lineHeight: '19px',
      margin: '0'
    }
  }
}));
