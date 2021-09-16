import { makeStyles } from '@material-ui/core';

import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/media/illustrations/14-dark.png`})`,
    backgroundSize: 'contain',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat',
    padding: '100px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    backgroundColor: colors.graySecondary,
    borderRadius: theme.shape.borderRadius,
    padding: 30,
    boxShadow: '0 .1rem 1rem .25rem rgba(0,0,0,.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: 600,
      padding: 49,
    },
  },
  title: {
    color: colors.whitePrimary,
    fontSize: fonts.size.mobile.h1,
    fontWeight: fonts.weight.mobile.h1,
    lineHeight: fonts.lineHeight.mobile.h1,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.h1,
      fontWeight: fonts.weight.desktop.h1,
      lineHeight: fonts.lineHeight.desktop.h1,
      marginBottom: 9,
    },
    marginTop: 0,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.grayPrimary,
    fontSize: fonts.size.mobile.p,
    fontWeight: fonts.weight.mobile.p,
    lineHeight: fonts.lineHeight.mobile.p,
    marginTop: 0,
    marginBottom: 30,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.p,
      fontWeight: fonts.weight.desktop.p,
      lineHeight: fonts.lineHeight.desktop.p,
    },
  },
  subtitleLink: {
    color: colors.bluePrimary,
    fontWeight: 600,
    transition: 'color .2s ease',
    '&:hover': {
      color: colors.blueTertiary,
    },
  },
}));
