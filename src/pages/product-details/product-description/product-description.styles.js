import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  details: {
    flex: '0 1 50%',
    paddingTop: '50px'
  },
  description: {
    borderBottom: `1px solid ${palette.productDescription.borderColor}`,
    '& div': {
      boxShadow: 'none',
      background: 'none'
    }
  },
  title: {
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'capitalize'
  },
  text: {
    '& p': {
      display: 'inline',
      fontSize: '14px',
      lineHeight: '19px',
      margin: '0'
    }
  }
}));
