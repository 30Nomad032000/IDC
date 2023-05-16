import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Card } from "../../../Common/Card.jsx";
import Review from "../../../assets/Images/Reviews.svg";

function HomeDetails() {
  return (
    <>
      <Grid container >
        <Grid
          item
          md={12}
          lg={7}
          xs={12}
          display={{ xs: "flex" }}
          justifyContent={{ xs: "center", md: "center", lg: "flex-start" }}
          flexDirection={"column"}
        >
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Typography
              variant="h3"
              sx={{
                paddingLeft: {
                  xl: "250px",
                  lg: "250px",
                  sm: "20px",
                  md: "50px",
                  xs: "20px",
                },
                paddingRight: { xs: "20px" },
                paddingTop: { xs: "41px", sm: "83px" },
                maxWidth: "685px",
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethic
            </Typography>
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Typography
              variant="h3"
              sx={{
                paddingLeft: {
                  xl: "250px",
                  lg: "250px",
                  sm: "20px",
                  md: "50px",
                  xs: "20px",
                },
                paddingRight: { xs: "20px" },
                paddingTop: "25px",
                maxWidth: "685px",
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          lg={5}
          xs={12}
          display={{ xs: "flex" }}
          justifyContent={{ xs: "center", lg: "flex-start" }}
          sx={{
            alignItems: "center",
          }}
        >
          <Box
            height={"535px"}
            width={"440px"}
            sx={{
              paddingTop: { sm: "83px", xs: "23px" },
              paddingBottom: { sm: "90px", xs: "30px" },
              paddingLeft: { xs: "20px" },
              paddingRight: { xs: "20px" },
            }}
          >
            <Card>
              <Box
                height={"352px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Typography
                  variant="title1"
                  sx={{
                    paddingTop: { xs: "17.5px", sm: "35px" },
                  }}
                >
                  Are You Ready for{" "}
                  <span style={{ color: "#0093D0" }}>Automation?</span>
                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box
                    component={"img"}
                    src={Review}
                    sx={{
                      height: "84px",
                      width: "84px",
                      paddingTop: { xs: "25px", sm: "25px" },
                    }}
                  />
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                  <Typography
                    variant="h6"
                    maxWidth={"378px"}
                    sx={{ paddingTop: "15px" }}
                  >
                    Take just 2 minutes to complete this assessment and receive
                    your custmized rport and position
                  </Typography>
                </Box>
              </Box>
              <Box
                height={"184px"}
                flexDirection={"column"}
                sx={{
                  paddingTop: "20px",
                  backgroundColor: "#0093D0",
                  borderRadius: "0 0 11px 11px",
                  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.16)",
                }}
              >
                <Typography
                  variant="h4"
                  color={"#FFFFFF"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  Start Now!
                </Typography>

                <Typography
                  variant="h5"
                  display={"flex"}
                  justifyContent={"center"}
                >
                  Terms and Conditions apply
                </Typography>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  paddingTop={"20px"}
                >
                  <Button
                    sx={{
                      "&:hover": {
                        background: "#FFFFFF 20%",
                      },
                      width: { xs: "300px", sm: "350px" },
                      height: "64px",
                      fontSize: "20px",
                      fontWeight: "600",
                      backgroundColor: "#FFFFFF",
                      borderRadius: " 8px",
                    }}
                  >
                    Take the Assesment
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeDetails;
