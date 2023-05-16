import React, { Suspense } from "react";
import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Routes from "./Routes";
import { theme } from "./muiTheme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Suspense fallback={<>Loading...</>}>
          <Routes />
        </Suspense>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
