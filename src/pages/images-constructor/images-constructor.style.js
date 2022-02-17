import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  constructorWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 10px',
    '& > hr': {
      border: '1px solid rgba(91, 91, 91, 0.2)',
      width: '100%',
      marginTop: '30px',
      marginBottom: '48px',
      '@media (max-width: 670px)': {
        margin: 0
      }
    }
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > h1': {
      marginTop: '72px',
      fontFamily: 'Montserrat',
      fontWeight: 400,
      letterSpacing: 0.5,
      lineHeight: '65px',
      fontStyle: 'normal',
      fontSize: '48px',
      '@media (max-width: 670px)': {
        padding: '0px',
        fontSize: '32px',
        marginTop: '42px'
      },
      '@media (max-width: 346px)': {
        fontSize: '27px',
        marginTop: '82px'
      }
    }
  },
  mainHeader: {
    fontSize: '24px'
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '255px 1fr 255px',
    gridGap: '30px',
    marginBottom: 48,
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))'
    },
    '@media (max-width: 768px)': {
      padding: 0,
      flexDirection: 'column'
    }
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '100%'
    },
    '& > div': {
      margin: '10px 0'
    }
  },
  imageContainer: {
    boxShadow: '0px 8px 16px #6e6d6d29',
    borderRadius: '6px',
    height: '90%',
    width: '100%',
    padding: '20px 0px',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
      marginTop: '50px',
      marginBottom: '50px'
    }
  },
  image: {
    width: '50%',
    height: '100%',
    objectFit: 'contain'
  },
  infoWrapper: {
    display: 'flex'
  },
  pricesInfoWrapper: {
    paddingTop: '15px',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '600',
    paddingBottom: '12px',
    borderBottom: '1px solid #959292'
  },
  headerWrapperH1: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '8px'
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
    minWidth: '100%',
    fontWeight: '600',
    '&>span:nth-child(2n)': {
      textAlign: 'right'
    }
  },
  li: {
    margin: '7px 0'
  },
  line: {
    width: '100%',
    background: '#959292',
    margin: '18px 0 18px 0'
  },
  bottomLine: {
    height: '1px'
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
  },
  menuItem: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '16px'
  },
  selectItem: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px'
  },
  formHelper: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '13px'
  },
  buttonOptions: {
    display: 'none',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '16px'
  },
  pluse: {
    fontSize: '24px',
    margin: '0 5px'
  }
}));
