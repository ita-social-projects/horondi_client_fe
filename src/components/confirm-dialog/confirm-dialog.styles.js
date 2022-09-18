import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '16px',
    gap: '16px',
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
      width: '320px'
    },
    '& p': {
      display: 'flex',
      margin: '0',
      fontSize: '16px',
      color: theme.palette.black,
      '& b': {
        fontSize: '14px',
        fontStyle: '600'
      },
      '@media (max-width:500px)': {
        padding: '10px 10px 20px',
        fontSize: '14px'
      }
    }
  },
  header: {
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderBottom: theme.palette.comments.modal.titleBorder.border,
    fontSize: '20px',
    color: theme.palette.black,
    fontWeight: '700',
    '@media (max-width: 500px)': {
      padding: '5px'
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
    marginTop: '10px',
    padding: '0 7px 7px 0',
    '& > button': {
      color: theme.palette.white,
      backgroundColor: theme.palette.black,
      fontSize: 14,
      margin: 8,
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