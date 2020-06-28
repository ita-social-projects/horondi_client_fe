import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    margin: '10em 0'
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    margin: '0 2em 3em'
  },
  loadingIndicator: {
    marginTop: '3em'
  },
  title: {
    fontSize: '2em',
    color: theme.palette.textColor
  }
}));
