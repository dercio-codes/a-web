import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { Box } from "@mui/system";
import { Auth } from "aws-amplify";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { USER_CONTEXT } from "../context/MainContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const background = {
  backgroundColor: "#111",
  width: "100%",
  minHeight: "calc(100vh - 70px)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  background: "url('active-tv-login-test1.png')",
  backgroundSize: "cover",
};

const container = {
  flexDirection: "column",
  padding: "40px",
  background: "rgba(0,0,0,0.6)",
};

const InputContainer = {
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  fontSize: "10px",
};

const inputBox = {
  width: "600px",
  borderRadius: "4px",
  fontSize: "13px",
  outline: "none",
  padding: "10px",
  border: "none",
  marginTop: "10px",
};

const ButtonStyle = {
  border: "1px solid yellow",
  background: "transparent",
  color: "yellow",
  minWidth: "180px",
  cursor: "pointer",
  fontSize: "10px",
  height: "40px",
};

const ButtonTwo = {
  border: "1px solid white",
  background: "transparent",
  color: "white",
  width: "250px",
  cursor: "pointer",
  fontSize: "10px",
};

function ResetNamePassword() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { updateAttributes, ForceRedirect, displayName, AuthenticatedUser } =
    useContext(USER_CONTEXT);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((name, email)) {
      try {
        updateAttributes(name, email);
        setEmail("");
        setName("");
      } catch (err) {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <Box className="active-tv-font" style={background}>
      <form style={container} onSubmit={handleSubmit}>
        <Typography
          className="active-tv-font"
          variant="h4"
          color={"yellow"}
          fontSize={14}
        >
          EDIT USER DETAILS
        </Typography>
        <hr style={{ marginRight: "20px" }} />

        <Box style={InputContainer}>
          <Typography variant="p">display name</Typography>
          <input
            type="text"
            name="name"
            placeholder="enter new name..."
            style={inputBox}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <Typography variant="p">display email</Typography>
          <input
            type="email"
            name="email"
            placeholder="enter new email..."
            style={inputBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box style={{ display: "flex", gap: 20, paddingTop: "25px" }}>
          <Button type="submit" style={ButtonStyle} className="active-tv-font">
            <Typography variant="p" className="changepassword">
              Change user details
            </Typography>
          </Button>
          <Button
            className="active-tv-font"
            style={{ ...ButtonStyle, border: "1px solid #fff", color: "#fff" }}
            href="/account"
          >
            <Typography variant="p" className="changepassword">
              Back to account
            </Typography>
          </Button>

          <ToastContainer />
        </Box>
      </form>
    </Box>
  );
}

export default ResetNamePassword;
