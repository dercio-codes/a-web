import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import Form from "./Form";
import FormTwo from "./FormTwo";
import { Typography } from "@mui/material";
const CorridorStore = () => {
  const [form, setForm] = useState("no form");
  switch (form) {
    case "form1":
      return <Form />;
    case "form2":
      return <FormTwo />;
  }
  return (
    <Box
      className={"active-tv-font"}
      sx={styles.container}
      style={{ fontSize: "8px" }}
    >
      <Box style={{ color: "white" }} sx={styles.contentBox}>
        <Typography className={"active-tv-font"} style={{ fontSize: "20px" }}>
          Contact Us
        </Typography>
        <Typography
          className={"active-tv-font"}
          style={{ fontSize: "8px", marginTop: "10px" }}
        >
          Please check out our FAQ pages to see if your answer is there first,
          if not use one of the contact methods below.
        </Typography>
        <Link href="/about">
          <Typography
            className={"active-tv-font"}
            style={{ fontSize: "8px", color: "yellow", marginTop: "10px" }}
          >
            Check our FAQ for your issue.
          </Typography>
        </Link>
        <br />
        <Typography
          className={"active-tv-font"}
          style={{ fontSize: "8px", marginTop: "40px" }}
        >
          Please select the appropriate service you wish to contact:
        </Typography>
        <Box style={{ fontSize: "8px" }}>
          <Box>
            <input
              onClick={() => setForm("form1")}
              style={{ margin: "10px 0 0 0" }}
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>{" "}
            Website Feedback
          </Box>
          <Box>
            <input
              onClick={() => setForm("form3")}
              style={{ margin: "20px 0 0 0" }}
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>{" "}
            Active TV Store
          </Box>
          <Box>
            <input
              onClick={() => setForm("form1")}
              style={{ margin: "20px 0 0 0" }}
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>{" "}
            Business Enquiries
          </Box>
          <Box>
            <input
              onClick={() => setForm("form2")}
              style={{ margin: "20px 0 0 0" }}
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>{" "}
            Copyright Infringement
          </Box>
        </Box>
        <Box style={{ margin: "20px 0 0 0" }}>
          Our store purchases are handled by a third party, Merchline, for order
          support please contact{" "}
          <p style={{ fontSize: "8px", color: "yellow" }}>
            <Link className="link" href="/">
              {" "}
              support@merchline.com
            </Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
};
export default CorridorStore;
const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    background: "url('login-bg.jpg')",
    padding: "90px 0",
  },
  contentBox: {
    width: "700px",
    background: "rgba(0,0,0,0.5)",
    height: "520px",
    padding: "30px 90px",
    flexDirection: "column",
    padding: "110px 90px",
  },
};
