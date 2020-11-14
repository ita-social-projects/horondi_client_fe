import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const heart = {
    marginTop: '1.2rem',
    marginRight: '1.2rem',
    fontSize: '2.5rem',
    color: '#000000',
    '&:hover': {
      transform: 'scale(1.15)',
      cursor: 'pointer',
      color: '#ed0505'
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
        marginTop: '0'
      }
    },
    submitButton: {
      marginRight: '1rem',
      marginTop: '1rem',
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
        paddingRight: '0.5rem',
        fontSize: '0.9rem'
      }
    }
  };
});
