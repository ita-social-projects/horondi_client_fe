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
    }
  },
  rate: {
    display: 'inline-flex',
    marginTop: '24px',
    '@media (max-width: 750px)': { marginTop: '12px' },
    '@media (max-width: 500px)': { marginTop: 0 }
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
    display: 'flex',
    flexDirection: 'column',

    '& .MuiOutlinedInput-inputMultiline': {
      fontWeight: 400,
      fontSize: '16px'
    },
    '& .MuiFormHelperText-root': {
      color: 'tomato',
      marginLeft: '15px'
    },
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
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'tomato'
    },
    '& .MuiFormLabel-root.Mui-error': { color: 'tomato' }
  },
  commentBtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '18px',
    marginTop: '8px',
    marginBottom: '24px',
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
    '@media (max-width: 600px)': {
      fontSize: '12px'
    }
  },
  title: {
    textAlign: 'left',
    fontSize: '24px',
    lineHeight: '32px',
    '@media (max-width: 600px)': { fontSize: '20px', lineHeight: '28px' },
    submit: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  cancelBtn: {
    fontWeight: 600,
    color: theme.palette.textColor,
    backgroundColor: theme.palette.backgroundColor,
    border: theme.palette.comments.cancelButtonBorder.border,
    '&:hover': {
      color: theme.palette.button.hoverSecondary.color,
      backgroundColor: theme.palette.button.hoverSecondary.backgroundColor
    },
    '&:disabled': {
      border: 0
    }
  },
  emptyComments: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 600,
    margin: '40px 0'
  },
  showMore: {
    marginBottom: '20px'
  }
}));
