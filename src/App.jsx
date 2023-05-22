import React, { Suspense } from "react";
import "./App.css";
import Routes from "./Routes";
import PageLoader from "./Common/Loader/pageLoader";
import { theme } from "./muiTheme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense
          fallback={
            <div style={{ height: "100vh" }}>
              <PageLoader />
            </div>
          }
        >
          <Routes />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
