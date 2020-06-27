import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  catalog: {},
  categories: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    margin: '0 50px 200px'
  },
  loadingIndicator: {
    margin: 200
  },
  title: {
    marginTop: '200px',
    fontSize: '30px'
  }
}));
