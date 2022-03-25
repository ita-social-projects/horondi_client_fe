import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  novaPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '2%'
  },
  error: {
    color: '#e60000',
    marginTop: 15
  },
  novaPostTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: palette.textColor,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  },
  novaPostData: {
    marginBottom: '2%'
  },
  dataInput: {
    width: 600,
    marginBottom: '1%',
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
    },
    '@media (max-width: 768px)': {
      width: '80%'
    }
  },
  disabled: {
    border: '1px solid red'
  }
}));
