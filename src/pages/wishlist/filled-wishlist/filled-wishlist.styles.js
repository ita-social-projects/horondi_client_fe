import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative'
  },
  table: {
    flexGrow: 1,
    width: '100%',
    marginBottom: '150px',
    '@media (max-width: 996px)': {
      marginBottom: 100
    },
    '@media (max-width: 768px)': {
      marginBottom: 50
    },
    '@media (max-width: 576px)': {
      marginBottom: 0
    }
  },
  tableHeader: () => ({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.001em',
    color: '#242424',
    paddingBottom: 10,
    paddingTop: 10,
    '& > th': {
      padding: 8
    },
    borderTop: `1px solid ${palette.cart.borderColor}`,
    borderBottom: `1px solid ${palette.cart.borderColor}`
  }),
  pathBack: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));
