import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => ({
  topUkrpost: {
    margin: '30px 0 15px 0',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '20px'
  },
  contactBy: {
    margin: '0 0 15px 0',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px'
  },
  selectWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px 30px',
    marginBottom: 0,

    '@media (max-width: 575px)': {
      gridTemplateColumns: '1fr'
    }
  },
  formControl: {
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    }
  },
  error: {
    margin: '5px 0 10px 10px',
    color: '#e60000'
  },
  addressTitle: {
    margin: '50px 0 25px 0',
    fontWeight: 700,
    fontSize: 23,
    color: palette.textColor
  },
  addressWrapper: {
    marginBottom: '90px'
  },
  addressInput: {
    marginBottom: '15px',
    '& label.Mui-focused': {
      color: palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.textColor
      }
    }
  },
  addressInputCode: {
    width: '160px'
  }
}));
