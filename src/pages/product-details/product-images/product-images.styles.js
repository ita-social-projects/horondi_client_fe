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
  },

  additionalImagePreview: {
    overflow: 'hidden',
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    maxHeight: '500px',
    '&::-webkit-scrollbar': {
      width: '0.4em',
      borderRadius: '0.2em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.4)',
      borderRadius: '0.2em'
    }
  }
}));
