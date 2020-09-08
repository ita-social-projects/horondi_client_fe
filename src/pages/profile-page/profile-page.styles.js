import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  profile: {
    margin: '26px auto',
    minWidth: '100px',
    maxWidth: 780,
    display: 'flex',
    justifyContent: 'space-between'
  },
  userForm: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    maxWidth: 400,
    minWidth: 388,
    minHeight: 740,
    padding: '44px 34px'
  },
  userImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    borderRadius: 5
  },
  imageContainer: {
    width: 100,
    height: 100,
    position: 'relative',
    marginRight: 10
  },
  imageAndName: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  userInput: {
    width: '100%',
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid black'
    }
  },
  userNames: {
    display: 'flex',
    flexDirection: 'column'
  },
  photoUpload: {
    display: 'none'
  },
  uploadBtn: {
    height: '100%',
    fontWeight: 'bold'
  },
  uploadLabel: {
    height: '100%',
    opacity: 0,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    '&:hover': {
      opacity: 1,
      background: 'white'
    }
  },
  restOfUserInputs: {
    display: 'flex',
    flexBasis: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 20,
    '& > div': {
      marginTop: 10
    }
  },
  saveBtn: {
    fontSize: '1rem',
    lineHeight: '20px',
    height: '42px',
    width: '100%',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  userActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  newPassword: {
    width: 360,
    minHeight: 100,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    padding: '20px 34px',
    textAlign: 'center',
    marginBottom: 20
  },
  confirmUser: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: 360,
    minHeight: 100,
    borderRadius: 5,
    padding: '20px 34px',
    textAlign: 'center'
  }
}));
