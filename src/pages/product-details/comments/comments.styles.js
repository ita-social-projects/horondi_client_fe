import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  comments: {
    padding: '1rem 3rem',
    marginTop: '1rem',
    '& hr': {
      border: 'none',
      color: '#C2C2C2',
      backgroundColor: '#C2C2C2',
      height: '0.05rem'
    },
    '@media (max-width: 400px)': {
      padding: '0 1rem',
      marginTop: '0'
    }
  },
  form: {
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
        color: theme.palette.textColor
      },
      '& label': {
        transform: 'translate(14px, 14px) scale(1)'
      },
      '& div > input': {
        padding: '13px 16px',
        fontSize: '0.9rem'
      }
    },
    '@media (max-width: 950px)': {
      display: 'flex',
      flexDirection: 'column',
      '&:nth-child(1)': {
        marginBottom: '2rem'
      }
    }
  },
  input: {
    width: '20rem',
    marginTop: '1rem',
    paddingRight: '1rem',
    height: '2rem',
    '@media (max-width: 950px)': {
      marginBottom: '1.5rem'
    },
    '@media (max-width: 600px)': {
      width: '85vw'
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.card.childrenBackgroundColor
    }
  },
  textInput: {
    marginTop: '2.5rem',
    width: '39rem',
    backgroundColor: theme.palette.card.childrenBackgroundColor,
    '@media (max-width: 950px)': {
      width: '67vw',
      marginTop: '1rem'
    },
    '@media (max-width: 600px)': {
      width: '85vw',
      marginTop: '1rem'
    }
  },
  commentBtn: {
    margin: '1.5rem 0',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '&:disabled': {
      background: '#999999',
      color: '#C2C2C2'
    },
    '@media (max-width: 950px)': {
      marginTop: '0',
      marginBottom: '1.5rem'
    }
  }
}));

export default useStyles;
