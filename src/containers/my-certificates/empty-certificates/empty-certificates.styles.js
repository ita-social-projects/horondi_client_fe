import { makeStyles } from '@material-ui/core/styles';

const titleStyles = {
  textAlign: 'center',
  fontSize: '32px',
  '@media (max-width: 600px)': {
    fontSize: '28px'
  }
};
const buttonStyles = {
  fontWeight: '600',
  fontSize: '14px',
  borderRadius: '4px',
  padding: '14px 72px',
  '@media (max-width: 600px)': { padding: '12px 48px' }
};

export const useStyles = makeStyles(({ palette }) => ({
  button: {
    ...buttonStyles,
    color: palette.button.normal.color,
    backgroundColor: palette.button.normal.backgroundColor,
    '&:hover': {
      color: palette.button.hover.color,
      backgroundColor: palette.button.hover.backgroundColor
    }
  },
  emptyTitle: {
    ...titleStyles,
    color: palette.textColor
  },
  root: {
    height: '611px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      height: '530px'
    }
  },
  defaultCertificateIcon: {
    '& svg': {
      height: '167px',
      width: '182px',
      '@media (max-width: 600px)': {
        height: '137px',
        width: '152px'
      }
    }
  }
}));
