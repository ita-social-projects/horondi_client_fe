import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  slider: {
    margin: '40px 0 50px',
    '@media (max-width: 520px)': {
      marginBottom: '25px'
    },
    '&.awssld': {
      '--slider-height-percentage': '50%',
      '--loader-bar-color': 'transparent ',
      '--slider-transition-duration': '600ms'
    }
  },
  image: {
    display: 'block',
    width: '100%',
    height: '80px',
    margin: '0 auto',
    opacity: '0.5',
    cursor: 'pointer',
    objectFit: 'cover',
    transition: 'all 0.2s linear',
    '&:hover': {
      transform: 'scale(1.05)'
    },
    '@media (max-width: 520px)': {
      height: '60px'
    }
  },
  selected: {
    opacity: '1'
  },
  counter: {
    fontSize: '16px',
    color: theme.palette.white,
    position: 'absolute',
    bottom: '70px',
    left: '30px',
    '& span:first-child': {
      fontSize: '48px',
      paddingRight: '5px'
    },
    '@media (max-width: 520px)': {
      bottom: '60px',
      fontSize: '12px',
      '& span:first-child': {
        fontSize: '24px'
      }
    }
  }
}));
