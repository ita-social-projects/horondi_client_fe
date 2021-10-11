import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 813px)': {
      alignItems: 'center',
      marginBottom: 50
    }
  },
  radioBtn: {
    fontSize: 14
  },
  radioBtnWrapper: {
    paddingBottom: 20,
    marginLeft: '11%'
  },
  btnCreateOrder: {
    margin: '20px 0',
    borderRadius: 5,
    color: theme.palette.button.normal.color,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  btnCatalogue: {
    cursor: 'pointer',
    color: '#363636',
    '&:active': {
      color: theme.palette.textColor
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  deliveryTitle: {
    fontSize: 23,
    fontWeight: 700,
    marginLeft: '10%',
    marginBottom: 10,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }
}));
