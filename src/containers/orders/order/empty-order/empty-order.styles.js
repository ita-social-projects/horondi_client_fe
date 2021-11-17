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

export const useStyles = makeStyles(({ palette }) => ({
  button: {
    ...buttonStyles,
    color: palette.type === 'light' ? '#FEFEFE' : '#242424',
    backgroundColor: palette.type === 'light' ? '#020202' : '#FFFFFF',
    '&:hover': {
      backgroundColor: palette.type === 'light' ? '#3F3F3F' : '#020202',
      color: palette.type === 'light' ? '#242424' : '#FEFEFE'
    }
  },
  title: {
    ...titleStyles,
    color: palette.type === 'light' ? '#242424' : '#FEFEFE'
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
