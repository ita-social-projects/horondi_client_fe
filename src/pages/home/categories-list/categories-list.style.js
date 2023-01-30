import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '660px',
    minHeight: '550px',
    marginTop: '50px',
    '& > div': {
      width: '100%'
    },
    '@media (max-width: 768px)': {
      '& .react-multiple-carousel__arrow': {
        width: '40px',
        height: '40px',
        zIndex: 0
      }
    }
  },
  catalogInner: {
    maxWidth: '1170px',
    '@media (max-width: 1146px)': {
      maxWidth: '800px'
    },
    '@media (max-width: 760px)': {
      maxWidth: '400px'
    }
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
    color: theme.palette.textColor
  }
}));
