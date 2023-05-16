import React from "react";
import { Typography, Divider, Grid } from "@mui/material";
import HomeBanner from "../../../assets/Images/HomeBanner1.svg";

const banner = [1, 2, 3];

function HeroBannerBottom() {
  return (
    <>
      <Grid
        container
        columnSpacing={3}
        sx={{
          padding: "10px",
          marginTop: { md: "-207px", sm: "-350px", xs: "-350px" },
          background: "black",
          opacity: "82%",
          height: { md: "161px", sm: "301px", xs: "300px" },
          display: "flex",
        }}
      >
        {banner.map((item) => (
          <Grid
            key={item}
            item
            xs={12}
            md={4}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: `${
                  item <= 1 ? "flex-end" : item <= 2 ? "center" : "flex-start"
                }`,
              },
              paddingTop: { xs: "10px", sm: "10px", md: "0px" },
              alignItems: "center",
              gap: { xs: "15px", sm: "25px" },
            }}
          >
            <img src={HomeBanner} />
            <Typography
              variant="subtitle2"
              width={{ xs: "250px", sm: "295px" }}
            >
              Contrary to popular belief, Lorem Ipsum s not simply random text.{" "}
            </Typography>
            <Divider
              variant="vertical"
              sx={{
                border: "1px solid #0093D0",
                height: "71px",
                display: {
                  sm: "none",
                  xs: "none",
                  md: `${item <= 2 ? "block" : "none"}`,
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default HeroBannerBottom;
