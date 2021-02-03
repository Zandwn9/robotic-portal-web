import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#0d0d00",
        },
      },
    },
  },
  palette: {
    background: { default: "#0d0d00" },
    primary: {
      light: "#ffe551",
      main: "#ffb310",
      dark: "#c78400",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      light: "#2c2c2c",
      dark: "#0d0d00",
      contrastText: "#ffe551",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
