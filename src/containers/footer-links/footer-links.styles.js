import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardBody: {
    flex: '1 1 auto',
    minHeight: '1px',
    padding: '1.25rem',
    '&:before': {
      boxSizing: 'border-box'
    },
    '&:after': {
      boxSizing: 'border-box'
    }
  },
  iconsBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.75rem'
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
    width: '40px',
    height: '40px',
    '&:hover': {
      color: '#000000',
      backgroundColor: '#ffffff'
    }
  }
}));
