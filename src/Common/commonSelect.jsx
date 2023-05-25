import React from "react";
import { TextField, MenuItem } from "@mui/material";
import propTypes from "prop-types";

CommonSelect.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  InputProps: propTypes.object,
  helperText: propTypes.string,
  data: propTypes.array,
};
function CommonSelect({ id, label, InputProps, helperText, data }) {
  return (
    <>
      <TextField
        fullWidth
        id={id}
        select
        label={label}
        defaultValue=""
        InputProps={InputProps}
        helperText={helperText}
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
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default CommonSelect;
