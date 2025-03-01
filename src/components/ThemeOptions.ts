import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#782664",
    },
    secondary: {
      main: "#175928",
    },
    error: {
      main: "#c3405d",
    },
    info: {
      main: "#6c9f57",
    },
    background: {
      default: "#C3405D",
    },
  },
  typography: {
    fontFamily: "system-ui",
  },
});
