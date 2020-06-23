import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  newsTitle: {
    textAlign: 'center'
  },
  NewsPageItem: {
    marginTop: '5rem',
    width: '87%',
    margin: '5rem auto',
    marginRight: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, auto))',
    gridColumnGap: '10px'
  }
}));
