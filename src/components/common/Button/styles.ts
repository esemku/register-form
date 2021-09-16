import { makeStyles } from '@material-ui/core';

import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {
    color: colors.whitePrimary,
    backgroundColor: colors.bluePrimary,
    border: 'none',
    cursor: 'pointer',
    borderRadius: theme.shape.borderRadius,
    fontSize: fonts.size.mobile.button,
    fontWeight: fonts.weight.mobile.button,
    lineHeight: fonts.lineHeight.mobile.button,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.button,
      fontWeight: fonts.weight.desktop.button,
      lineHeight: fonts.lineHeight.desktop.button,
    },
    padding: '11px 22px',
    width: '100%',
    '&:hover': {
      backgroundColor: colors.blueSecondary,
    },
    transition: 'background-color .15s ease-in-out',
  },
}));
