import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: (isLightTheme) => ({
    fontStyle: 'normal',
    marginTop: '50px',
    fontWeight: 'normal',
    fontSize: '38px',
    lineHeight: '65px',
    marginBottom: '80px',
    color: isLightTheme ? '#242424' : '#FEFEFE',
    '@media screen and (max-width:768px)': {
      fontSize: '28px'
    }
  }),
  table: {
    flexGrow: 1,
    '@media (max-width: 813px)': {
      marginRight: 'initial'
    },
    width: '100%',
    '@media (max-width: 1110px)': {
      width: '750px',
      overflowX: 'auto'
    },
    '@media (max-width: 920px)': {
      width: '550px',
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
