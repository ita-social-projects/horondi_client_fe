import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    '&:hover': {
      zIndex: -1
    }
  },
  imageContainer: {
    width: 160,
    height: 160,
    position: 'relative',
    marginRight: 30,
    gridRow: 'span 3',
    alignSelf: 'center',
    borderRadius: '50%',
    '@media (max-width: 768px)': {
      gridColumn: 'span 3',
      margin: '0 auto'
    }
  },
  imageContainerLabel: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.5s ease'
  },
  uploadLabel: {
    backgroundColor: palette.profilePageLabel.normal.backgroundColor,
    '&:hover': {
      backgroundColor: palette.profilePageLabel.hover.backgroundColor
    }
  },
  updateLabel: {
    opacity: 0,
    background: 'transparent',

    '&:hover': {
      opacity: 1
    }
  },
  cameraIcon: {
    fontSize: '32px',
    margin: '5px',
    color: palette.profilePageLabel.normal.backgroundColor
  },
  photoUpload: {
    display: 'none'
  },
  uploadBtn: {
    width: '100%',
    height: '100%',
    fontWeight: 'bold',
    background: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  formHelper: {
    maxWidth: '100px'
  }
}));
