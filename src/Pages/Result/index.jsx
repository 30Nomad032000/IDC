import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import result from "../../assets/Images/result.svg";
import ThanksCard from "./Components/ThanksCard";
import LevelBanner from "./Components/LevelBanner";

function Result() {
  return (
    <>
      <Grid container height={"900px"}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={result}
            alt="result"
            sx={{
              height: { xs: "100%", sm: "100%", md: "80%" },
              width: { xs: "100%", sm: "100%", md: "80%" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ThanksCard />
          
        </Grid>
      </Grid>
    </>
  );
}

export default Result;
