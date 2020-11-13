import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: '700',
    alignSelf: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  featuresForm: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 600px)': {
      alignItems: 'center'
    },
    '@media (max-width: 300px)': {
      marginTop: '0'
    }
  },
  feature: {
    display: 'flex'
  },
  formControl: {
    marginRight: '0.7rem',
    minWidth: '9.5rem',
    '& .MuiInputBase-root .MuiSelect-root': {
      fontSize: '0.9rem'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.textColor
    },
    '& label': {
      fontSize: '0.9rem',
      color: theme.palette.textColor
    },
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '@media (max-width: 300px)': {
      margin: '0'
    }
  },
  selectPrice: {
    fontSize: '1rem',
    fontWeight: '700',
    color: theme.palette.textColor
  },
  price: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: theme.palette.textColor,
    '@media (max-width: 600px)': {
      fontSize: '1rem'
    },
    paddingTop: '1.5rem',
    alignSelf: 'center'
  },
  checkbox: {
    marginTop: '0.7rem',
    marginRight: '0.7rem',
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.button.normal.backgroundColor
    },
    '& .MuiFormControlLabel-root .MuiTypography-root': {
      fontSize: '0.9rem',
      color: theme.palette.textColor
    },
    '& .MuiFormControlLabel-root': {
      marginRight: '0',
      '@media (max-width: 300px)': {
        marginRight: '0.2rem'
      }
    },
    '@media (max-width: 300px)': {
      marginRight: '0'
    }
  }
}));
