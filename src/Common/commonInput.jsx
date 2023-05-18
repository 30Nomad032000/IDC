import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CommonInput = styled(TextField)({
  backgroundColor: "#FFFFFF",
  "& .MuiFormLabel-root": {
    fontSize: "14px",
    fontWeight: "400",
    color: "#3E3C37",
  },
  "& .MuiFormHelperText-root": {
    color: "red",
  },
});

export default CommonInput;
