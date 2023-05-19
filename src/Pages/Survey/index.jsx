import React from "react";
import CustomizedSteppers from "../../Common/stepper.jsx";
import { Box } from "@mui/material";

function Survey() {
  return (
    <Box
      height={"100px"}
      display={"flex"}
      flexDirection={"column"}
      backgroundColor="#0093D0"
    >
      <Box marginTop={"50px"}>
        <CustomizedSteppers />
      </Box>
    </Box>
  );
}

export default Survey;
