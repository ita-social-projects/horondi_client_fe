import { makeStyles } from '@material-ui/core/styles';

const titleStyles = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '34px',
  lineHeight: '46px',
  letterSpacing: '0.0025em',
  '@media (max-width: 600px)': {
    fontSize: '20px'
  }
};
const buttonStyles = {
  height: '52px',
  width: '255px',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  borderRadius: '4px'
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
  image: {
    height: '182px',
    width: '167px'
  },
  root: {
    height: '611px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  defaultBackpackIcon: {
    width: '167px',
    height: '182px'
  }
}));
