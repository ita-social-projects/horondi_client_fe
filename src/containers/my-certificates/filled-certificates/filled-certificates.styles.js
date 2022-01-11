import { makeStyles } from '@material-ui/core/styles';

const button = {
  fontWeight: '500',
  fontSize: '14px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase'
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '235px',
    padding: 15
  },
  totalWrapper: {
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0.0015em',
    '@media (max-width: 850px)': {
      marginTop: '20px'
    },
    color: palette.textColor,
    '& a': {
      width: '100%'
    }
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    gap: '30px',
    '& >div': {
      display: 'flex',
      gap: '8px'
    }
  },
  buyButton: {
    ...button,
    width: '345px',
    padding: '12px',
    background: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,

    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  },
  addButton: {
    ...button,
    width: '345px',
    padding: '12px',
    background: palette.white,
    border: `1px solid ${palette.button.normal.borderColor}`,
    color: palette.black,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  },
  certificateTable: {
    flexGrow: 1,
    '@media (max-width: 813px)': {
      marginRight: 'initial'
    }
  }
}));
