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
      textAlign: 'center'
    },
    '& > h2': {
      textDecoration: 'underline orangered',
      textAlign: 'left'
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
