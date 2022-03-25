import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  deliveryTypeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%'
  },
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
    marginLeft: '25px'
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
    marginBottom: 10,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  },
  error: {
    color: '#e60000',
    marginBottom: '2%'
  },
  formControl: {
    width: 600,
    marginBottom: 10,
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '80%',
      margin: 0
    }
  },
  courierSelect: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    '@media (max-width: 768px)': {
      width: '100%'
    }
  }
}));
