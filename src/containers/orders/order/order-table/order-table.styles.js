import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'block',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontHeight: 'normal',
    fontSize: '34px',
    lineHeight: '46px',
    letterSpacing: '0.0025em',
    color: '#242424'
  },
  root: {
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cartActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: 40
  },
  cartButton: {
    margin: '10px 0 10px 20px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    color: '#363636',
    outline: 'none',
    '&:active': {
      color: theme.palette.textColor
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  tableHeader: {
    borderTop: '1px solid #DADADA',
    borderBottom: '1px solid #DADADA',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.001em',
    color: '#242424',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    },
    '@media (max-width: 450px)': {
      display: 'none'
    }
  },
  quantity: {
    color: 'grey',
    fontWeight: 'lighter'
  }
}));
