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
      transition: 'all 0.3s',
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
    height: '500px',
    cursor: 'pointer',
    width: '500px',

    '@media (max-width: 1600px)': {
      width: 'auto',
      height: 'auto'
    }
  }),

  sideImage: {
    '@media (max-width: 500px)': {
      display: 'none'
    }
  }
}));
