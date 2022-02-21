import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  items: {
    height: '100%',
    marginLeft: '1rem',
    lineHeight: '100%',
    '& .MuiButton-outlined': {
      boxSizing: 'border-box',
      padding: '0.3rem 1rem',
      minWidth: 0,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px'
    }
  },

  pageCounter: {
    minHeight: '31px'
  },

  selectedButton: {
    backgroundColor: '#C4C4C4',
    color: theme.palette.button.hover.color,
    '&:hover': {
      backgroundColor: theme.palette.catalog.pageFilterCell.hover.backgroundColor
    }
  }
}));
