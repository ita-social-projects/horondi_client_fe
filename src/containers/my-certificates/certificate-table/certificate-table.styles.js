import { makeStyles } from '@material-ui/core/styles';

const title = {
  fontWeight: 'normal',
  fontSize: '2.375em',
  margin: '67px',
  '@media (max-width: 550px)': {
    fontSize: '33px',
    margin: '48px'
  },
  '@media (max-width: 380px)': {
    fontSize: '26px',
    margin: '25px'
  }
};

export const useStyles = makeStyles(({ palette }) => ({
  titleWrapper: {
    ...title
  },
  root: {
    maxWidth: '1110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px'
  },
  table: {
    width: '100%',
    '@media (max-width: 700px)': {
      maxWidth: '600px',
      overflowX: 'auto'
    },
    '& td': {
      padding: '24px 0px',
      lineHeight: '28px',
      fontSize: '20px',
      fontWeight: 400,
      '@media (max-width: 700px)': {
        fontSize: '15px',
        lineHeight: '20px'
      }
    },
    '& td:last-child': {
      color: palette
    },
    '& td:first-child': {
      textAlign: 'left',
      '& img': {
        '@media (max-width: 700px)': {
          width: '134px',
          height: '63px',
          marginRight: '5px'
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
