import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    animationName: '',
    animationDuration: '',
    gridColumn: (props) => props.gridColumn || 'none'
  },
  ldsDualRing: {
    display: 'inline-block',
    margin: '0 auto',
    alignItems: 'center',
    alignSelf: 'center',
    '&::after': {
      content: '" "',
      display: 'block',
      borderWidth: (props) => (props.width ? parseInt(props.width) / 10 : 6),
      width: (props) => (props.width ? props.width : '64px'),
      height: (props) => (props.height ? props.height : '64px'),
      borderRadius: '50%',
      borderStyle: 'solid',
      borderColor: `${theme.palette.textColor || 'black'} transparent ${
        theme.palette.textColor || 'black'
      } transparent`,
      animation: '$ldsDualRing 1.2s linear infinite'
    }
  },
  '@keyframes ldsDualRing': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}));
