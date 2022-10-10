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
const area = {
  backgroundColor: 'inherit',
  font: 'inherit',
  fontWeight: '600',
  resize: 'none',
  overflow: 'hidden',
  width: '118px',
  height: '28px',
  pointerEvents: 'none'
};
const iconBtn = {
  backgroundColor: 'inherit',
  border: 'none'
};
const price = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  marginRight: '20px',
  '@media (max-width: 800px)': {
    marginRight: '35px'
  },
  '& svg': {
    marginRight: '5px'
  }
};
const image = {
  height: '79px',
  width: '168px'
};
const date = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  marginRight: '10px',
  '@media (max-width: 800px)': {
    marginRight: '8px'
  }
};
const status = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left'
};

const actions = {
  paddingTop: '5px',
  marginLeft: '20px'
};

export const useActiveStyles = makeStyles(({ palette }) => ({
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
    '@media (max-width: 760px)': {
      maxWidth: '600px',
      overflowX: 'auto'
    },
    '& td': {
      padding: '24px 13px',
      lineHeight: '28px',
      fontSize: '19px',
      fontWeight: 400,
      '@media (max-width: 700px)': {
        fontSize: '15px',
        lineHeight: '20px'
      }
    },
    '& td:first-child': {
      '& img': {
        '@media (max-width: 700px)': {
          width: '134px',
          height: '63px',
          marginRight: '5px'
        }
      }
    }
  },
  image: {
    ...image
  },
  code: {
    ...area,
    border: palette.white,
    color: palette.textColor
  },
  iconBtn: {
    ...iconBtn,
    color: palette.cart.iconColor,
    '&:hover': {
      color: palette.blue,
      cursor: 'pointer'
    }
  },
  price: {
    ...price
  },
  date: {
    ...date
  },
  status: {
    ...status,
    color: palette.green
  },
  actions: {
    ...actions
  }
}));

export const useExpiringStyles = makeStyles(({ palette }) => ({
  tableRow: {
    backgroundColor: palette.myCertificate.backgroundColorRed
  },
  image: {
    ...image
  },
  code: {
    ...area,
    border: palette.white,
    color: palette.textColor
  },
  iconBtn: {
    ...iconBtn,
    color: palette.cart.iconColor,
    '&:hover': {
      color: palette.blue,
      cursor: 'pointer'
    }
  },
  price: {
    ...price
  },
  date: {
    ...date,
    color: palette.red
  },
  status: {
    ...status,
    color: palette.green
  },
  actions: {
    ...actions
  }
}));

export const useNotActiveStyles = makeStyles(({ palette }) => ({
  tableRow: {
    backgroundColor: palette.myCertificate.backgroundColorGray
  },
  image: {
    ...image,
    filter: 'grayscale(100%)'
  },
  code: {
    ...area,
    border: palette.white,
    color: palette.myCertificate.notActiveTextColor
  },
  iconBtn: {
    ...iconBtn,
    color: palette.myCertificate.iconBtnColor
  },
  price: {
    ...price,
    color: palette.myCertificate.notActiveTextColor
  },
  date: {
    ...date,
    color: palette.myCertificate.notActiveTextColor
  },
  status: {
    ...status,
    color: palette.myCertificate.notActiveTextColor
  },
  actions: {
    ...actions
  }
}));
