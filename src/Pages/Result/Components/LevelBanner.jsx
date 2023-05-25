import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Card } from "../../../Common/Card";
import Result from "../../../assets/Images/Result-Icon.svg";
import PDF from "../../../assets/Images/PDF.svg";

function LevelBanner() {
  return (
    <>
      <Card>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={{ xs: "0px 25px", sm: "0px 50px" }}
          >
            <Box
              component={"img"}
              src={Result}
              alt={"Result-icon"}
              sx={{
                height: "117px",
                width: "117px",
                paddingTop: { xs: "25px", sm: "25px" },
              }}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={{ xs: "0px 25px", sm: "0px 50px" }}
          >
            <Typography
              variant="icontext"
              maxWidth={"378px"}
              sx={{ paddingTop: "15px" }}
            >
              Stage 3
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={{ xs: "0px 25px", sm: "0px 50px" }}
          >
            <Typography
              variant="icontext1"
              maxWidth={"378px"}
              sx={{ paddingTop: "5px" }}
            >
              Expert
            </Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={{ xs: "0px 25px", sm: "0px 50px" }}
          >
            <Typography
              variant="cardText"
              sx={{ paddingTop: "5px" }}
              textAlign={"center"}
            >
              Download your detailed report here
            </Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            paddingTop={"20px"}
            padding={{ xs: "25px 25px", sm: "25px 50px" }}
          >
            <Button
              sx={{
                "&:hover": {
                  background: "#0073D0",
                },
                width: { xs: "300px", sm: "350px" },
                height: "64px",
                fontSize: "20px",
                fontWeight: "600",
                backgroundColor: "#0093D0",
                borderRadius: " 8px",
                color: "#fff",
              }}
            >
              <img src={PDF} alt={"PDF-icon"} /> &nbsp; Download
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default LevelBanner;
