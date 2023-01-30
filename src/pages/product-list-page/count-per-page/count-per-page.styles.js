import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  items: {
    height: '100%',
    lineHeight: '100%',
    '& .MuiButton-outlined': {
      boxSizing: 'border-box',
      padding: '5px 15px',
      minWidth: 0,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px'
    }
  },

  pageCounter: {
    display: 'flex',
    columnGap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width:1020px)': { gridColumn: 2, justifySelf: 'end' },
    '@media (max-width:600px)': {
      gridColumn: 1,
      justifySelf: 'center'
    }
  },

  selectedButton: {
    backgroundColor: '#C4C4C4',
    color: theme.palette.button.hover.color,
    '&:hover': {
      backgroundColor: theme.palette.catalog.pageFilterCell.hover.backgroundColor
    }
  }
}));
