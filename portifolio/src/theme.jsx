import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1D1616',
    },
    secondary: {
      main: '#8E1616',
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

export default theme;