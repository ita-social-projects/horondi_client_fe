import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  similarItems: {
    width: '90%',
    margin: '0 auto',
    textAlign: 'center'
  },
  carousel: {
    marginTop: '2rem',
    borderBottom: '2px solid #C2C2C2',
    paddingBottom: '25px'
  },
  title: {
    borderTop: '2px solid #C2C2C2',
    borderBottom: '2px solid #C2C2C2',
    padding: '15px 0'
  }
}));

export default useStyles;
