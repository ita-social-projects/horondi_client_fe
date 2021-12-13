import { makeStyles } from '@material-ui/core/styles';

const title = {
  display: 'block',
  fontStyle: 'normal',
  fontHeight: 'normal',
  fontWeight: 'normal',
  fontSize: '34px',
  lineHeight: '46px',
  letterSpacing: '0.0025em'
};
const tableHeader = {
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

export const useStyles = makeStyles(({ palette }) => ({
  titleWrapper: {
    ...title
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
  tableHeader: {
    ...tableHeader,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: palette.cart.borderColor
  }
}));
