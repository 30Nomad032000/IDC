import { Box, Grid, } from "@mui/material";
import React from "react";
import result from "../../assets/Images/result.svg";
import ThanksCard from "./Components/ThanksCard";
import LevelBanner from "./Components/LevelBanner";

function Result() {
  return (
    <>
      <Grid container marginBottom={"50px"}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="result-wrapper"
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
          }}
        >
          <Box
            component={"img"}
            src={result}
            alt="result"
            sx={{
              height: { xs: "100%", sm: "80%", md: "80%" },
              width: { xs: "100%", sm: "80%", md: "80%" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={{
            xs: "center",
          }}
          gap={"25px"}
          padding={"20px"}
        >
          <ThanksCard />
          <Box>
            <LevelBanner />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Result;
