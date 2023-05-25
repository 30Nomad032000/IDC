import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import propTypes from "prop-types";

CustomRadioGroup.propTypes = {
  options: propTypes.array,
  onSelect: propTypes.func,
};

export default function CustomRadioGroup({ options, onSelect }) {
  const [radioState, setRadioState] = useState("");
  return (
    <Box className="customButton">
      <Grid container rowSpacing={2} columnSpacing={2}>
        {options.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <label className={radioState === item ? "selectedButton" : ""}>
              <input
                type="radio"
                name="buttonTypes"
                value={item}
                checked={radioState === item}
                onChange={(e) => {
                  setRadioState(e.target.value);
                  onSelect(e.target.value);
                }}
              />
              {item}
            </label>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
