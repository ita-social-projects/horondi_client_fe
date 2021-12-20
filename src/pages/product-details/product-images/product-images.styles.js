import { makeStyles } from '@material-ui/core/styles';

const imgSides = {
  width: '160px',
  height: '122px',
  objectFit: 'cover',
  border: '2px solid #EBEFF2',
  borderRadius: '6px',
  boxShadow: [
    '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
    '0 6.7px 5.3px rgba(0, 0, 0, 0.048)',
    '0 12.5px 10px rgba(0, 0, 0, 0.06)'
  ],
  cursor: 'pointer'
};

export const useStyles = makeStyles((theme) => ({
  imageBody: {
    flex: '1 1 50%'
  },
  images: {
    maxWidth: 540,
    display: 'grid',
    gridGap: '20px',
    '@media (max-width: 1150px)': {
      margin: '0 auto',
      maxWidth: 640
    },
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
    ...imgSides
  },

  imagePreviewContainer: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr 48px',
    alignItems: 'center',
    border: '2px solid #EBEFF2',
    borderRadius: '6px',
    padding: '10px',
    height: '385px',
    boxShadow: [
      '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
      '0 6.7px 5.3px rgba(0, 0, 0, 0.048)',
      '0 12.5px 10px rgba(0, 0, 0, 0.06)'
    ]
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
    justifyContent: 'space-between'
  },

  lastImage: {
    ...imgSides,
    background: 'rgba(0,0,0, 0.5)',
    zIndex: 3
  },

  lastImageText: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 3,
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    width: '80px'
  },
  imageItem: {
    flex: '1 1 30%'
  },
  lastImagesBox: {
    flex: '1 1 30%',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer'
  }
}));
