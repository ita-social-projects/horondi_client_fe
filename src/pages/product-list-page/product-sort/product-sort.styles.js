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
    alignItems: 'center'
  },
  sortDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: '25px',
    '@media (max-width:959px)': {
      justifyContent: 'center',
      alignItems: 'baseline'
    },
    '& div': {
      '@media (max-width:500px)': {
        marginRight: '0',
        marginBottom: '.5rem',
        textAlign: 'center'
      }
    }
  },

  selectLabel: {
    marginRight: '5px'
  },

  sortSelect: {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0',
      borderRadius: '4px'
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 32px 10px 20px',
      width: '180px',
      borderRadius: '4px'
    }
  },
  dropdownMenuStyle: {
    width: '180px',
    '& .Mui-selected': {
      backgroundColor: theme.palette.type === 'light' ? theme.palette.white : '#424242',
      '&:hover': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.white : '#424242'
      }
    },
    '& ul': {
      justifyContent: 'flex-start',
      '& li': {
        justifyContent: 'flex-start',
        '&:hover': {
          backgroundColor: theme.palette.type === 'light' ? theme.palette.white : '#424242',
          color: '#3F51B5',
          marginLeft: '30px'
        }
      }
    }
  },

  activeButton: {
    backgroundColor: 'black',
    color: 'white'
  }
}));
