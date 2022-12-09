import React from "react";
import { Box } from "@mui/system";
import FinalContactUsForm from "../components/ContactUs-Page/FinalContactUsForm";

const container = {
  padding: '50px 0',
  width: "100%",
  background: "url('active-tv-login-test1.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ContactSupport = () => {
  return (
    <Box sx={container}>
      <FinalContactUsForm />
    </Box>
  );
};

export default ContactSupport;
