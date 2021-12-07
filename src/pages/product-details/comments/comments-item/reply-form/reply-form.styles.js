import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 500px)': {
      justifyContent: 'flex-start',
      paddingTop: '10px'
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
      padding: '0 10px 0 20px'
    },
    '& *': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.textColor
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.textColor
        }
      },
      '& label.Mui-focused': {
        color: theme.palette.textColor,
        transform: 'translate(15px, 5px) scale(0.75)'
      },
      '& label': {
        transform: 'translate(15px, 20px) scale(1)'
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
    transform: 'scaleX(-1)'
  },
  input: {
    paddingTop: '10px',
    width: '100%'
  },
  replyBtn: {
    padding: '8px 16px',
    marginTop: '12px',
    marginBottom: '24px',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '14px',
    fontFamily: 'Open sans',
    fontWeight: '600',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 950px)': {
      marginTop: '0',
      marginBottom: '1.5rem'
    },
    title: {
      textAlign: 'left important!'
    },
    marginLeft: '10px'
  },
  cancelBtn: {
    color: theme.palette.black,
    backgroundColor: theme.palette.white,
    border: '1px solid'
  }
}));
