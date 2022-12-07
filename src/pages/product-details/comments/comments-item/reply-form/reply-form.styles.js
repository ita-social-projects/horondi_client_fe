import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 500px)': {
      justifyContent: 'flex-start',
      marginTop: '16px'
    }
  },
  form: {
    margin: '0',
    padding: '20px 80px 0 120px',
    maxWidth: '960px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '@media (max-width: 1100px)': {
      padding: '0 50px 0 80px'
    },
    '@media (max-width: 768px)': {
      padding: '0 20px 0 40px'
    },
    '@media (max-width: 600px)': {
      padding: '0 10px'
    },
    '& *': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.comments.formBorder.borderColor
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.textColor
        }
      },
      '& label.Mui-focused': {
        color: theme.palette.textColor
      },
      '& label': {
        '@media (max-width: 450px)': {
          transform: 'none',
          padding: '8px'
        }
      },
      '& div > input': {
        padding: '13px 16px',
        fontSize: '0.9rem'
      },
      '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: 'tomato'
      },
      '& .MuiFormLabel-root.Mui-error': {
        color: 'tomato'
      },
      '& .MuiFormHelperText-root.Mui-error': {
        color: 'tomato'
      }
    }
  },
  formHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '& :first-child': {
      display: 'flex'
    }
  },
  replyIcon: {
    margin: '0 5px',
    transform: 'scaleX(-1)',
    opacity: 0.5
  },
  input: {
    marginTop: '10px',
    width: '100%'
  },
  replyBtn: {
    padding: '12px 16px',
    margin: '16px 0 24px 16px',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 450px)': {
      marginTop: '0'
    },
    title: {
      textAlign: 'left'
    }
  },
  cancelBtn: {
    marginLeft: '0',
    color: theme.palette.textColor,
    backgroundColor: theme.palette.backgroundColor,
    border: theme.palette.comments.cancelButtonBorder.border
  }
}));
