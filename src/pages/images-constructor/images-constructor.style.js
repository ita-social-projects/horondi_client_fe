import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  constructorWrapper: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainHeader: {
    fontSize: '24px'
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 100px'
  },
  formWrapper: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      margin: '15px 0'
    }
  },
  imageContainer: {
    maxHeight: '470px',
    width: '35%'
  },
  image: {
    width: '100%'
  },
  infoWrapper: {
    display: 'flex'
  },
  pricesInfoWrapper: {
    width: '25%'
  },
  headerWrapper: {
    marginLeft: '5%'
  },
  textWrapper: {
    fontSize: '17px',
    marginBottom: '12px'
  },
  priceWrapper: {
    '& ul': {
      '& li': {
        width: '150px',
        fontSize: '17px',
        listStyleType: 'none'
      }
    }
  },
  priceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '100%'
  },
  li: {
    marginTop: '25px'
  }
}));
