import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  imageContainer: {
    maxWidth: '500px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      margin: '15px 0'
    }
  },
  constructorWrapper: {
    padding: '20px'
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
