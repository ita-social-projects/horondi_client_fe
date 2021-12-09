import { makeStyles } from '@material-ui/core';

export const searchStyles = {
  variant: 'outlined'
};

export const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '1rem',
    marginRight: '17px !important',
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
    lineHeight: '25px !important',
    '@media (max-width:959px)': {
      justifyContent: 'center !important',
      alignItems: 'baseline'
    },
    '& div': {
      '@media (max-width:500px)': {
        marginRight: '0 !important',
        marginBottom: '.5rem',
        textAlign: 'center'
      }
    }
  },

  selectLabel: {
    marginRight: '5px'
  },

  sortSelect: {
    '& .MuiOutlinedInput-input': {
      padding: '10px 32px 10px 15px'
    }
  },

  activeButton: {
    backgroundColor: 'black',
    color: 'white'
  }
}));
