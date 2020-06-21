import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  newsTitle: {
    color: 'blue',
    textAlign: 'center'
  },
  NewsPageItem: {
    marginTop: '5rem',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justify: 'space-between'
  }
}));
