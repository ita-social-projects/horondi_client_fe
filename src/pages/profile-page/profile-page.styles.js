import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
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
    fontWeight: '600',
    fontFamily: 'Open Sans'
  },
  titleLine: {
    width: '100%',
    height: 1,
    borderBottom: '1px solid #E8E8E8',
    marginBottom: 37
  },
  profile: {
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
  formTitle: {
    fontSize: 24,
    fontWeight: 800,
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
    padding: '22px 32px',
    marginBottom: 20
  },
  userActionsInput: {
    margin: '16px 0px 8px 0px'
  },
  confirmUser: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    minHeight: 100,
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
