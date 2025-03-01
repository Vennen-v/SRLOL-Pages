import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/ThemeOptions.js";
import { CssBaseline } from "@mui/material";
import Nav from "./components/Nav.js";
import EventPageCopy from "./components/EventPage.js";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Nav />
        <EventPageCopy />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
