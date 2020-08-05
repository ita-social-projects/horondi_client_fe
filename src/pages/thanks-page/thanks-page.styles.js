import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/Rectangle.png';

export const useStyles = makeStyles(() => ({
  thanks: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '800px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    color: '#FFFFFF',
    alignItems: 'flex-end'
  },
  thanksWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  titleStyle: {
    marginTop: '5%',
    width: '95%',
    height: '60px',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '59px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  linkStyle: {
    display: 'flex',
    width: '23%',
    height: '63px',
    background: '#404040',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    marginLeft: '72%'
  }
}));
