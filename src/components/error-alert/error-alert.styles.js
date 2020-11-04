import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  alertContainer: {
    position: 'fixed',
    top: '10%',
    right: '30%',
    left: '30%',
    bottom: '10%',
    margin: '22rem auto',
    padding: 10,
    zIndex: 1000,
    border: '1px solid black',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  },
  alertHeader: {
    textAlign: 'center'
  },
  alertContant: {
    textAlign: 'center',
    fontSize: '1.3rem'
  }
}));

export default useStyles;
