import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    '@media (max-width: 750px)': { position: 'absolute', top: '40px', right: '12px' },
    '@media (max-width: 500px)': {
      position: 'static',
      gridRow: 2
    }
  },
  sizeButton: {
    width: '36px',
    height: '36px',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '19px'
  },
  selectedSize: {
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
  label: {
    fontSize: '15px',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    },
    '@media (max-width: 500px)': {
      fontSize: '14px'
    },
    marginRight: '10px'
  },
  sizeName: {
    fontWeight: '600'
  }
}));
