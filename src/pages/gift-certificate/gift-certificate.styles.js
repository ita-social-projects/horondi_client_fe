import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = {
  height: '56px',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  borderRadius: '4px'
};

export const useStyles = makeStyles(({ palette }) => ({
  chooseCertificate: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '0px',
    '@media (max-width: 420px)': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  checkboxWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 420px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  lowerWrapper: {
    gap: 32,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    marginBottom: '128px',
    '@media (max-width: 490px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '320px'
  },
  purchaseButton: {
    ...buttonStyles,
    color: palette.button.normal.color,
    marginTop: '15px',
    backgroundColor: palette.button.normal.backgroundColor,
    '&:hover': {
      color: palette.button.hover.color,
      backgroundColor: palette.button.hover.backgroundColor
    },
    '&:disabled': {
      color: palette.button.disabled.color,
      backgroundColor: palette.button.disabled.backgroundColor
    }
  }
}));
