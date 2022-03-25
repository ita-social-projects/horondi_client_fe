import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  selfPickupContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 312,
    height: 287,
    marginTop: 16,
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  selfPickupData: {
    display: 'flex',
    width: 304,
    height: 239,
    color: palette.textColor,
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  selfPickupTitlesWrapper: {
    width: 172
  },
  scheduleWrapper: {
    width: 132
  },
  scheduleTitle: {
    fontWeight: 'bolder',
    fontSize: 14,
    marginTop: 0
  },
  addressTitle: {
    fontWeight: 'bolder',
    fontSize: 14,
    marginTop: 199
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column'
  },
  address: {
    marginTop: 23,
    fontSize: 14
  },
  scheduleItem: {
    fontSize: 14,
    marginBottom: 8,
    height: 20,
    display: 'flex'
  },
  scheduleItemName: {
    width: 36,
    fontWeight: 'bolder'
  },
  scheduleItemHours: {
    width: 88,
    marginLeft: 12
  }
}));
