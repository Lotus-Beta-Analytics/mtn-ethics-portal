import { colors, createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCC00",
    },
    secondary: {
      main: "#000",
    },
    common: {
      black: "#202020",
      white: "#fff",
    },
    info: {
      main: "#006993",
    },
    success: {
      main: "#6ACC47",
    },
  },
  typography: {
    body2: {
      fontSize: "12px",
      fontFamily: "sans-serif, Century Gothic",
    },
    allVariants: {
      fontFamily: "sans-serif, Century Gothic",
    },
  },
  spacing: 4,
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#FFCC00",
      },
      root: {
        textTransform: "capitalize",
        borderRadius: "10px",
      },
    },
  },
});
