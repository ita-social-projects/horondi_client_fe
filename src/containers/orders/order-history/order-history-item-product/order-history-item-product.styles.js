import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: '0'
  },
  image: {
    width: '130px',
    height: '133px',
    objectFit: 'cover',
    '@media (max-width: 768px)': {
      width: '84px',
      height: '110px'
    },
    '@media (max-width: 576px)': {
      width: '57px',
      height: '68px'
    }
  },
  imgCanvasItem: {
    width: 130,
    height: 133,
    padding: 10,
    '@media (max-width: 768px)': {
      width: 84,
      height: 100,
      padding: 0
    },
    '@media (max-width: 576px)': {
      width: '57px',
      height: '68px'
    }
  },
  price: {
    fontSize: '20px',
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    marginLeft: '-15px',
    '& svg': {
      fontSize: '20px',
      marginRight: '5px'
    },
    '@media (max-width: 768px)': {
      fontSize: '14px',
      '& svg': {
        fontSize: '14px',
        marginRight: '5px'
      }
    },
    '@media (max-width: 576px)': {
      fontSize: '12px',
      '& svg': {
        fontSize: '12px',
        marginRight: '5px'
      }
    }
  },
  productName: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    marginBottom: '0px',
    marginTop: '40px',
    whiteSpace: 'nowrap',
    '@media (max-width: 768px)': {
      fontSize: '20px',
      marginTop: '20px'
    },
    '@media (max-width: 576px)': {
      fontSize: '14px',
      whiteSpace: 'normal',
      marginTop: '0px'
    }
  },
  productBottom: {
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '0px',
    '@media (max-width: 576px)': {
      fontSize: '12px'
    }
  },
  description: {
    fontSize: '20px',
    '@media (max-width: 768px)': {
      fontSize: '14px'
    }
  },
  tableBody: () => ({
    '& > td': {
      '@media (max-width: 768px)': {
        padding: '10px'
      },
      '@media (max-width: 576px)': {
        padding: '2px'
      }
    }
  }),
  sumTotal: {
    width: '60%'
  }
}));
