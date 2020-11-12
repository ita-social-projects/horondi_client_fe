import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  caption: {
    color: '#fff',
    fontSize: '1rem',
    position: 'absolute'
  },
  sliderInner: {
    opacity: 0,
    transition: '1s',
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  },
  hoverArrow: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: '90%',
    left: '45%',
    color: '#fff',
    fontSize: '20px',
    zIndex: 10,
    textShadow: '2px 1px 2px #000',
    '&>span': {
      fontSize: '36px',
      position: 'relative',
      top: '-18px',
      marginLeft: '10px'
    },
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover + .slider': {
      opacity: 1
    }
  },
  title: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '36px',
    zIndex: 10
  },
  description: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '24px',
    zIndex: 10
  },
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    '& > h1': {
      textAlign: 'center'
    },
    '& > h2': {
      textDecoration: 'underline orangered',
      textAlign: 'left'
    },
    '& > p > strong': {
      margin: 0,
      color: 'white',
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
    '.sliderImage img': {
      width: '100%',
      height: 'auto',
      float: ' left',
      margin: '0 20px 20px 0'
    }
  },
  innerRoot: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingLeft: 20,
    paddingTop: 30,
    '& > h1': {
      textAlign: 'center'
    },
    '& > h3': {
      textDecoration: 'underline orangered',
      textAlign: 'left'
    },
    '& > p > strong': {
      textAlign: 'right',
      color: 'white',
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
      width: 200,
      height: 'auto',
      float: ' left',
      margin: '0 20px 20px 0'
    }
  }
}));
