import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    width: '95%',
    margin: '15px auto',
    boxSizing: 'border-box',
    justifyContent: 'center',
    '@media (max-width:768px)': {
      gridTemplateColumns: 'repeat(2,1fr)'
    },
    '@media (max-width:420px)': {
      gridTemplateColumns: '1fr'
    }
  }
}));
