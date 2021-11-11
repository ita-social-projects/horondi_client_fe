import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  btnWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 813px)': {
      alignItems: 'center',
      marginBottom: 50
    }
  },
  radioBtn: {
    fontSize: 14,
    color: palette.textColor
  },
  radioBtnWrapper: {
    paddingBottom: 20,
    marginLeft: '11%'
  },
  btnCreateOrder: {
    margin: '20px 0',
    borderRadius: 5,
    color: palette.button.normal.color,
    backgroundColor: palette.button.normal.backgroundColor,
    '&:hover': {
      color: palette.button.hover.color,
      backgroundColor: palette.button.hover.backgroundColor
    }
  },
  btnCatalogue: {
    cursor: 'pointer',
    color: '#363636',
    '&:active': {
      color: palette.textColor
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  deliveryTitle: {
    fontSize: 23,
    fontWeight: 700,
    color: palette.textColor,
    marginLeft: '10%',
    marginBottom: 10,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }
}));
