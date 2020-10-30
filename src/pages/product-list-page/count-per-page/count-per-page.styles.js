import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  items: {
    height: '25px !important',
    lineHeight: '25px !important',
    '& .MuiButton-outlined': {
      boxSizing: 'border-box',
      padding: '0 1rem',
      minWidth: 0,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px'
    }
  },

  selectedButton: {
    backgroundColor: theme.palette.card.selectedButton.backgroundColor,
    color: theme.palette.card.selectedButton.color,
    '&:hover': {
      backgroundColor: theme.palette.card.selectedButton.backgroundColor
    }
  }
}));
export default useStyles;
