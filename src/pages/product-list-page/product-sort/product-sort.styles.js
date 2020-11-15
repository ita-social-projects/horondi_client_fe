import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '.5rem',
    marginRight: '17px !important',
    display: 'inline-block',
    '& .MuiOutlinedInput-input': {
      height: '25px',
      fontSize: '13px',
      padding: '0 1.2rem 0 .4rem'
    },
    '& .MuiOutlinedInput-input:focus': {
      borderColor: 'black'
    },
    '& svg': {
      right: '0'
    }
  },
  sortByText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    '@media (max-width:400px)': {
      display: 'none'
    }
  },
sortDiv: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '25px !important',
    '@media (max-width:500px)': {
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

  activeButton: {
    backgroundColor: 'black',
    color: 'white'
  }
}));
