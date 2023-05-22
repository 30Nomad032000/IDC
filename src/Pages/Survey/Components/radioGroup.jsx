import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

export default function CustomRadioGroup(props) {
  const [radioState, setRadioState] = useState("");
  return (
    <Box className="customButton">
      <Grid container rowSpacing={2} columnSpacing={2}>
        {props.options.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <label className={radioState === item ? "selectedButton" : ""}>
              <input
                type="radio"
                name="buttonTypes"
                value={item}
                checked={radioState === item}
                onChange={(e) => {
                  setRadioState(e.target.value);
                  props.onSelect(e.target.value);
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
