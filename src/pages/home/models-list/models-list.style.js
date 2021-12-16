import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ isModelsVisible, modelsCount }) => ({
    height: !isModelsVisible ? '100vh' : `${(modelsCount / 3) * 210 + 250}px`,
    minHeight: '100vh',
    width: '85%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'height 1s ease',
    '& button': {
      zIndex: 10,
      color: theme.palette.textColor,
      backgroundColor: theme.palette.backgroundColor,
      borderColor: theme.palette.textColor,
      margin: 50,
      '&:hover': {
        color: theme.palette.textColor,
        backgroundColor: theme.palette.backgroundColor
      }
    },
    '@media (max-width: 768px)': {
      height: !isModelsVisible ? '100%' : `300px`
    }
  }),
  modelsWrapper: ({ isModelsVisible }) => ({
    backgroundColor: theme.palette.backgroundColor,
    display: 'flex',
    flexFlow: 'wrap',
    width: '85%',
    height: isModelsVisible ? '48%' : 217,
    boxSizing: 'border-box',
    justifyContent: 'center',
    position: 'relative',
    transition: 'height 1s ease',
    overflow: 'hidden',
    '@media (max-width: 1024px)': {
      width: '100%'
    },
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 5,
      left: 5,
      bottom: 0
    }
  }),
  modelsTitle: () => ({
    color: theme.palette.textColor,
    fontSize: 34,
    marginBottom: 30,
    marginLeft: 14,
    fontWeight: 400,
    width: '85%'
  })
}));
