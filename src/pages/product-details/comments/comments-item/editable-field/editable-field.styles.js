import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  editableText: {
    marginTop: '20px',
    width: '70vw',
    '@media (max-width: 950px)': {
      width: '63vw'
    },
    '@media (max-width: 600px)': {
      width: '78vw'
    },
    '& p': {
      position: 'absolute',
      top: '170px',
      fontSize: '10px'
    },
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
    },
    '& textarea': {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
      fontWeight: '500'
    }
  },
  editButton: {
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    marginTop: '25px',
    marginRight: '10px'
  },
  deleteIcon: {
    marginTop: '25px',
    fontSize: '2.5rem',
    color: 'tomato',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  editForm: {
    display: 'flex'
  }
}));

export default useStyles;
