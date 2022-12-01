import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import FormTwo from "./FormTwo";
import CorridorStore from "./CorridorStore";
import { Typography } from "@mui/material";
const Form = () => {
  const [form, setForm] = useState("no form");
  switch (form) {
    case "form2":
      return <FormTwo />;
    case "form3":
      return <CorridorStore />;
  }
  return (
    <Box className={"active-tv-font"} sx={styles.container}>
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
        <Link href="/">
          <Typography
            className={"active-tv-font"}
            style={{ fontSize: "8px", color: "yellow", marginTop: "10px" }}
          >
            Check our FAQ for your issue.
          </Typography>
        </Link>
        <Typography
          className={"active-tv-font"}
          style={{ fontSize: "8px", marginTop: "40px" }}
        >
          Please select the appropriate service you wish to contact:
        </Typography>
        <Box style={{ fontSize: "8px" }}>
          <Box className={"active-tv-font"}>
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
          <Box className={"active-tv-font"}>
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
          <Box className={"active-tv-font"}>
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
          <Box className={"active-tv-font"}>
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
        <Box style={{ margin: "50px 0 0 0" }}>
          <Typography
            className="active-tv-font"
            style={{ fontSize: "8px", margin: "20px 0 " }}
          >
            Email Address
          </Typography>
          <input
            style={{
              width: "100%",
              border: "1px white solid",
              backgroundColor: "black",
              height: "40px",
              color: "white",
              padding: "0 5px",
              fontStyle: "italic",
            }}
            type="text"
            placeholder="Enter your email address"
          ></input>
          <Typography
            className="active-tv-font"
            style={{ fontSize: "8px", margin: "20px 0 " }}
          >
            Name
          </Typography>
          <input
            style={{
              width: "100%",
              border: "1px white solid",
              backgroundColor: "black",
              height: "40px",
              color: "white",
              padding: "0 5px",
              fontStyle: "italic",
            }}
            type="text"
            placeholder="Enter your full name"
          ></input>
          <Typography
            className="active-tv-font"
            style={{ fontSize: "8px", margin: "20px 0 " }}
          >
            Subject
          </Typography>
          <input
            style={{
              width: "100%",
              border: "1px white solid",
              backgroundColor: "black",
              height: "40px",
              color: "white",
              padding: "0 5px",
              fontStyle: "italic",
            }}
            type="text"
            placeholder="Subject"
          ></input>
          <Typography
            className="active-tv-font"
            style={{ fontSize: "8px", margin: "20px 0 " }}
          >
            Message
          </Typography>
          <textarea
            style={{
              width: "100%",
              border: "1px white solid",
              backgroundColor: "white",
              height: "80px",
              color: "black",
              padding: "10px 5px",
              fontStyle: "italic",
            }}
            placeholder="What is your message?"
          ></textarea>

          <button
            style={{
              backgroundColor: "yellow",
              width: "100%",
              height: "40px",
              border: "none",
              margin: "30px 0 0 0",
            }}
          >
            Submit
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default Form;
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
    background: "rgba(0,0,0,0.6)",
    height: "950px",
    padding: "110px 90px",
    flexDirection: "column",
  },
};
