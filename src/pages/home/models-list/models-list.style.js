import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ isModelsVisible, modelsCount }) => ({
    height: !isModelsVisible ? '480px' : `${(modelsCount / 2) * 210 + 250}px`,
    minHeight: '480px',
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
    }
  }),
  modelsWrapper: () => ({
    backgroundColor: theme.palette.backgroundColor,
    display: 'flex',
    flexFlow: 'wrap',
    width: '100%',
    boxSizing: 'border-box',
    justifyContent: 'center',
    position: 'relative',
    transition: 'height 1s ease',
    overflow: 'hidden',
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 5,
      left: 5,
      bottom: 0
    }
  }),
  modelsWrapperClosed: () => ({
    height: 200
  }),
  modelsWrapperOpened: () => ({
    height: 400,
    '@media (max-width: 480px)': {
      height: 600
    }
  }),
  modelsTitle: () => ({
    color: theme.palette.textColor,
    fontSize: 34,
    marginBottom: 30,
    fontWeight: '400',
    alignSelf: 'flex-start'
  })
}));
