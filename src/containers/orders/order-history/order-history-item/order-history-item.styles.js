import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    maxWidth: '1110px',
    margin: '15px auto',
    borderRadius: '5px'
  },

  heading: ({ isLightTheme }) => ({
    textTransform: 'uppercase',
    background: isLightTheme ? '#2f2f2f' : '#dedede',
    padding: '10px',
    margin: '20px 0',
    display: 'flex',
    width: '100%',
    height: '40px',
    fontSize: '14px',
    fontWeight: '600',
    justifyContent: 'space-between'
  }),
  headingStatus: {
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
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '28px',
    textAlign: 'center',
    padding: 5,
    textTransform: 'uppercase',
    '& div': {
      width: '60%',
      textAlign: 'right'
    }
  }
}));
