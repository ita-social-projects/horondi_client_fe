import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingTop: 30,
    '& p, & ul, & li, & span': {
      color: `${theme.palette.textColor} !important`,
      fontSize: '1rem',
      lineHeight: '2rem'
    },
    '& > h1': {
      textAlign: 'center',
      transform: 'scale(1, 1.1)',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '59px',
      lineHeight: '46px',
      letterSpacing: '0.0025em'
    },
    '& > pre': {
      padding: '3px',
      color: '#ffffff',
      display: ' inline-block',
      borderRadius: '70%',
      background: '#3f51b5'
    },
    '& > h2': {
      letterSpacing: '-0.0025em',
      display: ' inline-block',
      paddingLeft: '15px',
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    '& > p > strong': {
      color: 'white',
      padding: 2,
      alignSelf: 'flex-start',
      position: 'relative',
      fontWeight: 'bold',
      zIndex: 1,
      '&::after': {
        content: `''`,
        position: 'absolute',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: -1
      }
    },
    '& img': {
      width: 150,
      height: 'auto',
      float: ' left',
      margin: '0 20px 20px 0'
    }
  }
}));
