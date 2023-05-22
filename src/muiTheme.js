import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h2: {
      color: "#FFFFFF",
      fontWeight: "700",
      lineHeight: "67px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "26px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#FFFFFF",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#757575",
      textAlign: "center",
    },
    subtitle1: {
      fontWeight: "200",
      fontSize: "1.25rem",
      color: "#FFFFFF",
      lineHeight: "24px",
    },
    subtitle2: { fontWeight: "500", fontSize: "18px", color: "#FFFFFF" },
    subtitle3: { fontWeight: "400", fontSize: "15px", color: "#565656" },
    subtitle4: { fontWeight: "400", fontSize: "16px", textAlign: "center" },
    title1: { fontWeight: "600", fontSize: "32px", textAlign: "center" },
    title2: {
      fontWeight: "700",
      fontSize: "35px",
      textAlign: "center",
      textTransform: "capitalize",
    },
    title3: { fontWeight: "600", fontSize: "16px" },
    title4: { fontWeight: "700", fontSize: "18px" },
    icontext: { fontWeight: "500", fontSize: "25px", color: "#9A9A9A" },
    icontext1: { fontWeight: "600", fontSize: "42px", color: "#000000" },
    cardText: { fontWeight: "500", fontSize: "22px", color: "#757575" },
  },
});
