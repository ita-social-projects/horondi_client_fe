import { makeStyles } from '@material-ui/core/styles';
import sertificateImg from '../../../images/sertificate.svg';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    height: '40px',
    '& svg': {
      color: palette.textColor
    }
  },
  certificate: {
    display: 'flex',
    color: palette.black,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${sertificateImg})`,
    width: '310px',
    height: '152px',
    backgroundSize: '100% 100%',
    fontSize: '10px',
    justifyContent: 'center',
    paddingTop: '30px',
    paddingRight: '15px',
    textTransform: 'uppercase',
    fontWeight: 400
  },
  numberInput: {
    marginLeft: '30px'
  }
}));
