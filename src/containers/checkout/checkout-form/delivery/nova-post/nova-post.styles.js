import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  novaPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '2%'
  },
  error: {
    color: '#e60000',
    marginTop: 15
  },
  novaPostTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: palette.textColor
  },
  novaPostData: {
    marginBottom: '10px'
  },
  dataInput: {
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
  disabled: {
    border: '1px solid red'
  }
}));
