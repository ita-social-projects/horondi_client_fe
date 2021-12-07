import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const heart = {
    marginTop: '1.2rem',
    marginRight: '1.2rem',
    fontSize: '2.5rem',
    color: theme.palette.white,
    '&:hover': {
      transform: 'scale(1.15)',
      cursor: 'pointer',
      color: '#ed0505'
    }
  };

  const button = {
    marginRight: '1rem',
    marginTop: '1rem',
    padding: '0.4rem 0.9rem',
    minWidth: '9rem',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    '@media (max-width: 600px)': {
      padding: '0.2rem 0.6rem',
      fontSize: '0.9rem'
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
      '@media (max-width: 350px)': {
        flexDirection: 'column',
        alignItems: 'center'
      },
      '@media (max-width: 400px)': {
        marginBottom: '1rem'
      },
      '@media (max-width: 600px)': {
        '& *': {
          justifyContent: 'space-around'
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
      }
    },
    unavailableButton: {
      ...button,
      backgroundColor: 'none'
    }
  };
});
