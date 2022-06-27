import { makeStyles } from '@material-ui/core/styles';

const baseStyles = {
  '& .MuiFormControl-root': {
    width: '100%',
  },
  '& .MuiInputBase-root': {
    width: '350px',
    '@media (max-width: 1000px)': {
      width: '250px'
    },
    '@media (max-width: 800px)': {
      width: '200px'
    },
    '@media (max-width: 600px)': {
      width: '180px'
    },
    '@media (max-width: 556px)': {
      width: '100%',
    }
  },
  '& .MuiInput-input': {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    '@media (max-width: 900px)': {
      marginRight: '10px'
    }
  },
  '& .MuiInput-underline:after, & .MuiInput-underline:before': {
    display: 'none'
  },
  '& .MuiInputAdornment-positionEnd': {
    paddingTop: '7px',
    marginRight: '-20px'
  }
};

export const useStyles = makeStyles((theme, color) => ({
  root: () => ({
    background: theme.palette.seachBar.backgroundColor,
    margin: '5px 37px',

    borderRadius: '6px',
    '@media (min-width: 556px)': {
      position: 'relative',
      flex: 'unset'
    },
    '@media (max-width: 556px)': {
      flex: '1',
      position: 'absolute',
      top: '40px',
      margin: '5px 0',
      width: '100%'
    },
    ...baseStyles,
    '& .MuiInput-input': {
      padding: '12px 5px 12px 46px',
      color: theme.palette.seachBar.color
    }
  }),
  notFromNavbar: () => ({
    ...baseStyles,
    borderRadius: '4px',
    background: 'inherit',
    border: theme.palette.seachBar.border,
    '& .MuiInputBase-root': {
      width: '255px'
    },
    '& .MuiInput-input': {
      padding: '12px 5px 12px 12px',
      color
    },
    '& .MuiSvgIcon-root': {
      display: 'none'
    },
    '& .MuiInputAdornment-root': {
      display: 'none'
    }
  }),
  clearInputIcon: () => ({
    color: '#FFF',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'background-color 0.3s linear',
    '&:hover': {
      backgroundColor: '#000'
    }
  })
}));

