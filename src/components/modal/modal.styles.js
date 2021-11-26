import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
    fontFamily: 'Open sans',
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
      padding: '20px 20px 50px',
      fontSize: '16px',
      color: theme.palette.black,
      '& b': {
        fontFamily: 'Open Sans',
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
    padding: '10px 16px',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderBottom: '2px solid #E2E8F0',
    fontSize: '20px',
    fontFamily: 'Open sans',
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
  fullscreen: {
    width: '90vw',
    height: '90vh'
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
      margin: 5,
      padding: '8px 15px',
      '&:first-child': {
        color: theme.palette.black,
        backgroundColor: theme.palette.white,
        border: '1px solid'
      },
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      },
      '@media (max-width: 500px)': {
        fontSize: '12px'
      }
    }
  }
}));
