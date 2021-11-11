import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  selfPickupContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '3%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  selfPickupTitlesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '40%'
  },
  selfPickupData: {
    display: 'flex',
    paddingLeft: 5,
    marginLeft: '10%',
    width: 600,
    '@media (max-width: 768px)': {
      width: '80%'
    }
  },
  selfPickupTitle: {
    fontWeight: 400,
    fontSize: 18,
    marginLeft: '2%'
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%'
  },
  scheduleTitle: {
    marginRight: '4%',
    fontWeight: 'bolder',
    fontSize: 14,
    color: palette.textColor
  },
  addressTitle: {
    margin: ' 0 0 7.5% 0',
    fontWeight: 'bolder',
    fontSize: 14
  },
  scheduleItem: {
    fontWeight: 400,
    fontSize: 14,
    color: palette.textColor
  },
  scheduleData: {
    display: 'flex',
    flexDirection: 'column'
  }
}));
