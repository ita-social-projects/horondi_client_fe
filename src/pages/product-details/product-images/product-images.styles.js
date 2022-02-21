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
    flex: '1 1 50%',
    alignContent: 'space-between'
  },
  images: {
    maxWidth: 540,
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 1150px)': {
      margin: '0 auto',
      maxWidth: 640
    },
    '@media (max-width: 600px)': {
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
    boxShadow: theme.palette.carouselItem.shadow.boxShadow,
    height: '100%'
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
    maxHeight: '120px',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      gap: 15,
      maxHeight: '100px'
    },
    height: '100%'
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
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 500px)': {
      padding: '5px 5px',
      fontSize: '14px'
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
