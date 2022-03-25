import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const heart = {
    marginTop: '1.2rem',
    marginRight: '1.2rem',
    fontSize: '2.5rem',
    color: theme.palette.textColor,
    '&:hover': {
      transform: 'scale(1.15)',
      cursor: 'pointer',
      color: '#ed0505'
    }
  };

  const button = {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    marginRight: '1rem',
    padding: '14px 25px',
    textTransform: 'none',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      padding: '10px 15px',
      fontSize: '0.9rem'
    },
    '@media (max-width: 400px)': {
      margin: '5px 0',
      width: '100%'
    }
  };

  return {
    heart: {
      ...heart
    },
    redHeart: {
      ...heart,
      color: '#ed0505'
    },
    submit: {
      display: 'flex',
      '@media (max-width: 400px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '& *': {
          justifyContent: 'space-around',
          wigth: '100%'
        }
      },
      '@media (max-width: 1300px)': {
        display: 'flex',
        marginTop: '0'
      }
    },
    toCart: {
      ...button,
      border: '1px solid'
    },

    submitButton: {
      ...button,
      background: theme.palette.textColor,
      color: theme.palette.backgroundColor,
      '&:hover': {
        backgroundColor: theme.palette.button.hover.backgroundColor,
        color: theme.palette.button.hover.color
      },
      '&:disabled': {
        backgroundColor: 'rgba(2, 2, 2, 0.2)'
      }
    },
    unavailableButton: {
      ...button,
      backgroundColor: 'none'
    }
  };
});
