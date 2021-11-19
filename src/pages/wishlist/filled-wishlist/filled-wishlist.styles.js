import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: (isLightTheme) => ({
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    marginTop: '50px',
    fontWeight: 'normal',
    fontSize: '38px',
    lineHeight: '65px',
    marginBottom: '80px',
    color: isLightTheme ? '#242424' : '#FEFEFE'
  }),
  table: {
    flexGrow: 1,
    marginRight: 50,
    '@media (max-width: 813px)': {
      marginRight: 'initial'
    },
    width: '1110px',
    '@media (max-width: 1110px)': {
      width: '750px',
      overflowX: 'auto'
    },
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
    },
    marginBottom: '150px'
  },
  tableHeader: () => ({
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
    borderTop: `1px solid ${palette.cart.borderColor}`,
    borderBottom: `1px solid ${palette.cart.borderColor}`
  })
}));
