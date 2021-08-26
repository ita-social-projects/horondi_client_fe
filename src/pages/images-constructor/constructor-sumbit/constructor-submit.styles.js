import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  heart: {
    fontSize: '2.5rem',
    color: '#ed0505',
    '&:hover': {
      transform: 'scale(1.15)',
      cursor: 'pointer',
      color: '#ed0505'
    },
    '@media (max-width: 1200px)': {
      marginTop: '10px'
    }
  },
  redHeart: {
    color: '#ed0505'
  },
  submit: {
    display: 'flex',
    '@media (max-width: 350px)': {
      flexDirection: 'column',
      alignItems: 'center'
    },
    '@media (max-width: 600px)': {
      '& *': {
        justifyContent: 'space-around'
      }
    },
    '@media (max-width: 1300px)': {
      display: 'contents'
    }
  },
  submitButton: {
    padding: '0.4rem 0.9rem',
    minWidth: '6rem',
    width: '40%',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 600px)': {
      padding: '0.2rem 0.6rem',
      fontSize: '0.9rem'
    },
    '@media (max-width: 1200px)': {
      width: '100%',
      marginTop: '10px'
    }
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      flexDirection: 'column-reverse'
    }
  }
}));
