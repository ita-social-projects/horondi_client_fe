import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  details: {
    gridColumn: 2,
    gridRow: 2,
    '@media (max-width: 900px)': {
      gridColumn: '1/3',
      gridRow: 3
    },
    '@media (max-width: 600px)': {
      paddingTop: '10px'
    }
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
    lineHeight: '18px',
    '& p': {
      display: 'inline',
      fontSize: '14px',
      lineHeight: '19px',
      margin: '0'
    }
  }
}));
