import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ isModelsVisible, modelsCount }) => ({
    height: !isModelsVisible ? '960px' : `${(modelsCount / 2) * 210 + 250}px`,
    minHeight: '480px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'height 1s ease',
    '@media (max-width: 568px)': {
      height: '1000px'
    },
    '& button': {
      fontFamily: 'Open Sans',
      fontSize: '14px',
      height: 'auto',
      minWidth: '185px',
      padding: '12px 48px',
      lineHeight: '18px',
      border: '1px solid',
      color: theme.palette.textColor,
      backgroundColor: theme.palette.backgroundColor,
      borderColor: theme.palette.textColor,
      margin: 50,
      '&:hover': {
        color: theme.palette.button.hoverSecondary.color,
        backgroundColor: theme.palette.button.hoverSecondary.backgroundColor
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
  modelsWrapperClosed: () => ({
    height: 260 
  }),
  modelsWrapperOpened: () => ({
    height: 510,
    '@media (max-width: 568px)': {
      height: 760
    },
  }),
  modelsTitle: () => ({
    color: theme.palette.textColor,
    fontSize: 34,
    marginBottom: 30,
    fontWeight: '400',
    alignSelf: 'flex-start'
  })
}));
