import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  selfPickupContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '3%'
  },
  selfPickupData: ({ isLightTheme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    background: isLightTheme ? '#f6f4f4' : null,
    paddingLeft: 5
  }),
  selfPickupTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 18,
    color: isLightTheme ? '#1D1C1C' : '#ffffff'
  }),
  schedule: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%'
  },
  scheduleTitle: ({ isLightTheme }) => ({
    marginRight: '4%',
    color: isLightTheme ? '#000000' : '#ffffffff',
    fontWeight: 'bolder',
    fontSize: 14
  }),
  addressTitle: ({ isLightTheme }) => ({
    margin: ' 0 16% 0 0',
    color: isLightTheme ? '#000000' : '#ffffffff',
    fontWeight: 'bolder',
    fontSize: 14
  }),
  scheduleItem: ({ isLightTheme }) => ({
    color: isLightTheme ? '#1D1C1C' : '#ffffff',
    fontWeight: 400,
    fontSize: 14
  }),
  scheduleData: ({ isLightTheme }) => ({
    display: 'flex',
    flexDirection: 'column'
  })
}));
