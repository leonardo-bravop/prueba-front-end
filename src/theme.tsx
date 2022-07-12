import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#1d23f8",
      light: "#7453ff",
      dark: "#0000c3",
      contrastText: "#000000"
    },
    primary: {
      main: "#000000",
      light: "#2c2c2c",
      dark: "#000000",
      contrastText: "#ffffff"
    },
  }
});

export default theme;
