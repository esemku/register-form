import { makeStyles } from '@material-ui/core';

import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {},
  title: {
    color: colors.blackPrimary,
    fontSize: fonts.size.mobile.h1,
    fontWeight: fonts.weight.mobile.h1,
    lineHeight: fonts.lineHeight.mobile.h1,
    marginTop: 0,
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.h1,
      fontWeight: fonts.weight.desktop.h1,
      lineHeight: fonts.lineHeight.desktop.h1,
      marginBottom: 9,
    },
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
  inputWrapper: {},
}));
