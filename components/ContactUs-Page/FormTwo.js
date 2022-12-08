import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const FormTwo = () => {
  return (
    <Box className={"active-tv-font"} sx={{ margin: "50px 0 0 0" }}>
      <Typography className="active-tv-font" sx={{ fontSize: "8px",lineHeight: "20px" }}>
        Have you spotted a piece of our content being uploaded to a page not
        owned by Active TV?
      </Typography>
      <Typography
        className="active-tv-font"
        sx={{ fontSize: "8px", margin: "30px 0 10px 0 " }}
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
      />
      <Typography
        className="active-tv-font"
        style={{ fontSize: "8px", margin: "30px 0 10px 0 " }}
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
      />

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
          backgroundColor: "black",
          height: "40px",
          color: "white",
          padding: "0 15px",
          fontStyle: "italic",
        }}
        type="text"
        placeholder="Subject"
      />
      <Typography
        className="active-tv-font"
        sx={{ fontSize: "8px", margin: "30px 0 10px 0 " }}
      >
        Urls of offending videos (1 per line)
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
        placeholder="Urls..."
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
export default FormTwo;
