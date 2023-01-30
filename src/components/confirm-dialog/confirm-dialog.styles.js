import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '18px',
    gap: '18px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    backgroundColor: theme.palette.white,
    outline: '0',
    boxShadow: theme.shadows[5],
    '@media (max-width: 500px)': {
      width: '320px',
      padding: '14px',
      gap: '14px'
    },
    '& p': {
      display: 'flex',
      margin: '0 0 16px',
      textAlign: 'left',
      lineHeight: '24px',
      fontSize: '18px',
      color: theme.palette.black,
      '@media (max-width:600px)': {
        fontSize: '16px'
      }
    }
  },
  header: {
    display: 'flex',
    paddingBottom: '12px',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderBottom: theme.palette.comments.modal.titleBorder.border,
    fontSize: '24px',
    color: theme.palette.black,
    fontWeight: '700',
    '@media (max-width: 500px)': {
      paddingBottom: '8px',
      fontSize: '20px'
    }
  },
  closeIcon: {
    color: '#808080',
    fontSize: '26px',
    cursor: 'pointer'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    gap: '12px',
    '& > button': {
      color: theme.palette.white,
      backgroundColor: theme.palette.black,
      fontSize: 14,
      padding: '8px 15px',
      '&:first-child': {
        color: theme.palette.black,
        backgroundColor: theme.palette.white,
        border: '1px solid',
        '&:hover': {
          backgroundColor: theme.palette.lightGray
        }
      },
      '&:hover': {
        backgroundColor: theme.palette.mediumGray
      },
      '@media (max-width: 500px)': {
        fontSize: '12px'
      }
    }
  }
}));
