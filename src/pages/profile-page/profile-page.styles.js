import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  profile: {
    display: 'flex',
    gap: '24px',
    '@media screen and (max-width: 1144px)': {
      flexDirection: 'column',
      maxWidth: 635,
      margin: '0 auto'
    }
  },
  userFormControl: {
    marginBottom: 56,
    flexBasis: '60%',
    '@media (max-width: 1144px)': {
      marginBottom: 0
    }
  },
  userForm: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    padding: '56px 95px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    rowGap: '8px',
    '@media (max-width: 768px)': { padding: '48px 85px' },
    '@media (max-width: 575px)': {
      padding: '40px '
    }
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: palette.textColor,
    margin: '0 0 12px',
    gridColumn: 'span 2',
    '@media (max-width: 768px)': {
      gridColumn: 'span 3',
      textAlign: 'center'
    }
  },
  dataInput: {
    gridColumn: 'span 3',
    position: 'relative',
    '& .MuiInputAdornment-positionStart': {
      marginRight: '4px'
    }
  },
  nameInputs: {
    gridColumn: 'span 2',
    '@media (max-width: 768px)': {
      gridColumn: 'span 3'
    }
  },
  button: {
    gridColumn: 'span 3'
  },
  userActions: {
    flexBasis: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '@media (max-width: 1144px)': {
      marginBottom: '56px'
    }
  },
  newPassword: {
    minHeight: 100,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    padding: '32px',
    marginBottom: 20,
    '@media (max-width: 1144px)': {
      padding: '32px 95px'
    },
    '@media (max-width: 575px)': {
      padding: '32px 40px'
    }
  },
  userActionsInput: {
    margin: '16px 0px 8px 0px'
  },
  userActionsText: {
    display: 'block',
    margin: '12px 0',
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
  }
}));
