import { makeStyles } from '@material-ui/core/styles';

const button = {
  fontWeight: 600,
  fontSize: '14px',
  padding: '10px 20px',
  whiteSpace: 'nowrap',
  '@media (max-width: 900px)': { width: '100%', minWidth: '200px' },
  '@media (max-width: 600px)': { fontSize: '13px', padding: '10px 15px', minWidth: '180px' }
};

export const useStyles = makeStyles((theme) => ({
  submit: {
    display: 'flex',
    gap: '16px',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      gap: '12px',
      width: '100%',
      maxWidth: '320px'
    }
  },
  submitButton: {
    ...button,
    background: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '&:disabled': {
      backgroundColor: 'rgba(2, 2, 2, 0.2)'
    }
  },
  toCart: {
    ...button,
    border: '1px solid'
  }
}));
