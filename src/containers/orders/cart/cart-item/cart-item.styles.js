import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    '@media (max-width: 450px)': {
      display: 'grid',
      gridColumnGap: '0px',
      gridRowGap: '0px'
    }
  },
  photoCart: {
    '@media (max-width: 450px)': {
      gridArea: '1 / 1 / 3 / 2',
      border: 0
    }
  },
  image: (props) => ({
    '& > a': {
      background: `url('${props.image}')no-repeat center center`,
      backgroundSize: 'cover',
      borderRadius: 5,
      width: '100px',
      height: '100px',
      '@media (max-width: 768px)': {
        borderRadius: '50%'
      }
    }
  }),
  description: {
    textAlign: 'center',
    lineHeight: '30px',
    '@media (max-width: 450px)': {
      gridArea: '1 / 2 / 3 / 4',
      border: 0
    }
  },
  itemDescription: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0.0025em',
    color: '#242424'
  },
  itemName: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    color: '#242424'
  },
  price: {
    textAlign: 'center',
    '@media (max-width: 450px)': {
      gridArea: '3 / 2 / 4 / 3',
      marginTop: '15px'
    },
    '@media (max-width: 377px)': {
      marginTop: 5
    }
  },
  doneIcon: {
    position: 'relative',
    top: 4,
    fontSize: '1.5em'
  },
  product: {
    display: 'flex',
    alignItems: 'center'
  },
  quantityWrapper: {
    width: '250px',
    '@media (max-width: 450px)': {
      gridArea: '3 / 1 / 4 / 2',
      width: 'auto'
    }
  },
  selectSizeStyle: {
    border: '1px solid rgba(91, 91, 91, 0.2)',
    width: '71px',
    height: '40px'
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer',
    '@media (max-width: 450px)': {
      margin: 0
    }
  },
  priceWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImg: {
    marginLeft: 20,
    '@media (max-width: 450px)': {
      width: '150%',
      marginLeft: '-25%'
    }
  },
  delete: {
    gridArea: '3 / 3 / 4 / 4',
    marginTop: '15px'
  }
}));
