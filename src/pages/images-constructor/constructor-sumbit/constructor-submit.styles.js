import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  heart: {
    display: 'none',
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
    width: '100%',
    height: '56px',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    margin: '14px 0 18px 0',
    borderRadius: '4px',
    fontWeight: '600',
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
  buttonStyle: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.textColor,
    background: theme.backgroundColor,
    color: theme.textColor,
    height: '56px',
    borderRadius: '4px',
    fontWeight: '600'
  },
  submitContainer: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1200px)': {
      flexDirection: 'column-reverse'
    }
  }
}));
