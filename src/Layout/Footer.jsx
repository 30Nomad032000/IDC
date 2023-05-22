import React from "react";
import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <footer>
      <Box
        className="Footer"
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Typography color="#ffffff" align="center" variant="h3">
          Copyright © 2021 IDC and Alteryx. All rights reserved.{" "}
        </Typography>
        <Typography color="#0093D0" align="center" variant="h3" sx={{cursor:'pointer',}}>
          <span className="hover-underline-animation">Privacy Policy</span>{" "}
          &nbsp;{" "}
          <span className="hover-underline-animation">Policy Security</span>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
