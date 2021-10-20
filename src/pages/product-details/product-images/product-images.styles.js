import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  images: {
    display: 'grid',
    gridTemplateRows: '540px 150px',

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
    width: '160px',
    height: '120px',
    objectFit: 'cover'

    // '@media (max-height: 150px)': {
    //   display: 'none'
    // }
  },

  additionalImagePreview: {
    overflow: 'auto',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '150px',
    '&::-webkit-scrollbar': {
      height: '0.4em',
      widht: '100%',
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
