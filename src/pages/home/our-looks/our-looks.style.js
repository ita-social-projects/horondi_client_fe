import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imageSection: {
    display: 'flex',
    flexFlow: 'wrap'
  },
  imageWrapper: {
    height: '340px',
    overflow: 'hidden',
    flexBasis: '16.666%',
    '@media screen and (max-width: 991px)': {
      flexBasis: '25%'
    },
    '@media screen and (max-width: 552px)': {
      flexBasis: '50%'
    },
    '&:hover > div': {
      transform: 'scale(1.1)'
    }
  },
  image: {
    width: '100%',
    height: '100%',
    transition: 'transform .3s ease',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  title: {
    fontSize: '2em',
    marginBottom: '1.5em',
    color: theme.palette.textColor
  },
  center: {
    width: '3rem',
    margin: 'auto',
    paddingBottom: '11rem'
  }
}));
