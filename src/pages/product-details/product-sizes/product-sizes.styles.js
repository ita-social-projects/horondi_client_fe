import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const sizeButton = {
    fontSize: '1rem',
    marginTop: '15px',
    width: '45px',
    height: '45px'
  };

  return {
    sizeButtons: {
      width: '50px',
      marginBottom: '0.8rem'
    },
    label: {
      fontWeight: '700',
      alignSelf: 'center',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      }
    },
    error: {
      fontSize: '0.75rem',
      textAlign: 'left',
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
      fontWeight: '400',
      lineHeight: '1.66',
      letterSpacing: '0.03333em',
      color: '#f44336',
      position: 'absolute',
      '@media (max-width: 600px)': {
        left: '34vw'
      }
    },
    sizeButton: {
      ...sizeButton,
      backgroundColor: theme.palette.card.childrenBackgroundColor
    },
    selectedSize: {
      ...sizeButton,
      backgroundColor: theme.palette.card.selectedButton.backgroundColor,
      color: theme.palette.card.selectedButton.color,
      '&:hover': {
        backgroundColor: theme.palette.card.selectedButton.backgroundColor
      }
    }
  };
});

export default useStyles;
