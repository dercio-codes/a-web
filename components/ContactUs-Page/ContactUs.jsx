import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import Form from "./Form";
import FormTwo from "./FormTwo";
import CorridorStore from "./CorridorStore";
import { Typography } from "@mui/material";
const ContactUs = () => {
  const [form, setForm] = useState("no form");
  switch (form) {
    case "form1":
      return <Form />;
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
        {/* <button onClick={()=>setForm(false)}>hide</button> */}
      </Box>
    </Box>
  );
};
export default ContactUs;
const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    //   background: "url('active-tv-login-test1.png')",
      // backgroundSize:'cover',
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      background: "url('login-bg.jpg')",
      padding:'90px 0',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    contentBox: {
      width: "700px",
      background: "rgba(0,0,0,0.8)",
      opacity: 0.7,
      height: "500px",
      // padding: "95px 90px",
      padding: "110px 90px",
      // margin:'0 0 0 290px'
    //   color:"white",
  },
};
