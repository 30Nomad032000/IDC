import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomRadioGroup from "./radioGroup";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    label:
      "DATA PRACTICES - Which of the following best describes the data governance of your organization, or the area you oversee?",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "PROCESS PRACTICES - Which of the following best describes the process of generating insights from data using analytics in your organization, or the area you oversee?",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "PROCESS PRACTICES - Which of the following best describes the management of the process of generating insights from data using analytics in your organization, or the area you oversee? ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "STRATEGY PRACTICES - Which of the following best describes the data and analytics strategy of your organization?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "STRATEGY PRACTICES - What are your organization’s top business priorities for 2021-2022?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "RESULTS AND PERFORMANCE - Do you agree that your data and analytics practices, use cases and applications are important for your organization, or the area you oversee, to stay performant?",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "RESULTS AND PERFORMANCE - How do you assess your organization's performance in the past 12 months in the following categories, when compared with the peers in the same industry/geo? ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    label:
      "CHALLENGES - What are the most common challenges to making analytics work in your organization, or in the area you oversee? ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
];

export default function SurveyCard(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [options, setOptions] = useState({});
  const [currOption, setCurrOption] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setStep(activeStep);
    let newOptions = { ...options };
    newOptions = { ...newOptions, [activeStep + 1]: currOption };
    setCurrOption("");
    setOptions(newOptions);
  };

  const handleReset = () => {
    setActiveStep(0);
    props.setStep(0);
    setOptions({});
  };

  const handleCurrSelect = (option) => {
    if (options.length === 0) {
      setCurrOption("");
    }
    setCurrOption(option);
  };

  return (
    <Box sx={{ width: 1200 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-root": {
            marginLeft: "25px !important",
            borderLeft: "1px solid #000000 !important",
          },
          "& .MuiStepConnector-line": { borderLeftStyle: "none !important" },
          "& .MuiStepContent-root": {
            marginLeft: "25px !important",
            borderLeft: "1px solid #000000 !important",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={`${step.label}-${index}`}>
            <StepLabel
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: "3.2rem",
                  fill: "#D0D0D0",
                  border: "1px solid #000000",
                  borderRadius: "50%",
                },
                "& .Mui-active": { fill: "black", border: "none" },
                "& .Mui-completed": { fill: "black", border: "none" },
                "& .MuiStepLabel-label": {
                  paddingLeft: "15px",
                  fontSize: "18px",
                  fontWeight: "700 !important",
                  color: `${
                    activeStep >= index ? "#000000" : "#B3B3B3 !important"
                  }`,
                },
              }}
              className="survey-step-label"
            >
              <Box sx={{ display: { md: "block", lg: "none" } }}>
                Question {index + 1}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                }}
              >
                {step.label}
              </Box>
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  paddingLeft: "28px",
                  paddingTop: "20px",
                  display: { md: "block", lg: "none" },
                  fontSize: "18px",
                  fontWeight: "700 !important",
                }}
              >
                {step.label}
              </Typography>
              <Box sx={{ mb: 2, paddingLeft: "28px", paddingTop: "20px" }}>
                <CustomRadioGroup
                  options={step.options}
                  onSelect={handleCurrSelect}
                />
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 2,
                      mr: 1,
                      background: "#0093D0",
                      borderRadius: "8px",
                      px: 4,
                      py: 2,
                      textTransform: "capitalize",
                    }}
                  >
                    {index === steps.length - 1
                      ? "Finish"
                      : currOption.length > 0
                      ? "Next"
                      : "Skip"}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Box sx={{ p: 4, pl: "72px" }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/result");
            }}
            sx={{
              mt: 2,
              mr: 1,
              background: "#0093D0",
              borderRadius: "8px",
              px: 4,
              py: 2,
              textTransform: "capitalize",
            }}
          >
            Continue
          </Button>
          <Button
            onClick={handleReset}
            sx={{
              mt: 2,
              mr: 1,
              borderRadius: "8px",
              px: 4,
              py: 2,
              textTransform: "capitalize",
            }}
          >
            Reset
          </Button>
        </Box>
      )}
    </Box>
  );
}
