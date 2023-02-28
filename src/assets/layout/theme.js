import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3c8dbc",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3c8dbc",
    },
  },
});

export const light = responsiveFontSizes(lightTheme);
export const dark = responsiveFontSizes(darkTheme);
