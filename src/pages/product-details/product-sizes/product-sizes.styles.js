import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const sizeButton = {
    width: '36px',
    height: '36px',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '19px'
  };

  return {
    sizeButtons: {
      '& [data-cy="sizes"]': {
        borderRadius: '4px'
      }
    },
    label: {
      marginBottom: 8,
      display: 'block',
      fontWeight: '700',
      alignSelf: 'center',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      },
      marginRight: '10px'
    },
    error: {
      fontSize: '0.75rem',
      textAlign: 'left',
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
      fontWeight: '400',
      lineHeight: '1.66px',
      letterSpacing: '0.03333em',
      color: 'tomato',
      position: 'absolute',
      width: '160px',
      bottom: '0'
    },
    sizeButton: {
      ...sizeButton
    },
    selectedSize: {
      ...sizeButton,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      color: theme.palette.button.normal.color,
      '&:hover': {
        backgroundColor: theme.palette.card.selectedButton.backgroundColor,
        color: theme.palette.card.selectedButton.color
      },
      '&:disabled': {
        backgroundColor: 'rgba(2, 2, 2, 0.2)'
      }
    },
    container: {
      margin: '25px 0'
    }
  };
});
