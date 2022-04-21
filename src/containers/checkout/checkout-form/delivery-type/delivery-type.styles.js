import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  deliveryTypeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
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
    marginBottom: 10
  },
  error: {
    color: '#e60000',
    marginBottom: '2%'
  },
  formControl: {
    width: '100%',
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
    }
  },
  courierSelect: {
    height: 50,
    width: '100%',
    marginBottom: 10
  },
  tabs: {
    margin: '10px 0 15px 0',
    '& .Mui-selected': {
      backgroundColor: palette.button.normal.backgroundColor,
      color: palette.button.hover.color,
      border: `1px solid ${palette.button.normal.borderColor}`
    }
  },
  tab: {
    color: palette.textColor,
    border: `1px solid ${palette.button.normal.borderColor}`,
    textTransform: 'none',
    fontWeight: 600,

    '@media (max-width: 767px)': {
      fontSize: '14px'
    }
  }
}));
