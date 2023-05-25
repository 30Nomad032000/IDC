import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import "../Css/main.css";
import Logo from "../assets/Images/Logo.svg";
import { useNavigate } from "react-router-dom";
import IDC from "../assets/Images/IDC-logo.svg";

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" className="Nav">
      <Toolbar
        className="Toolbar"
        sx={{
          padding: { sm: "28px 51px", xs: "8px 25px" },
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <Box
          component={"img"}
          src={Logo}
          alt={"alteryx-logo"}
          loading="lazy"
          className="Logo"
          sx={{ width: { sm: "196px", xs: "136px" } }}
        />
        <Box
          component={"img"}
          src={IDC}
          alt={"IDC-logo"}
          loading="lazy"
          className="Logo"
          sx={{ width: { sm: "210px", xs: "150px" } }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
