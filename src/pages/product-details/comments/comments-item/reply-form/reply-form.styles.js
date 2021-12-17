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
    marginTop: '15px',
    paddingLeft: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& *': {
      '& .MuiOutlinedInput-root': {
        background: theme.palette.white,
        '& fieldset': {
          borderColor: theme.palette.textColor
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.textColor
        }
      },
      '& label.Mui-focused': {
        color: theme.palette.textColor
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
  input: {
    marginTop: '10px',
    width: '100%'
  },
  replyBtn: {
    margin: '25px 0 40px',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
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
  }
}));
