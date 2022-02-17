import { makeStyles } from '@material-ui/core/styles';

const title = {
  fontWeight: '600',
  fontSize: '48px',
  lineHeight: '65px'
};

export const useStyles = makeStyles(({ palette }) => ({
  titleWrapper: {
    ...title
  },
  root: {
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  table: {
    width: '100%',
    '@media (max-width: 750px)': {
      width: '600px',
      overflowX: 'auto'
    },
    '@media (max-width: 600px)': {
      width: '400px',
      overflowX: 'auto'
    },
    '@media (max-width: 400px)': {
      width: '300px',
      overflowX: 'auto'
    },
    '& td': {
      padding: '32px 0',
      lineHeight: '28px',
      fontSize: '20px',
      fontWeight: 400,
      textAlign: 'center'
    },
    '& td:first-child': {
      textAlign: 'left',
      '& >div': {
        marginLeft: '5px'
      },
      '& img': {
        width: '220px',
        height: '133px',
        '@media (max-width: 600px)': {
          width: 'auto',
          height: 'auto'
        }
      }
    }
  },
  tableHeader: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: palette.cart.borderColor,
    '& >th': {
      padding: '10px 0',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      textAlign: 'center'
    },
    '@media (max-width: 425px)': {
      '& >th': {
        verticalAlign: 'text-top'
      }
    }
  }
}));
