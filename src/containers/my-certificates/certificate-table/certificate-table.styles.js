import { makeStyles } from '@material-ui/core/styles';

const title = {
  fontWeight: 'normal',
  fontSize: '2.375em',
  margin: '67px'
};

export const useStyles = makeStyles(({ palette }) => ({
  titleWrapper: {
    ...title
  },
  root: {
    width: '1110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px'
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
      padding: '24px 0px',
      lineHeight: '28px',
      fontSize: '20px',
      fontWeight: 400,
      textAlign: 'center'
    },
    '& td:last-child': {
      color: palette
    },
    '& td:first-child': {
      textAlign: 'left',
      '& img': {
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
      textAlign: 'left'
    }
  }
}));
