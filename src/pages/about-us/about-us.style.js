import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingTop: 30,
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
      alignSelf: 'flex-end',
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
    '& > p:last-child': {
      display: 'flex',
      '& > img': {
        flexBasis: '25%',
        float: 'none',
        transition: 'transform .3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.5)'
        }
      }
    }
  }
}));
