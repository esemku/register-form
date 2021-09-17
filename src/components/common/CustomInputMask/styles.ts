import { makeStyles } from '@material-ui/core';

import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 30,
    width: '100%',
  },
  input: {
    backgroundColor: colors.grayTertiary,
    color: colors.grayQuaternary,
    transition: 'color .2s ease, background-color .2s ease',
    border: `1px solid ${colors.grayTertiary}`,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    padding: '10px 18px',
    fontSize: fonts.size.mobile.input,
    fontWeight: fonts.weight.mobile.input,
    lineHeight: fonts.lineHeight.mobile.input,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.input,
      fontWeight: fonts.weight.desktop.input,
      lineHeight: fonts.lineHeight.desktop.input,
    },
    marginTop: 6,
    marginBottom: 6,
    '&:focus': {
      backgroundColor: colors.blackSecondary,
    },
  },
  label: {
    color: colors.whitePrimary,
    fontSize: fonts.size.mobile.inputLabel,
    fontWeight: fonts.weight.mobile.inputLabel,
    lineHeight: fonts.lineHeight.mobile.inputLabel,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.inputLabel,
      fontWeight: fonts.weight.desktop.inputLabel,
      lineHeight: fonts.lineHeight.desktop.inputLabel,
    },
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    top: 39,
  },
  errorText: {
    color: colors.redPrimary,
    fontSize: fonts.size.mobile.inputError,
    fontWeight: fonts.weight.mobile.inputError,
    lineHeight: fonts.lineHeight.mobile.inputError,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.inputError,
      fontWeight: fonts.weight.desktop.inputError,
      lineHeight: fonts.lineHeight.desktop.inputError,
    },
  },
}));
