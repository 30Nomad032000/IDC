import React from "react";
import { Button, Grid, Box } from "@mui/material";
import CommonSelect from "../../../Common/commonSelect.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonInput from "../../../Common/commonInput.jsx";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  bussinessEmail: yup
    .string()
    .required("Email is required")
    .email("Email is invalid"),
  organization: yup.string().required("Oragnization name is required"),
  jobTitle: yup.string().required("Job title is required"),
  jobFunction: yup.string().required("Job function is required"),
  country: yup.string().required("Country is required"),
  numberOfEmployees: yup.string().required("Number of employees is required"),
  industry: yup.string().required("Industry is required"),
  companyType: yup.string().required("Company type is required"),
});

function FormCard() {
  const data = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Grid container spacing={2} marginTop={"20px"} padding={"0px 40px"}>
        <Grid item xs={12} sm={6}>
          <CommonInput
            {...register("firstName")}
            fullWidth
            id="firstName"
            label="First Name"
            variant="outlined"
            helperText={errors.firstName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CommonInput
            {...register("lastName")}
            fullWidth
            id="lastName"
            label="Last Name"
            variant="outlined"
            helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CommonInput
            {...register("bussinessEmail")}
            fullWidth
            id="bussinessEmail"
            label="Business Email"
            variant="outlined"
            helperText={errors.bussinessEmail?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CommonInput
            {...register("organization")}
            fullWidth
            id="oraganization"
            label="Organization"
            variant="outlined"
            helperText={errors.organization?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CommonSelect
            data={data}
            label="Job title"
            InputProps={{ ...register("jobTitle") }}
            helperText={errors.jobTitle?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CommonSelect
            data={data}
            label="Job Function"
            InputProps={{ ...register("jobFunction") }}
            helperText={errors.jobFunction?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CommonSelect
            data={data}
            label="Country"
            InputProps={{ ...register("country") }}
            helperText={errors.country?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CommonSelect
            data={data}
            label="Number of Employees"
            InputProps={{ ...register("numberOfEmployees") }}
            helperText={errors.numberOfEmployees?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CommonSelect
            data={data}
            label="Industry"
            InputProps={{ ...register("industry") }}
            helperText={errors.industry?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CommonSelect
            data={data}
            label="Company Type"
            InputProps={{ ...register("companyType") }}
            helperText={errors.companyType?.message}
          />
        </Grid>

        <Box className="register-button-wrapper">
          <Button
            variant="contained"
            className="register-submit-button"
            sx={{
              padding: "18px 50px",
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
            onClick={handleSubmit(() => {
              navigate("/survey");
            })}
          >
            Register
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default FormCard;
