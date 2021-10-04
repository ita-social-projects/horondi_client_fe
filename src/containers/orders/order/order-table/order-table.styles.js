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
const tableHeader = {
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
  }
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
  table: {
    width: '100%',
    '@media (max-width: 750px)': {
      width: '600px',
      overflowX: 'auto'
    },
    '@media (max-width: 600px)': {
      width: '400px',
      overflowX: 'auto'
    },
    '@media (max-width: 400px)': {
      width: '300px',
      overflowX: 'auto'
    }
  },
  lightThemeTableHeader: {
    ...tableHeader,
    borderTop: '1px solid rgba(91, 91, 91, 0.2)',
    borderBottom: '1px solid rgba(91, 91, 91, 0.2)'
  },
  darkThemeTableHeader: {
    ...tableHeader,
    borderTop: '1px solid #5B5B5B',
    borderBottom: '1px solid #5B5B5B'
  }
}));
