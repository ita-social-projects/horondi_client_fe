import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = {
  height: '56px',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  borderRadius: '4px'
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2rem 5rem 2rem',
    width: '90%',
    margin: '0 auto'
  },
  pageTitle: {
    display: 'flex',
    fontWeight: '500',
    justifyContent: 'center',
    fontSize: '48px',
    borderBottom: '1px solid gray',
    padding: '72px 0'
  },
  chooseCertificate: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '0px'
  },
  checkboxWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lowerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px'
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '345px'
  },
  purchaseButton: {
    ...buttonStyles,
    color: palette.button.normal.color,
    marginTop: '15px',
    backgroundColor: palette.button.normal.backgroundColor,
    '&:hover': {
      color: palette.button.hover.color,
      backgroundColor: palette.button.hover.backgroundColor
    }
  },
  textField: {
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.textColor
    }
  }
}));
