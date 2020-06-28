import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    margin: '200px 0'
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    margin: '0 50px 200px'
  },
  loadingIndicator: {
    marginTop: '50px'
  },
  title: {
    marginTop: '200px',
    fontSize: '30px',
    color: theme.palette.textColor
  }
}));
