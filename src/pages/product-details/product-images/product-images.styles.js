import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  images: {
    display: 'grid',
    gridTemplateColumns: '150px 1fr',

    gridGap: '20px',
    '@media (max-width: 500px)': {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2)
    },
    '& img': {
      transform: 'scale(1)',
      width: '100%'
    }
  },

  imageContainer: {
    position: 'relative'
  },

  primaryImage: (props) => ({
    gridRow: '1 / -1',
    background: `url(${props.primaryImage}) no-repeat center`,
    backgroundSize: 'cover',

    cursor: 'pointer',

    '@media (max-width: 1600px)': {
      width: 'auto',
      height: 'auto'
    }
  }),

  sideImage: {
    width: '100%',

    objectFit: 'cover',

    '@media (max-width: 500px)': {
      display: 'none'
    }
  }
}));
