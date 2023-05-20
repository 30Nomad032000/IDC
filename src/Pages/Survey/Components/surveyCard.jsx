import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label:
      "DATA PRACTICES - Which of the following best describes the data governance of your organization, or the area you oversee?",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label:
      "PROCESS PRACTICES - Which of the following best describes the process of generating insights from data using analytics in your organization, or the area you oversee?",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label:
      "PROCESS PRACTICES - Which of the following best describes the management of the process of generating insights from data using analytics in your organization, or the area you oversee? ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "STRATEGY PRACTICES - Which of the following best describes the data and analytics strategy of your organization?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "STRATEGY PRACTICES - What are your organization’s top business priorities for 2021-2022? (Randomize, select up to 5, rank them) ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "RESULTS AND PERFORMANCE - Do you agree that your data and analytics practices, use cases and applications are important for your organization, or the area you oversee, to stay performant? ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "RESULTS AND PERFORMANCE - How do you assess your organization's performance in the past 12 months in the following categories, when compared with the peers in the same industry/geo? (matrix selection, one selection each row)",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label:
      "CHALLENGES - What are the most common challenges to making analytics work in your organization, or in the area you oversee? (Randomize, Select up to 5, rank them) ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function SurveyCard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: 1200 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-root": {
            marginLeft: "20px !important",
            borderLeft: "1px solid #000000 !important",
          },
          "& .MuiStepConnector-line": { borderLeftStyle: "none !important" },
          "& .MuiStepContent-root": {
            marginLeft: "20px !important",
            borderLeft: "1px solid #000000 !important",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={`${step.label}-${index}`}>
            <StepLabel
              sx={{
                "& .MuiSvgIcon-root": { fontSize: "2.625rem", fill: "#D0D0D0" },
                "& .Mui-active": { fill: "black" },
                "& .Mui-completed": { fill: "black" },
                "& .MuiStepLabel-label": {
                  paddingLeft: "20px",
                  fontSize: "18px",
                  fontWeight: "700 !important",
                  color: `${
                    activeStep >= index ? "#000000" : "#B3B3B3 !important"
                  }`,
                },
              }}
              className="survey-step-label"
            >
              Question {index + 1}
            </StepLabel>
            <StepContent>
              <Typography sx={{ paddingLeft: "28px", paddingTop: "20px" }}>
                {step.label}
              </Typography>
              <Box sx={{ mb: 2, paddingLeft: "28px", paddingTop: "20px" }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Box>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Box>
      )}
    </Box>
  );
}
