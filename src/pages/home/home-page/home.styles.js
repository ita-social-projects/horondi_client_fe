import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  home: {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.backgroundColor
  },
  homeHeader: {
    backgroundImage:
      'url("https://horondi.blob.core.windows.net/horondi/backgrounds/bg-home-page.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 500,
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
      opacity: '.3',
      zIndex: 0
    }
  },
  headerButton: {
    position: 'relative',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    zIndex: 2,
    margin: 10,
    fontSize: 25,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  looks: {
    display: 'flex',
    flexWrap: 'wrap',
    '& img': {
      flexBasis: '25%'
    }
  }
}));
