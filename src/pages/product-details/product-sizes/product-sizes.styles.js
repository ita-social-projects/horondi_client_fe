import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const sizeButton = {
    width: '36px',
    height: '36px',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 19
  };

  return {
    sizeButtons: {
      '& [data-cy="sizes"]': {
        border: `1px solid ${theme.palette.black}`,
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
      lineHeight: '1.66',
      letterSpacing: '0.03333em',
      color: 'tomato',
      position: 'absolute',
      width: '160px',
      bottom: '0'
    },
    sizeButton: {
      ...sizeButton,
      backgroundColor: theme.palette.card.childrenBackgroundColor
    },
    selectedSize: {
      ...sizeButton,
      backgroundColor: theme.palette.black,
      color: theme.palette.white,
      '&:hover': {
        backgroundColor: theme.palette.card.selectedButton.backgroundColor
      }
    },
    container: {
      marginBottom: '25px'
    }
  };
});
