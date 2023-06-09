import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomizedProgressBars from "../../Common/linearProgress";
import SurveyCard from "./Components/surveyCard";

function Survey() {
  const [activeStep, setActiveStep] = useState(0);

  const setStep = (step) => {
    setActiveStep(step + 1);
  };

  return (
    <>
      <Box
        className="survey-title-wrapper"
        padding={{ xs: "0px 10px", sm: "0px 45px" }}
      >
        <Typography variant="title3" sx={{ textTransform: "capitalize" }}>
          {activeStep === 0
            ? "Lets get started"
            : activeStep === 10
            ? "Done"
            : "Continue"}
        </Typography>
        <Box className="wrapper-center" gap={"12px"}>
          <Typography variant="title4" color={"#B8B8B8"}>
            <span style={{ color: "#0093D0" }}>{activeStep}</span> / 10
          </Typography>
          <Box
            className="wrapper-center"
            height={"30px"}
            width={{ xs: "150px", sm: "300px" }}
          >
            <CustomizedProgressBars value={activeStep * 10} />
          </Box>
        </Box>
      </Box>
      <Box className="wrapper-center" padding="50px 20px">
        <SurveyCard setStep={setStep} />
      </Box>
    </>
  );
}

export default Survey;
