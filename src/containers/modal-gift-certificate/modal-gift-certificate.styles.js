import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    '& > button': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.black,
      fontSize: 14,
      marginLeft: 8,
      width: '158px',
      padding: '10px 32px',

      '&:first-child': {
        color: theme.palette.black,
        backgroundColor: theme.palette.primary.contrastText,
        border: '1px solid',
        '&:hover': {
          backgroundColor: theme.palette.lightGray
        },
        '&:disabled': {
          backgroundColor: theme.palette.lightGray,
          border: 'none'
        }
      },
      '&:hover': {
        backgroundColor: theme.palette.mediumGray
      },
      '@media (max-width: 500px)': {
        fontSize: '12px'
      }
    }
  },
  title: {
    fontWeight: 600,
    textAlign: 'start'
  },
  input: {
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.textColor
      }
    }
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '24px'
  },
  errorText: {
    marginTop: '-24px',
    height: '12px',
    fontSize: '12px',
    color: theme.palette.error.main
  }
}));
