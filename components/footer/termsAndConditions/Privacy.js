import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Router from "next/router";

const container = {
  padding: "30px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const form = {
  height: "650px",
  width: "700px",
  background: "rgba(0,0,0,1)",
  borderRadius: "15px",
};

const header = {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  padding: "40px 30px 20px 30px",
};

const links = {
  color: "gray",
  textDecoration: "underline",
};

const buttons = {
  height: "30px",
  width: "60px",
  fontSize: "6px",
  marginLeft: "10px",
};

const green = {
  background: "#FFBF00 !important",
};

const red = {
  color: "white",
  border: "white 2px solid",
};

const Privacy = () => {
  const [redirecting, setRedirecting] = React.useState(false);

  const acceptHandler = () => {
    toast.success("You have accepted our terms and condition", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      Router.push("/");
      console.log("redirecting with router");
    }, 3000);
  };

  const declineHandler = () => {
    toast.error("You have declined our terms and condition", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      Router.push("/");
      console.log("redirecting with router");
    }, 3000);
  };

  return (
    <Box sx={container}>
      <Box sx={form}>
        <Box sx={header}>
          <img
            src="ATV_logo.png"
            alt="active tv logo"
            height="50px"
            width="50px"
          />
          <Typography
            className="active-tv-font"
            sx={{ marginLeft: "20px", fontSize: "9px", color: "white" }}
          >
            Active Tv Terms of Services
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid gray",
            width: "200px",
            margin: "0 0 30px 100px",
          }}
        ></Box>

        <Box sx={{ padding: "30px 38px" }}>
          <Typography
            className="active-tv-font"
            sx={{ fontSize: "8px", color: "lightgray" }}
          >
            <span style={{ color: "white" }}>Lorem Ipsum is simply dummy.</span>{" "}
            text of the <span style={links}>printing</span> and typesetting
            industry. Lorem Ipsum has been the{" "}
            <span style={links}>industry's</span> standard dummy text
          </Typography>

          <Typography
            className="active-tv-font"
            sx={{ marginTop: "20px", fontSize: "8px", color: "lightgray" }}
          >
            <span style={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>{" "}
            Lorem Ipsum has been the <span style={links}>industry's</span>{" "}
            standard dummy text ummy text of the{" "}
            <span style={links}>printing</span> and typesetting
          </Typography>
        </Box>

        <Box sx={{ padding: "35px 38px" }}>
          <Typography
            className="active-tv-font"
            sx={{ fontSize: "12px", color: "#FFBF00" }}
          >
            Terms of Services
          </Typography>

          <Typography
            className="active-tv-font"
            sx={{
              marginLeft: "5px",
              marginTop: "15px",
              fontSize: "8px",
              color: "lightgray",
            }}
          >
            Lorem Ipsum
          </Typography>

          <Typography
            className="active-tv-font"
            sx={{
              marginLeft: "5px",
              marginTop: "20px",
              fontSize: "8px",
              color: "lightgray",
            }}
          >
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>

        <Box sx={{ padding: "20px 40px", marginLeft: "2px" }}>
          <Typography
            className="active-tv-font"
            sx={{ fontSize: "12px", color: "#FFBF00" }}
          >
            1. Who may use the Services
          </Typography>

          <Typography
            className="active-tv-font"
            sx={{
              marginTop: "10px",
              fontSize: "8px",
              color: "lightgray",
            }}
          >
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 30px",
            marginTop: "40px",
          }}
        >
          <Button
            className="active-tv-font"
            variant="outline"
            onClick={declineHandler}
            sx={[buttons, red]}
          >
            Decline
          </Button>
          <Button
            onClick={acceptHandler}
            className="active-tv-font"
            variant="outline"
            sx={[buttons, green]}
          >
            Accept
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Privacy;
