import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
          scrollbarColor: '#999997 #999997',
          scrollbarWidth: 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#999997',
          borderRadius: '2px 0px 0px 2px',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          fontFamily: 'Poppins',
          backgroundColor: '#bdc0c4',
        },
        ul: {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        },
        input: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export const colors = {
  blackPrimary: '#181c32',
  grayPrimary: '#b5b5c3',
  redPrimary: '#f1416c',
};

export const fonts = {
  size: {
    desktop: {
      h1: 23,
      p: 16,
    },
    mobile: { h1: 17, p: 15 },
  },
  weight: {
    desktop: {
      h1: 600,
      p: 500,
    },
    mobile: {
      h1: 600,
      p: 500,
    },
  },
  lineHeight: {
    desktop: {
      h1: '27px',
      p: '24px',
    },
    mobile: {
      h1: '20px',
      p: '22px',
    },
  },
};

export default theme;
