import { makeStyles } from '@material-ui/core';
import { colors } from 'theme';

export default makeStyles((theme: any) => ({
  root: {},
  topBar: {
    backgroundColor: colors.grayQuinary,
    height: 65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logOut: {
    cursor: 'pointer',
    color: colors.whitePrimary,
    marginRight: 24,
    '&:hover': {
      opacity: 0.9,
      transition: 'opacity .2s ease-in-out',
      fontSize: 14,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  },
  firstName: {
    color: colors.whitePrimary,
    fontSize: 30,
  },
}));
