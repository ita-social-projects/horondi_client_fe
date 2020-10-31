import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardBody: {
    flex: 1,
    padding: '25px',
    '@media screen and (max-width: 552px)': {
      width: '50%'
    }
  },
  iconsBox: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    '@media screen and (max-width: 552px)': {
      textAlign: 'center'
    }
  },
  iconWrap: {
    margin: '0.5rem'
  },
  icon: {
    color: '#ffffff',
    fontSize: '3rem',
    transition: 'all 0.5s',
    padding: '0.5rem',
    borderRadius: '100%',
    width: '40px !important',
    height: '40px',
    '&:hover': {
      color: '#000000',
      backgroundColor: '#ffffff'
    }
  }
}));
