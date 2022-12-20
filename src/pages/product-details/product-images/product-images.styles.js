import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  images: {
    display: 'flex',
    flexDirection: 'column',
    gridRow: '1/3',
    gap: '24px',
    '@media (max-width: 900px)': {
      gridColumn: '1'
    },
    '@media (max-width: 750px)': {
      gridColumn: '1/3',
      gridRow: 1,
      display: 'grid',
      gridTemplateColumns: '72% 3% 23%',
      gap: 0
    }
  },
  imageItem: {
    width: '30%',
    display: 'flex',
    '@media (max-width: 750px)': { width: '100%' }
  },
  lastImage: {
    width: '100%',
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: theme.palette.carouselItem.shadow.boxShadow,
    filter: 'brightness(50%)'
  },
  lastImagesBox: {
    position: 'relative',
    display: 'flex',
    color: 'white',
    width: '30%',
    cursor: 'pointer',
    '@media (max-width: 750px)': { width: '100%' }
  },
  lastImageText: {
    position: 'absolute',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '4px',
    height: '100%',
    color: 'white',
    zIndex: 3,
    fontSize: '16px',
    fontWeight: 600,
    '@media (max-width: 900px)': { fontSize: '14px' },
    '@media (max-width: 750px)': { fontSize: '12px' },
    '@media (max-width: 500px)': { fontSize: '10px' }
  },
  imagePreviewContainer: ({ imageUrl }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: theme.palette.imageContainer.border,
    borderRadius: '6px',
    boxShadow: theme.palette.carouselItem.shadow.boxShadow,
    aspectRatio: 1,
    background: `url(${imageUrl}) center center / cover no-repeat`,
    maxHeight: '520px',
    maxWidth: '520px'
  }),
  sideImage: {
    width: '100%',
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: theme.palette.carouselItem.shadow.boxShadow
  },
  additionalImagePreview: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '520px',
    gap: '26px',
    '@media (max-width: 900px)': { gap: '20px' },
    '@media (max-width: 750px)': {
      flexDirection: 'column',
      gridColumn: 3,
      gap: '2%',
      alignItems: 'start',
      maxWidth: '156px'
    }
  },
  circle: {
    margin: '10px',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    color: 'white',
    minWidth: '43px',
    minHeight: '43px',
    opacity: '0.8',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: '24px',
      verticalAlign: 'middle',
      '@media (max-width: 750px)': { fontSize: '20px' },
      '@media (max-width: 500px)': { fontSize: '18px' }
    },
    '&:disabled': { opacity: '0.2' },
    '@media (max-width: 750px)': { minWidth: '38px', minHeight: '38px' },
    '@media (max-width: 500px)': {
      minWidth: '32px',
      minHeight: '32px',
      margin: '5px'
    }
  },
  imageOpener: { width: '100%', height: '100%', cursor: 'pointer' }
}));
