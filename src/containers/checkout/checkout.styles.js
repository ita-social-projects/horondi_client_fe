import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '95vw',
    margin: '1% auto',
    color: theme.palette.textColor
  },
  checkoutHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 10px',
    width: '100%'
  },
  checkoutTitleInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  checkoutTitleInfoData: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  backBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '0 20px 0 0',
    height: '100%',
    width: 48,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.1s'
    }
  },

  checkoutTitle: ({ isLightTheme }) => ({
    fontSize: 28,
    fontWeight: 400,
    color: isLightTheme ? '#000000' : '#ffffff',
    margin: '10px 0 10px 0'
  }),

  checkoutYourOrderTitleData: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%'
  },
  checkoutTitleLine: {
    width: '80%',
    background: '#636262',
    height: 1
  }
}));
