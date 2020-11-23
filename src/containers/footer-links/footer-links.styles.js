import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardBody: ({ position }) => ({
    flex: position === 'center' ? 0 : 1,
    padding: '25px',
    '@media screen and (max-width: 552px)': {
      width: '50%'
    }
  }),
  iconsBox: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    '@media screen and (max-width: 552px)': {
      textAlign: 'center'
    }
  },
  iconsContainer: ({ position }) => ({
    display: 'flex',
    justifyContent: position
  }),
  iconWrap: {
    margin: '0.5rem'
  }
}));
