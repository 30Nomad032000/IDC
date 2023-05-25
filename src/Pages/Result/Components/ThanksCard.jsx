import React from "react";
import { Typography, Grid } from "@mui/material";

function ThanksCard() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Typography
            variant="title2"
            padding={{ xs: "0px 25px", sm: "0px 50px" }}
            textAlign={"center"}
          >
            Thanks for your
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            marginTop={"-10px"}
            textAlign={"center"}
            padding={{ xs: "0px 15px", sm: "0px 50px" }}
            sx={{
              color: "#0093D0",
              fontSize: "48px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
          >
            participation
          </Typography>
        </Grid>
        <Grid item xs={12} padding={{ xs: "0px 25px", sm: "0px 20px" }}>
          <Typography
            variant="subtitle3"
            textAlign={{ xs: "center", sm: "left" }}
            paddingTop={"10px"}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ThanksCard;
