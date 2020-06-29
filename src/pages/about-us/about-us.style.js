import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backgroundColor,
    color: theme.palette.textColor,
    height: '100%'
  },
  aboutUs: {
    margin: '0 auto',
    maxWidth: 1280,
    paddingTop: 30
  },
  header: (props) => ({
    height: 700,
    background: `url(${props.hero}) no-repeat center`,
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    borderRadius: 10
  }),
  headerContent: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 50,
    zIndex: 2,
    color: 'white',
    '&::after': {
      content: `''`,
      position: 'absolute',
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: 0.1,
      zIndex: -1,
      borderRadius: 10
    }
  },
  body: {
    marginTop: 50
  },
  section: {
    margin: '50px 0'
  },
  block: {
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ffaa00',
    '& > *': {
      margin: '0 20px'
    },
    '& > img': {
      width: '50%',
      borderRadius: 10,
      maxHeight: 400
    },
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column'
    }
  },
  blockReverse: {
    flexDirection: 'row-reverse',
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column'
    }
  },
  horondi: {
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
  underline: {
    textDecoration: 'underline orangered'
  }
}));
