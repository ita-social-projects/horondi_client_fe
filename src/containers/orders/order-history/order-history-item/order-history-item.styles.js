import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '15px auto',
    borderRadius: '5px'
  },

  heading: {
    textTransform: 'uppercase',
    background: palette.orderHistoryHeading.background,
    padding: '10px',
    margin: '30px 0 20px',
    display: 'flex',
    width: '100%',
    height: '40px',
    fontSize: '14px',
    fontWeight: '600',
    justifyContent: 'space-between',
    '@media (max-width: 576px)': {
      fontSize: '11px'
    }
  },
  headingStatus: {
    display: 'flex'
  },
  info: {
    width: '50%'
  },
  status: {
    fontWeight: 500,
    fontSize: '1.3em'
  },
  total: {
    display: 'block',
    width: '25%'
  },
  blockNone: {
    display: 'none'
  },
  accordion: {
    display: 'block'
  },
  imagesRow: {
    height: 40,
    margin: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagesEmpty: ({ isLightTheme }) => ({
    width: 40,
    height: 40,
    margin: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: !isLightTheme ? '1px solid #636262' : '1px solid snow'
  }),
  imagesInner: {
    maxWidth: '100%',
    width: 'auto',
    maxHeight: '100%',
    height: 'auto'
  },
  bottom: {
    display: 'flex',
    margin: '20px 40px',
    fontSize: '1.2rem',
    textAlign: 'right',
    justifyContent: 'flex-end'
  },
  totalText: {
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '28px',
    textAlign: 'center',
    padding: 5,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      fontSize: '18px'
    },
    '@media (max-width: 576px)': {
      fontSize: '14px'
    },
    '& div': {
      width: '60%',
      textAlign: 'right'
    },
    '& svg': {
      fontSize: '20px',
      marginRight: '5px'
    }
  }
}));
