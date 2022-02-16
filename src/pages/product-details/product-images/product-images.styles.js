import { makeStyles } from '@material-ui/core/styles';

const imgSides = {
  height: '100%',
  objectFit: 'cover',
  borderRadius: '6px',
  cursor: 'pointer'
};

export const useStyles = makeStyles((theme) => ({
  imageBody: {
    display: 'flex',
    flex: '1 1 50%'
  },
  images: {
    maxWidth: 540,
    display: 'grid',
    gridTemplateRows: '3fr 1fr',
    gridGap: '20px',
    '@media (max-width: 1150px)': {
      margin: '0 auto',
      maxWidth: 640
    },
    '@media (max-width: 500px)': {
      justifyContent: 'center',
      marginBottom: '10px'
    },
    '& img': {
      transform: 'scale(1)',
      width: '100%'
    }
  },

  imageContainer: {
    display: 'block',
    borderRadius: '6px',
    overflow: 'hidden'
  },

  primaryImage: {
    gridRow: '1 / -1',
    backgroundSize: 'cover',
    maxHeight: '350px',
    width: 'auto',
    objectFit: 'cover',

    '@media (max-width: 1600px)': {
      width: 'auto',
      height: 'auto'
    }
  },

  sideImage: {
    flex: '1 1 30%',
    ...imgSides,
    boxShadow: theme.palette.carouselItem.shadow.boxShadow
  },

  imagePreviewContainer: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr 48px',
    alignItems: 'center',
    border: theme.palette.imageContainer.border,
    borderRadius: '6px',
    padding: '10px',
    maxHeight: '385px',
    boxShadow: theme.palette.carouselItem.shadow.boxShadow
  },

  circle: {
    background: 'none',
    display: 'flex',
    width: '48px',
    height: '48px',
    border: 'solid 1px',
    borderColor: theme.palette.textColor,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '& svg': {
      fill: theme.palette.textColor
    },
    '&:disabled': { opacity: '0.2' }
  },

  additionalImagePreview: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 30,
    maxHeight: '150px',
    justifyContent: 'space-between',
    '@media (max-width: 500px)': {
      gap: 15
    }
  },

  lastImage: {
    ...imgSides,
    filter: 'brightness(50%)',
    boxShadow: theme.palette.carouselItem.shadow.boxShadow
  },

  lastImageText: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 3,
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    padding: '20% 10%',
    '@media (max-width: 500px)': {
      padding: '5px 5px'
    }
  },
  imageItem: {
    flex: '1 1 30%',
    height: '100%',
    border: theme.palette.imageContainer.border,
    borderRadius: '6px'
  },
  lastImagesBox: {
    flex: '1 1 30%',
    position: 'relative',
    color: 'white',
    cursor: 'pointer',
    height: '100%',
    border: theme.palette.imageContainer.border,
    borderRadius: '6px'
  }
}));
