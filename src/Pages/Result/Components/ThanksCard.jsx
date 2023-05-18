import { Box, Typography } from "@mui/material";

function ThanksCard() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="title2" padding={"0px 50px"}>
          Thanks for your
        </Typography>
        <Typography
          marginTop={"-10px"}
          textAlign={"center"}
          padding={"0px 50px"}
          sx={{
            color: "#0093D0",
            fontSize: "48px",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          participation
        </Typography>
        <Typography
          variant="subtitle3"
          textAlign={{ xs: "center", sm: "left" }}
          paddingTop={"10px"}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature
        </Typography>
      </Box>
    </>
  );
}

export default ThanksCard;
