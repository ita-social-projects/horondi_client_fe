import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  constructorPreview: () => ({
    width: '100%',
    position: 'relative',
    margin: '50px 0',
    boxSizing: 'border-box',
    overflowY: 'hidden',
    '& video': {
      filter: 'brightness(0.5)',
      '@media (max-width: 768px)': {
        width: '150% !important'
      }
    },
    '& .react-player': {
      overflow: 'hidden'
    }
  }),
  playerSoundControl: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 100,
    right: 80,
    bottom: 30,
    '& svg': {
      color: 'white'
    },
    '@media (max-width: 575px)': {
      right: 20,
      bottom: 20
    },
    '@media (max-width: 420px)': {
      right: 10,
      bottom: 10
    }
  },
  constructorContent: {
    width: '50vw',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (max-width: 575px)': {
      width: '90vw'
    }
  },
  constructorTitle: {
    fontSize: '34px',
    lineHeight: '46px',
    textAlign: 'center',
    letterSpacing: '0.0025em',
    color: '#FEFEFE',
    marginTop: '0',
    '@media (max-width: 575px)': {
      fontSize: '25px',
      lineHeight: '30px'
    }
  },
  constructorDescription: {
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: '0.005em',
    color: '#FEFEFE',
    textAlign: 'center',
    '@media (max-width: 450px)': {
      fontSize: '15px',
      lineHeight: '17px'
    }
  },
  buttonStyles: {
    fontFamily: 'Open Sans',
    marginTop: '30px',
    padding: '12px 48px',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase',
    background: 'none',
    color: '#FEFEFE',
    border: '1px solid #FEFEFE',
    borderRadius: '0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(40, 40, 40, 0.7)'
    },
    '@media (max-width: 420px)': {
      marginTop: '10px'
    },
    '@media (max-width: 321px)': {
      marginTop: '0px'
    }
  }
}));
