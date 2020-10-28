import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  home: {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.backgroundColor,
    textAlign: 'center'
  },
  homeHeader: {
    background:
      'url("https://horondi.blob.core.windows.net/horondi/images/large_10b1e24kgt64yt0_IMG_0423.jpg") no-repeat center center',
    backgroundSize: 'cover',
    height: 800,
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 50,
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: '.1',
      zIndex: 0
    }
  },
  headerButton: {
    position: 'relative',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    zIndex: 2,
    margin: 10,
    fontSize: 15,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  }
}));
