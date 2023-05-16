import { Box } from "@mui/material";
import React from "react";

export function Card(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid #E3E3E3",
        borderRadius: "11px",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.16)",
      }}
    >
      {props.children}
    </Box>
  );
}
