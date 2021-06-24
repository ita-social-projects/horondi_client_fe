import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  items: {
    height: '25px !important',
    marginLeft: '.5rem',
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
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    color: "rgba(0, 0, 0, 0.54)",
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0, 0.10)"
    }
  }
}));
