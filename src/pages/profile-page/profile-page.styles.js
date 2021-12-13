import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  profileControl: {
    margin: '0 auto',
    display: 'flex',
    width: '90%',
    maxWidth: 1100,
    flexDirection: 'column'
  },
  profileTitleInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileTitle: {
    fontSize: 48,
    color: palette.textColor,
    margin: '72px 0px',
    fontWeight: 'normal'
  },
  titleLine: {
    width: '100%',
    height: 1,
    borderBottom: '1px solid #E8E8E8',
    marginBottom: 37
  },
  profile: {
    maxWidth: 1110,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '@media screen and (max-width: 1136px)': {
      justifyContent: 'center'
    }
  },
  userFormControl: {
    maxWidth: 635,
    marginBottom: 56
  },
  userForm: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    padding: '56px 95px',
    marginBottom: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    rowGap: '23px',
    position: 'relative',
    '@media (max-width: 768px)': {
      padding: '56px 40px'
    }
  },
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
  formTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: palette.textColor,
    margin: 0,
    gridColumn: 'span 2',
    '@media (max-width: 768px)': {
      gridColumn: 'span 3',
      margin: '0 auto'
    }
  },
  dataInput: {
    gridColumn: 'span 3',
    position: 'relative',
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.textColor
    }
  },
  nameInputs: {
    gridColumn: 'span 2',
    '@media (max-width: 768px)': {
      gridColumn: 'span 3'
    }
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
    color: palette.profilePageLabel.normal.backgroundColor
  },
  button: {
    fontSize: '1rem',
    lineHeight: '20px',
    width: '100%',
    gridColumn: 'span 3',
    textTransform: 'uppercase'
  },
  userActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 445,
    '@media (max-width: 1200px)': {
      marginBottom: '56px'
    }
  },
  userActionsButton: {
    border: '1px solid',
    borderColor: palette.button.normal.borderColor,
    padding: '12px 48px',
    '& span': {
      fontWeight: 600
    }
  },
  saveBtn: {
    backgroundColor: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,
    padding: '16px 0',
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  },
  newPassword: {
    minHeight: 100,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    padding: '22px 32px',
    marginBottom: 20
  },
  userActionsInput: {
    margin: '16px 0px 8px 0px'
  },
  confirmUser: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    minHeight: 100,
    borderRadius: 5,
    padding: '20px 34px'
  },
  userActionsText: {
    display: 'block',
    margin: '16px 0',
    color: palette.info.main
  },
  emailSent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      lineHeight: '24px',
      margin: '12px 0 0 0'
    }
  },
  openedLetterIcon: {
    fontSize: '52px',
    marginBottom: '16px'
  },
  error: {
    color: '#e60000',
    marginLeft: '3%',
    gridColumn: 'span 2'
  }
}));
