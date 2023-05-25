import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import Link from "@mui/material/Link";
import PageLoader from "../Common/Loader/pageLoader";
import propTypes from "prop-types";

ErrorFallback.propTypes = {
  resetErrorBoundary: propTypes.func,
};

function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ height: "300px" }}>
        <PageLoader />
      </div>
      <div
        style={{
          height: "150px",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>Something went wrong</h2>
        <button className="error-boundary-button" onClick={resetErrorBoundary}>
          Try again
        </button>
        <Link
          href={"/"}
          style={{
            color: "#2A6BA6",
            fontSize: "12px",
            fontWeight: "400",
            marginTop: "20px",
          }}
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

ErrorBoundary.propTypes = {
  children: propTypes.children,
};

function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
