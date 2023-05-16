import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../assets/Images/Logo.svg";
import IDC from "../assets/Images/IDC-logo.svg";

function Header() {
  return (
    <AppBar position="fixed" className="Nav">
      <Toolbar
        className="Toolbar"
        sx={{
          padding: { sm: "28px 51px", xs: "8px 25px" },
        }}
      >
        <Box
          component={"img"}
          src={Logo}
          className="Logo"
          sx={{ width: { sm: "196px", xs: "136px" } }}
        />
        <Box
          component={"img"}
          src={IDC}
          className="Logo"
          sx={{ width: { sm: "210px", xs: "150px" } }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
