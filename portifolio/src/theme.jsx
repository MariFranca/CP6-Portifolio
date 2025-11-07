import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#171717',
    },
    secondary: {
      main: '#8E1616',
      light: '#a60000',
    },
    tertiary: {
      main: '#000000ff', 
    },
    quaternary: {
      main: '#F9F8F6',
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

export default theme;