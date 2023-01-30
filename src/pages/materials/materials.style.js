import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: 'none',
    '& h2': {
      fontSize: '35px',
      fontWeight: '400',
      textAlign: 'center',
      marginTop: '100px',
      '@media (max-width: 520px)': {
        marginTop: '30px',
        fontSize: ' 28px'
      }
    },
    '& h3': {
      '@media (max-width: 520px)': {
        fontSize: ' 22px'
      }
    },
    '& .awssld__content p': {
      position: 'absolute',
      margin: '0',
      color: theme.palette.white,
      bottom: '35px',
      right: '35px',
      fontSize: '24px',
      fontWeight: '600',
      '@media (max-width: 520px)': {
        visibility: 'hidden'
      }
    },
    '& .awssld__content img': {
      opacity: '50%'
    },
    '& .awssld__controls': {
      '@media all and (max-width: 520px)': {
        visibility: 'visible'
      }
    },
    '& .awssld__controls button': {
      width: '65px',
      height: '40px',
      top: 'unset',
      bottom: '15px',
      marginLeft: '35px',
      padding: '0',
      transition: 'transform  0.3s linear',
      '&:hover': {
        transform: 'scale(1.1)'
      },
      '@media (max-width: 520px)': {
        width: '55px'
      }
    },
    '& .awssld__controls button img': {
      width: '100%'
    },
    '& .awssld__next': {
      right: 'unset',
      left: '100px',
      '@media (max-width: 520px)': {
        left: '80px'
      }
    },
    '& .carousel-item': {
      padding: '0 10px'
    }
  }
}));
