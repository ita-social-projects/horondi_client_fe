import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '12px',
    gap: '12px',
    '@media (max-width: 750px)': { position: 'absolute', top: '54px', right: '4px', marginTop: 0 },
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
    '@media (max-width: 750px)': {
      textAlign: 'end'
    },
    '@media (max-width: 500px)': {
      textAlign: 'start',
      fontSize: '14px'
    }
  },
  sizeName: {
    fontWeight: '600'
  }
}));
