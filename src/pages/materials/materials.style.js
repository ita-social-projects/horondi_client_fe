import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    '& h1': {
      textAlign: 'center',
      fontSize: '45px'
    },
    '& > h2, h3': {
      textDecoration: 'underline orangered',
      textAlign: 'left'
    },
    '& h3': {
      fontSize: '30px'
    },
    '& > p > strong': {
      margin: 0,
      lineHeight: 0,
      color: 'white',
      alignSelf: 'flex-end',
      position: 'relative',
      fontWeight: 'bold',
      zIndex: 1
    },
    '& .editor-img ': {
      width: 200,
      float: ' left',
      margin: '0 30px 30px 0'
    },
    '.sliderImage img': {
      width: '100%'
    },
    '.sliderImage img , .editor-img': {
      height: 'auto'
    }
  }
}));
