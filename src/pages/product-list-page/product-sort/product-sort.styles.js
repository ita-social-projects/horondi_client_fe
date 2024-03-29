import { makeStyles } from '@material-ui/core';

export const searchStyles = {
  variant: 'outlined'
};

export const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '1rem',
    marginRight: '17px',
    display: 'inline-block',
    '& .MuiOutlinedInput-input': {
      height: '39px',
      fontSize: '14px',
      padding: '0 1.2rem 0 1rem'
    },
    '& .MuiOutlinedInput-input:focus': {
      borderColor: 'black'
    },
    '& svg': {
      right: '.7rem'
    }
  },
  sortByText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width:1020px)': {
      flexWrap: 'wrap',
      gridColumn: 2,
      justifySelf: 'end'
    },
    '@media (max-width:600px)': {
      gridColumn: 1,
      justifySelf: 'center'
    }
  },
  sortDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '24px',
    '@media (max-width:1020px)': {
      display: 'grid',
      gridTemplateColumns: 'fit-content(100px)',
      gridAutoRows: 'auto',
      alignItems: 'end'
    },
    '@media (max-width:600px)': {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      marginBottom: '12px'
    }
  },

  selectLabel: {
    marginRight: '5px'
  },

  sortSelect: {
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0'
      },
      '& .MuiOutlinedInput-input': {
        backgroundColor: 'rgb(220,220,220, 0.2)'
      }
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 32px 10px 20px',
      width: '150px',
      borderRadius: '4px'
    }
  },
  dropdownMenuStyle: {
    width: '150px',
    '& .Mui-selected': {
      backgroundColor: theme.palette.type === 'light' ? theme.palette.white : '#424242',
      border: '0',
      '&:hover': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.white : '#424242'
      }
    },
    '& ul': {
      '& li': {
        alignItems: 'flex-start',
        textIndent: '20px',
        '&:hover': {
          backgroundColor: theme.palette.type === 'light' ? theme.palette.white : '#424242',
          color: '#3F51B5',
          marginLeft: '15px'
        },
        '& .MuiTouchRipple-root span': {
          opacity: 0
        }
      }
    }
  },

  activeButton: {
    backgroundColor: 'black',
    color: 'white'
  },
  button: {
    padding: '9px 0',
    fontSize: '0.9em',
    display: 'none',
    color: theme.palette.backgroundColor,
    backgroundColor: theme.palette.textColor,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 959px)': {
      display: 'block',
      gridColumn: 1,
      gridRow: 1,
      maxWidth: '255px'
    }
  }
}));
