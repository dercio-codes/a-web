import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Form = () => {
  return (
    <Box>
      <Typography
        className="active-tv-font"
        sx={{ fontSize: "8px", margin: "50px 0 10px 0" }}
      >
        Email Address
      </Typography>
      <input
        style={{
          width: "100%",
          border: "1px gray solid",
          background: "rgba(0,0,0,0.0)",
          height: "40px",
          color: "white",
          padding: "0 15px",
          fontStyle: "italic",
        }}
        type="text"
        placeholder="Enter your email address"
      ></input>
      <Typography
        className="active-tv-font"
        sx={{ fontSize: "8px", margin: "30px 0 10px 0 " }}
      >
        Name
      </Typography>
      <input
        style={{
          width: "100%",
          border: "1px gray solid",
          background: "rgba(0,0,0,0.0)",
          height: "40px",
          color: "white",
          padding: "0 15px",
          fontStyle: "italic",
        }}
        type="text"
        placeholder="Enter your full name"
      ></input>
      <Typography
        className="active-tv-font"
        sx={{ fontSize: "8px", margin: "30px 0 10px 0 " }}
      >
        Subject
      </Typography>
      <input
        style={{
          width: "100%",
          border: "1px gray solid",
          background: "rgba(0,0,0,0.0)",
          height: "40px",
          color: "white",
          padding: "0 15px",
          fontStyle: "italic",
        }}
        type="text"
        placeholder="Subject"
      ></input>
      <Typography
        className="active-tv-font"
        sx={{ fontSize: "8px", margin: "30px 0 10px 0 " }}
      >
        Message
      </Typography>
      <textarea
        style={{
          width: "100%",
          border: "1px white solid",
          backgroundColor: "white",
          height: "100px",
          color: "black",
          padding: "15px 15px",
          fontStyle: "italic",
        }}
        placeholder="What is your message?"
      ></textarea>

      <button
       className="active-tv-font"
        style={{
          backgroundColor: "yellow",
          width: "100%",
          height: "50px",
          border: "none",
          marginTop: "10px",
          fontSize:'9px'
        }}
      >
        Submit
      </button>
    </Box>
  );
};
export default Form;
