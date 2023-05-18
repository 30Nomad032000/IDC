import React from "react";
import { Box, Typography } from "@mui/material";
import FormCard from "./Components/formCard.jsx";

function Registeration() {
  return (
    <Box
      height={"100vh"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={{ xs: "75px", sm: "50px" }}
    >
      <Box
        className="register-wrapper"
        width={{ xs: "350px", sm: "600px", md: "720px" }}
        height={{ xs: "fit-content", sm: "720px" }}
      >
        <Typography variant="title1" padding={"0px 20px"} marginTop={"10px"}>
          Register Now
        </Typography>
        <Typography variant="subtitle4" padding={"0px 15px"} marginTop={"13px"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text
        </Typography>
        <Box>
          <FormCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Registeration;
