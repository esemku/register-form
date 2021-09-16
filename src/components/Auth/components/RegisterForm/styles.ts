import { makeStyles } from '@material-ui/core';

import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {},
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: 'min-content',
  },
  pairInputsWrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  inputWrapper: {
    [theme.breakpoints.up('md')]: {
      width: '48%',
    },
  },
}));
