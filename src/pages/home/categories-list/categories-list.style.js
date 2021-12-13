import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    '& > div': {
      width: '100%'
    },
    '@media (max-width: 768px)': {
      '& .react-multiple-carousel__arrow': {
        width: '40px !important',
        height: '40px !important',
        zIndex: 0
      }
    }
  },
  catalogInner: {
    margin: '96px 165px'
  },
  categoryTitle: {
    margin: '0px',
    marginLeft: '15px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '46px',
    letterSpacing: '0.0025em',
    fontSize: '34px',
    color: theme.palette.textColor,
    zIndex: '10'
  }
}));
