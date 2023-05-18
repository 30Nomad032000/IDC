import React from "react";
import { TextField, MenuItem } from "@mui/material";

function CommonSelect(props) {
  return (
    <>
      <TextField
        fullWidth
        id={props.id}
        select
        label={props.label}
        defaultValue=""
        InputProps={props.InputProps}
        helperText={props.helperText}
        sx={{
          "& .MuiFormHelperText-root": {
            color: "red",
          },
          "& .MuiFormLabel-root": {
            fontSize: "14px",
            fontWeight: "400",
            color: "#3E3C37",
          },
        }}
      >
        {props.data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default CommonSelect;
