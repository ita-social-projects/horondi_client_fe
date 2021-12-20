import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.white,
      color: theme.palette.black,
      maxWidth: '480px',
      borderRadius: 0,
      '@media (max-width:500px)': {
        maxWidth: '320px'
      },
      '& .MuiDialogContent-root': {
        padding: '10px 16px',
        '@media (max-width:500px)': {
          padding: '10px 10px 20px'
        }
      }
    }
  },
  button: {
    padding: '8px 15px',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '14px',
    border: theme.palette.comments.modal.buttonBorder.border,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '@media (max-width: 500px)': {
      fontSize: '12px'
    },
    '&:first-child': {
      color: theme.palette.black,
      backgroundColor: theme.palette.white
    },
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  title: {
    padding: '12px 16px 10px',
    color: theme.palette.black,
    borderBottom: theme.palette.comments.modal.titleBorder.border,
    '@media (max-width: 500px)': {
      padding: '5px'
    },
    '& h2': {
      fontWeight: 600,
      lineHeight: '1.4rem',
      fontSize: '20px'
    }
  },
  icon: {
    color: theme.palette.comments.modal.closeModalIcon.color,
    cursor: 'pointer'
  },
  titleContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    color: theme.palette.black,
    fontWeight: 400,
    fontSize: '16px',
    padding: '16px 0px 40px',
    '@media (max-width:500px)': {
      padding: '0',
      fontSize: '14px'
    }
  }
}));
