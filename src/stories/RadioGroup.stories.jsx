import React from "react";
import CustomRadioGroup from "../Pages/Survey/Components/radioGroup";

export default {
  title: "Radio-Button Group",
  component: CustomRadioGroup,
};

const options = [1, 2, 3, 4];

export const ButtonGroup = () => <CustomRadioGroup options={options} />;
