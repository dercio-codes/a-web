import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "next/link";
import Form from "./Form";
import FormTwo from "./FormTwo";
import CorridorStore from "./CorridorStore";

const container = {
  maxWidth: "650px",
  background: "rgba(0,0,0,0.9)",
  padding: "85px 85px",
  color: "white",
  borderRadius: "10px",
};

const radioInputs = {
  transform: "scale(1.2)",
  margin: "0px",
  cursor: "pointer",
};

const inputs = {
  fontSize: "8px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "14px",
};

const FinalContactUsForm = () => {
  const [active, setActive] = useState("");

  return (
    <Box sx={container}>
      <Typography className={"active-tv-font"} sx={{ fontSize: "22px" }}>
        Contact Us
      </Typography>
      <Typography
        className={"active-tv-font"}
        sx={{ fontSize: "9px", marginTop: "12px", lineHeight: "20px" }}
      >
        Please check out our FAQ pages to see if your answer is there first, if
        not use one of the contact methods below.
      </Typography>
      <Link href="/about">
        <a target="_blank">
          {" "}
          <Typography
            className={"active-tv-font"}
            sx={{ fontSize: "9px", color: "yellow", marginTop: "5px" }}
          >
            Check our FAQ for your issue.
          </Typography>
        </a>
      </Link>
      <Typography
        className={"active-tv-font"}
        sx={{ fontSize: "9px", margin: "40px 0 20px 0" }}
      >
        Please select the appropriate service you wish to contact:
      </Typography>

      <form>
        <Box sx={inputs}>
          <input
            onClick={() => setActive("form1")}
            style={radioInputs}
            name="form"
            type="radio"
          />{" "}
          <Typography
            fontSize="9px"
            sx={{ marginLeft: "7px" }}
            className={"active-tv-font"}
          >
            Website Feedback
          </Typography>
        </Box>
        <Box sx={inputs}>
          <input
            onClick={() => setActive("form2")}
            style={radioInputs}
            name="form"
            type="radio"
          />{" "}
          <Typography
            fontSize="9px"
            sx={{ marginLeft: "7px" }}
            className={"active-tv-font"}
          >
            Active TV Store
          </Typography>
        </Box>
        <Box sx={inputs}>
          <input
            onClick={() => setActive("form3")}
            style={radioInputs}
            name="form"
            type="radio"
          />{" "}
          <Typography
            fontSize="9px"
            sx={{ marginLeft: "7px" }}
            className={"active-tv-font"}
          >
            Business Enquiries
          </Typography>
        </Box>
        <Box sx={inputs}>
          <input
            onClick={() => setActive("form4")}
            style={radioInputs}
            type="radio"
            name="form"
          />{" "}
          <Typography
            fontSize="9px"
            sx={{ marginLeft: "7px" }}
            className={"active-tv-font"}
          >
            Copyright Infringement
          </Typography>
        </Box>

        <Box>
          {active === "form1" && <Form />}
          {active === "form2" && <CorridorStore />}
          {active === "form3" && <Form />}
          {active === "form4" && <FormTwo />}
        </Box>
      </form>
    </Box>
  );
};

export default FinalContactUsForm;
