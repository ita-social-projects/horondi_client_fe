import { makeStyles } from '@material-ui/core/styles';

const title = {
  display: 'block',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontHeight: 'normal',
  fontWeight: 'normal',
  fontSize: '34px',
  lineHeight: '46px',
  letterSpacing: '0.0025em'
};

export const useStyles = makeStyles((theme) => ({
  lightThemeTitleWrapper: {
    ...title,
    color: '#242424'
  },
  darkThemeTitleWrapper: {
    ...title,
    color: '#FEFEFE'
  },
  root: {
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tableHeader: {
    borderTop: '1px solid #DADADA',
    borderBottom: '1px solid #DADADA',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.001em',
    color: '#242424',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    },
    '@media (max-width: 450px)': {
      display: 'none'
    }
  }
}));
