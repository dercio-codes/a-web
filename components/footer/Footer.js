import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const container = {
  width: "100%",
  height: "64px",
  backgroundColor: "#111",
  position: "relative",
};

const overLay = {
  width: "100%",
  height: "64px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  padding: "0 100px",
  background: "rgba(0,0,0,0.3)",
  position: "absolute",
  bottom: 0,
};

const container2 = {
  width: "58%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const container3 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "50%",
  alignItems: "flex-start",
};

const fontSize = {
  fontSize: {
    xs: 6,
    md: 9,
    lg: 10,
  },
  color: "white",
};

const Footer = () => {
  return (
    <Box sx={container}>
      <Box sx={overLay}>
        <Box sx={container2}>
          <Box sx={container3}>
            <Link href="/">
              <a>
                <Typography
                  className="active-tv-font"
                  sx={{ fontSize: "9px", color: "white" }}
                >
                  Terms & Conditions
                </Typography>
              </a>
            </Link>
            <Typography
              className="active-tv-font"
              sx={{ fontSize: "9px", color: "white" }}
            >
              {new Date().getFullYear()} © ActiveTv777.co.za
            </Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <InstagramIcon
              sx={{ color: "white", cursor: "pointer", fontSize: "22px" }}
            />
            <YouTubeIcon
              sx={{ color: "white", cursor: "pointer", fontSize: "22px" }}
            />
            <FacebookIcon
              sx={{ color: "white", cursor: "pointer", fontSize: "20px" }}
            />
            <TwitterIcon
              sx={{ color: "white", cursor: "pointer", fontSize: "20px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
