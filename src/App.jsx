import React, { Suspense } from "react";
import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Routes from "./Routes";
import PageLoader from "./Common/Loader/pageLoader";
import { theme } from "./muiTheme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<PageLoader />}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
