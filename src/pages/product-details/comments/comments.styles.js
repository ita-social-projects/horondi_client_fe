import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  loadMore: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fill: theme.palette.textColor,
    padding: '15px 0'
  },
  loadMoreText: {
    fontWeight: 600,
    marginBottom: '5px',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: theme.palette.comments.border,
      height: '20px'
    }
  },
  comment: {
    fontFamily: 'Open Sans',
    backgroundColor: theme.palette.backgroundColor,
    '& hr': {
      border: 'none',
      color: '#C2C2C2',
      height: '0.05rem'
    },
    '@media (max-width: 400px)': {
      padding: '0 1rem',
      marginTop: '0'
    }
  },
  rate: {
    display: 'inline-flex',
    marginTop: '24px'
  },
  textRate: {
    paddingRight: '8px',
    color: theme.palette.textColor,
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: 'bold'
  },
  form: {
    marginTop: '15px',
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
        color: 'gray',
        transform: 'translate(14px, 14px) scale(1)'
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
    },
    '@media (max-width: 950px)': {
      marginTop: '0',
      display: 'flex',
      flexDirection: 'column'
    }
  },
  input: {
    marginBottom: '45px',
    float: 'left',
    width: '308px',
    paddingRight: '1rem',
    height: '2rem',
    '@media (max-width: 950px)': {
      marginTop: '15px',
      width: '100%',
      padding: 0
    },
    '& p': {
      position: 'absolute',
      top: '45px',
      fontSize: '10px'
    },
    '& input': {
      background: '#fff',
      fontWeight: '500'
    }
  },
  text: {
    marginRight: '500px',
    position: 'relative',
    width: '100%',
    '@media (max-width: 950px)': {
      width: '100%',
      marginTop: '1rem'
    },
    '@media (max-width: 600px)': {
      width: '100%',
      padding: 0,
      '& label': {
        width: '90%'
      }
    },
    '& p': {
      position: 'absolute',
      top: '130px',
      fontSize: '10px'
    },
    '& textarea': {
      color: theme.palette.textColor,
      fontSize: '0.875rem',
      fontWeight: '500'
    }
  },
  commentBtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 16,
    marginBottom: 40,
    '& .MuiButton-root.Mui-disabled': {
      color: theme.palette.button.disabled.color,
      backgroundColor: theme.palette.button.disabled.backgroundColor
    }
  },
  commentBtn: {
    marginTop: 0,
    marginBottom: 0,
    padding: '12px 16px',
    textTransform: 'none',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 950px)': {
      marginTop: '0',
      marginBottom: '1.5rem'
    }
  },
  title: {
    textAlign: 'left',
    fontSize: '24px',
    lineHeight: '32px',

    submit: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  cancelBtn: {
    marginRight: '16px',
    fontWeight: 600,
    color: theme.palette.textColor,
    backgroundColor: theme.palette.backgroundColor,
    border: theme.palette.comments.cancelButtonBorder.border
  }
}));
