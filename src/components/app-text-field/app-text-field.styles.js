import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  input: {
    '& label.Mui-focused': {
      color: theme.palette.text.primary
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.primary
      }
    }
  },
  helperText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: theme.typography.h4.lineHeight,
    marginTop: 0,
    '& .MuiTypography-caption': {
      verticalAlign: 'top'
    }
  }
}));
