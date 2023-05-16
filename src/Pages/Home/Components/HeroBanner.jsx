import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function HeroBanner() {
  return (
    <>
      <Box className="heroBanner">
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              maxWidth={"570px"}
              fontSize={{ lg: "3.438rem", sm: "3rem", xs: "2.2rem" }}
              sx={{
                paddingLeft: {
                  lg: "250px",
                  sm: "100px",
                  xs: "10px",
                },
                paddingTop: {
                  lg: "225px",
                  sm: "225px",
                  xs: "100px",
                },
              }}
            >
              Analytics Process Automation Survey
            </Typography>
            <Typography
              paddingTop={"30px"}
              maxWidth={"658px"}
              variant="subtitle1"
              sx={{
                paddingLeft: {
                  lg: "250px",
                  sm: "100px",
                  xs: "10px",
                },
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteratio
            </Typography>
            <Box
              sx={{
                paddingTop: { xs: "25px", sm: "25px", md: "50px" },
                paddingLeft: {
                  lg: "250px",
                  sm: "100px",
                  xs: "10px",
                },
              }}
            >
              <Button
                sx={{
                  background: "#0093D0",
                  padding: "20px",
                  width: "270px",
                  height: "64px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#ffffff",
                  fontFamily: "Monsterrat",
                }}
              >
                Take the Assesment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HeroBanner;
