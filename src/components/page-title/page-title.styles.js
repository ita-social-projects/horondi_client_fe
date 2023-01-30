import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: { width: '100%' },
  title: {
    fontSize: theme.typography.pageTitle.fontSize,
    fontWeight: theme.typography.pageTitle.fontWeight,
    lineHeight: theme.typography.pageTitle.lineHeight,
    textAlign: 'center',
    marginTop: '72px',
    marginBottom: '48px',
    '@media (max-width: 900px)': {
      fontSize: theme.typography.h1.fontSize,
      lineHeight: theme.typography.h1.lineHeight,
      marginTop: '64px',
      marginBottom: '35px'
    },
    '@media (max-width: 450px)': {
      fontSize: theme.typography.h2.fontSize,
      lineHeight: theme.typography.h2.lineHeight,
      marginTop: '56px',
      marginBottom: '29px'
    }
  },
  titleLine: {
    width: '100%',
    borderBottom: theme.palette.seachBar.border,
    marginBottom: '24px',
    '@media (max-width: 900px)': { marginBottom: '20px' },
    '@media (max-width: 600px)': { marginBottom: '16px' }
  },
  marginForCrumbs: {
    marginTop: '18px',
    '@media (max-width: 900px)': { marginTop: '16px' },
    '@media (max-width: 600px)': { marginTop: '14px' }
  }
}));
