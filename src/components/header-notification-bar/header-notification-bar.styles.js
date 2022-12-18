import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6px 10px',
    width: '100%',
    height: 'fit-content',
    marginBottom: '-48px',
    backgroundColor: theme.palette.notification.backgroundColor,
    position: 'fixed',
    zIndex: '1000',
    top: '111px',
    '@media (max-width: 1000px)': {
      top: '94px'
    },
    '@media (max-width: 768px)': {
      top: '108px'
    }
  },
  content: {
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    color: theme.palette.comments.modal.closeModalIcon.color,
    fontSize: '20px',
    cursor: 'pointer',
    marginLeft: '8px'
  }
}));
