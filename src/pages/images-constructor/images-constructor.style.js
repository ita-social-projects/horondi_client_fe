import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
    padding: '50px 100px',
    '@media (max-width: 768px)': {
      padding: 0,
      flexDirection: 'column'
    }
  },
  formWrapper: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '100%'
    },
    '& > div': {
      margin: '15px 0'
    }
  },
  imageContainer: {
    maxHeight: '650px',
    width: '35%',
    '@media (max-width: 768px)': {
      width: '100%',
      marginTop: '50px',
      marginBottom: '50px'
    }
  },
  image: {
    width: '100%'
  },
  infoWrapper: {
    display: 'flex'
  },
  pricesInfoWrapper: {
    width: '25%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  textWrapper: {
    fontSize: '17px',
    marginBottom: '12px',
    '& ul': {
      position: 'relative',
      padding: 0
    },
    '@media (max-width: 768px)': {
      '& ul': {
        padding: 0
      }
    }
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
  },
  line: {
    width: '100%',
    background: '#00000050',
    margin: '10px 0 10px 0'
  },
  bottomLine: {
    height: '2px'
  },
  topLine: {
    height: '1px'
  },
  button: {
    color: theme.palette.button.normal.color,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  modal: {
    width: '90vw',
    height: '90vh'
  }
}));
