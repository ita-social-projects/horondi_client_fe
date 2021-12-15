import { makeStyles } from '@material-ui/core/styles';

const baseStyles = {
  position: 'relative',
  marginRight: '37px',
  background: 'rgb(255, 255, 255, 0.2)',
  borderRadius: '6px',

  '& .MuiInputBase-root': {
    width: '350px',
    '@media (max-width: 1000px)': {
      width: '250px'
    },
    '@media (max-width: 800px)': {
      width: '200px'
    },
    '@media (max-width: 600px)': {
      width: '150px'
    }
  },
  '& .MuiInput-input': {
    padding: '12px 5px 12px 46px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(254, 254, 254, 0.75);',
    '@media (max-width: 900px)': {
      marginRight: '10px'
    }
  },
  '& .MuiSvgIcon-root': {
    stroke: '#FFF',
    position: 'absolute',
    top: '11px',
    left: '12px'
  },
  '& .MuiInput-underline:after, & .MuiInput-underline:before': {
    display: 'none'
  }
};

export const useStyles = makeStyles((color) => ({
  root: () => ({
    ...baseStyles
  }),
  notFromNavbar: () => ({
    ...baseStyles,
    background: 'inherit',
    border: '1px solid #949494',
    '& .MuiInput-input': {
      padding: '12px 5px 12px 12px',
      color
    },
    '& .MuiSvgIcon-root': {
      display: 'none'
    }
  })
}));
