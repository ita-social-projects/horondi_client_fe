import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  constructorPreview: ({ isMouseIn }) => ({
    width: '100%',
    position: 'relative',
    margin: '50px 0',
    boxSizing: 'border-box',
    overflowY: 'hidden',
    '&:after': {
      opacity: isMouseIn ? 1 : 0,
      transition: 'opacity .5s ease',
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(rgb(171 171 171 / 13%) 0%, rgb(0, 0, 0) 100%)'
    },
    '& video': {
      '@media (max-width: 768px)': {
        width: '150% !important'
      }
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
    }
  },
  constructorContent: {
    width: '50vw',
    position: 'absolute',
    top: '25%',
    left: '25%',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  constructorTitle: {
    fontSize: '34px',
    lineHeight: '46px',
    textAlign: 'center',
    letterSpacing: '0.0025em',
    color: '#FEFEFE'
  },
  constructorDescription: {
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: '0.005em',
    color: '#FEFEFE'
  },
  buttonStyles: {
    marginTop: '30px',
    height: '44px',
    width: '244px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase',
    lineHeight: '25px',
    background: 'none',
    color: '#FEFEFE',
    border: '1px solid #FEFEFE',
    cursor: 'pointer'
  }
}));
