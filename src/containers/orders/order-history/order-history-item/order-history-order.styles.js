import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((visible) => ({
  root: {
    margin: '15px auto',
    borderRadius: '5px'
  },
  heading: {
    width: '100%',
    display: 'flex'
  },
  info: {
    width: '50%'
  },
  status: {
    fontWeight: 500,
    fontSize: '1.3em'
  },
  total: {
    display: 'block',
    width: '25%'
  },
  images: {
    width: '25%',
    display: visible ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20
  },
  blockNone: {
    display: 'none'
  },
  accordion: {
    display: 'block'
  },
  imagesRow: {
    height: 40,
    margin: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagesEmpty: ({ isLightTheme }) => ({
    width: 40,
    height: 40,
    margin: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: !isLightTheme ? '1px solid #636262' : '1px solid snow'
  }),
  imagesInner: {
    maxWidth: '100%',
    width: 'auto',
    maxHeight: '100%',
    height: 'auto'
  },
  bottom: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 10,
    fontSize: '1.2rem',
    textAlign: 'right',
    justifyContent: 'flex-end'
  },
  totalText: {
    width: '25%',
    textAlign: 'center',
    padding: 16,
    '& div': {
      width: '60%',
      textAlign: 'right'
    }
  }
}));
