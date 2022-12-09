import React from "react";
import Box from "@mui/material/Box";
import Privacy from "../components/footer/termsAndConditions/Privacy";

const container = {
  width: "100%",
  background: `url("active-tv-login-test1.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const terms_and_conditions = () => {
  return (
    <Box sx={container}>
      <Privacy />
    </Box>
  );
};

export default terms_and_conditions;
