import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  selfPickupTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 24,
    color: isLightTheme ? '#1D1C1C' : '#ffffff'
  })
}));
