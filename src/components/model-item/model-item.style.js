import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  modelItem: {
    cursor: 'pointer',
    flex: '1 0 27%',
    margin: 11,
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    height: 230,
    position: 'relative',
    boxShadow: '0px 9px 12px rgba(0, 0, 0, 0.10)',
    borderRadius: '6px',
    zIndex: '3',
    backgroundColor: theme.palette.carouselItem.normal.backgroundColor,
    '& > *': {
      flex: 1
    },
    '&:after': {
      content: `''`,
      opacity: 0,
      position: 'absolute',
      transition: 'opacity 1s ease',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    '&:hover div img': {
      zIndex: 12,
      transform: 'scale(1.1)'
    },
    '&:hover div:first-child': {
      color: 'white'
    },
    '&:hover:after': {
      opacity: '.5'
    },
    '&:hover footer': {
      opacity: 1
    },
    '@media (max-width: 568px)': {
      flex: '1 0 37%'
    }
  },
  modelItemTitle: {
    padding: 20,
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 10,
    color: theme.palette.textColor,
    fontSize: 18,
    textAlign: 'left',
    transition: 'color .2s ease',
    fontWeight: '600',
    '@media (max-width: 768px)': {
      justifyContent: 'center'
    },
    '@media (max-width: 450px)': {
      fontSize: '1.3em'
    },
    '&:hover': {
      opacity: 0
    }
  },
  modelItemImage: {
    width: '50%',
    height: '80%',
    position: 'absolute',
    top: '25px',
    right: '75px',
    backgroundSize: 'cover',
    '& img': {
      transition: 'all .2s ease',
      width: 'auto',
      height: '100%',
      '@media (max-width: 1150px)': {
        height: '90%',
        marginLeft: '-10px',
      },
      '@media (max-width: 950px)': {
        height: '80%',
        marginLeft: '-10px',
        marginTop: '20px'
      },
      '@media (max-width: 768px)': {
        height: '70%',
        marginLeft: '-21px',
        marginTop: '30px'
      }
    }
  },
  link: {
    transition: 'opacity .2s ease',
    position: 'absolute',
    bottom: 20,
    left: '5%',
    opacity: 0,
    zIndex: 10,
    color: theme.palette.textColor,
    fontSize: '11px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginLeft: '5px',
      fontSize: '27px'
    },
    '@media (max-width: 1010px)': {
      fontSize: '10px',
      bottom: 10,
    }
  }
}));
