import { makeStyles } from '@material-ui/core/styles';

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

export const useActiveStyles = makeStyles(({ palette }) => ({
  rootRed: {
    backgroundColor: palette.myCertificate.backgroundColorRed
  },
  image: {
    ...image
  },
  area: {
    ...area,
    border: palette.white,
    color: palette.textColor
  },
  iconBtn: {
    ...iconBtn
  },
  certificateIcon: {
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
  dateRed: {
    ...date,
    color: palette.red
  },
  status: {
    ...status,
    color: palette.green
  },
  actions: {
    paddingTop: '5px',
    marginLeft: '20px'
  }
}));

export const useNotActiveStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.myCertificate.backgroundColorGray
  },
  image: {
    ...image,
    filter: 'grayscale(100%)'
  },
  area: {
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
  }
}));
