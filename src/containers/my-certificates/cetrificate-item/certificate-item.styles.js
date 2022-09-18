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

export const useStyles = makeStyles(({ palette }) => ({
  tableActive: {},
  tableActiveRed: {
    backgroundColor: palette.myCertificate.backgroundColorRed
  },
  tableNotActive: {
    backgroundColor: palette.myCertificate.backgroundColorGray
  },
  name: {
    paddingTop: '3px'
  },
  imageActive: {
    ...image
  },
  imageNotActive: {
    ...image,
    filter: 'grayscale(100%)'
  },
  areaActive: {
    ...area,
    border: palette.white,
    color: palette.textColor
  },
  areaNotActive: {
    ...area,
    border: palette.white,
    color: palette.myCertificate.notActiveTextColor
  },
  iconBtnActive: {
    ...iconBtn
  },
  iconBtnNotActive: {
    ...iconBtn,
    color: palette.myCertificate.iconBtnColor
  },
  certificateIcon: {
    color: palette.cart.iconColor,
    '&:hover': {
      color: palette.blue,
      cursor: 'pointer'
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    '& svg': {
      marginRight: '5px',
      fontSize: '20px'
    }
  },
  priceActive: {
    ...price
  },
  priceNotActive: {
    ...price,
    color: palette.myCertificate.notActiveTextColor
  },
  dateActive: {
    ...date
  },
  dateActiveRed: {
    ...date,
    color: palette.red
  },
  dateNotActive: {
    color: palette.myCertificate.notActiveTextColor
  },
  statusActive: {
    ...status,
    color: palette.green
  },
  statusInProgress: {
    ...status,
    color: palette.red
  },
  statusNotActive: {
    ...status,
    color: palette.myCertificate.notActiveTextColor
  },
  actions: {
    paddingTop: '5px',
    marginLeft: '20px'
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));
