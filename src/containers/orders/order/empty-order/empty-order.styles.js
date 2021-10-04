import { makeStyles } from '@material-ui/core/styles';

const titleStyles = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '34px',
  lineHeight: '46px',
  letterSpacing: '0.0025em'
};
const buttonStyles = {
  height: '52px',
  width: '255px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  borderRadius: '4px'
};

export const useStyles = makeStyles((theme) => ({
  whiteThemeButton: {
    ...buttonStyles,
    color: '#FEFEFE',
    backgroundColor: '#020202',
    '&:hover': {
      backgroundColor: '#3F3F3F'
    }
  },
  darkThemeButton: {
    ...buttonStyles,
    color: '#242424',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#020202',
      color: '#FEFEFE'
    }
  },
  whiteThemeTitle: {
    ...titleStyles,
    color: '#242424'
  },
  darkThemeTitle: {
    ...titleStyles,
    color: '#FEFEFE'
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
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}));
