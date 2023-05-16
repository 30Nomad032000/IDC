import React from "react";
import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <Footer
      className="Footer"
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
    >
      <Typography color="#ffffff" align="center" variant="h3">
        Copyright © 2021 IDC and Alteryx. All rights reserved.{" "}
      </Typography>
      <Typography color="#0093D0" align="center" variant="h3">
        Privacy Policy &nbsp; Policy Security
      </Typography>
    </Footer>
  );
}

export default Footer;
