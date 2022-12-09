import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import useRouter from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { handleBreakpoints } from "@mui/system";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmailIcon from "@mui/icons-material/Email";
import { Auth } from "aws-amplify";
import Router from "next/router";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import RiseLoader from "react-spinners/RiseLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

const confirmStyles = {
  container: {
    minHeight: "100%",
    width: "100%",
    background: "url('login-bg.jpg')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      md: "20px",
      sm: 0,
      xs: 0,
    },
  },
  contentCover: {
    minHeight: {
      lg: "294px",
      md: "294px",
      sm: "900px",
      xs: "900px",
    },
    width: "1140px",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      lg: "20px 0 0 0",
      md: "20px 0 0 0",
      sm: "0 30px",
      xs: 0,
    },
  },
  formContainer: {
    height: "100%",
    width: {
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
    padding: {
      md: 0,
      sm: 0,
      xs: 0,
    },
  },
  header: {
    minHeight: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    flexDirection: "column",
    padding: {
      md: "20px 10px",
      sm: "20px 30px",
      xs: "20px 30px",
    },
  },
  formBox: {
    minHeight: "400px",
    padding: {
      lg: 0,
      md: 0,
      sm: "0px",
      xs: "0px",
    },

    color: "white",
  },
  input: {
    width: "100%",
    height: "50px",
    // padding: " 0 5px",
    fontSize: "15px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputLabel: {
    color: "#fff",
    width: "100%",
    padding: 10,
    fontWeight: "bold",
  },
  inputBlocks: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: {
      md: "5px 0",
      sm: " 5px 10px",
      xs: "10px 25px",
    },
  },
  icon: {
    color: "#666",
  },
  inputElement: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
    border: "none",
    padding: "0 15px",
    fontSize: "15px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
    minHeight: "100px",

    padding: {
      md: "1px 0",
      sm: "10px",
      xs: "20px",
    },
  },
  loginBtn: {
    width: "100%",
    height: "50px",
    background: "#fff203",
    color: "#000",
    fontWeight: "bolder",
    "&:hover": {
      background: "#fff203",
    },
  },
  fieldset: {
    border: "none",
    borderTop: "1px solid #f2f2f2",
  },
  legend: {
    margin: "0 auto",
    borderRadius: "100%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  socialBtn: {
    width: "100%",
    height: "50px",
    background: "transparent",
    border: "1px solid white",
    color: "#fff",
    fontWeight: "bolder",
    "&:hover": {
      border: "none",
      background: "#ff0000",
      color: "#fff",
    },
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50px",
    justifyContent: "space-between",
    marginTop: "15px",
    padding: {
      md: "0",
      sm: "0 10px",
      xs: "0 20px",
    },
  },
};

const Confirm = () => {
  const [show, setShow] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [errorLogs, setErrorLogs] = useState("");

  // form state
  const [formDetails, setFormDetails] = useState({
    code: "",
    email: "",
  });

  const handleFieldChange = (event) => {
    const field = event.currentTarget.name; //created an object that gets the name of inputs and store its value

    setFormDetails({
      ...formDetails,
      [field]: event.currentTarget.value,
    });
  };

  //confirm code
  async function confirmSignUp(username, code) {
    try {
      await Auth.confirmSignUp(username, code);

      setRedirecting(true);
      setTimeout(() => {
        setRedirecting(false);
        Router.push("/login");
      }, 2000);
    } catch (error) {
      console.log("error confirming sign up", error);
      setErrorLogs(error.message);
    }
  }

  //resend confirmation code
  async function resendConfirmationCode(username) {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
      setErrorLogs(err.message);
    }
  }

  // submit form
  const handleSubmitCode = (e) => {
    console.log("submitting code.....");
    e.preventDefault();

    console.log(formDetails.code + " code sent");
    confirmSignUp(formDetails.email, formDetails.code);
  };
  // resend form
  const handleResendCode = (e) => {
    console.log("resending code.....");
    e.preventDefault();
    resendConfirmationCode(formDetails.email);
  };

  return redirecting ? (
    <Box
      sx={{
        height: "91vh",
        background: "#000000",
        background: "url('login-bg.jpg')",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,.5)",
        }}
      >
        <MoonLoader color={"#f3c11a"} loading={true} size={170} />
      </Box>
    </Box>
  ) : (
    <Box sx={{ ...confirmStyles.container }}>
      <Box sx={{ ...confirmStyles.contentCover }}>
        <Box sx={{ ...confirmStyles.formContainer }}>
          <Box sx={{ ...confirmStyles.header }}>
            <img
              src="glitch-tv.gif"
              alt="logo"
              height="80px"
              style={{ marginBottom: "5" }}
            />
            <Typography
              variant="h4"
              className={"active-tv-font"}
              align="center"
              sx={{
                margin: "20px 0 0  0",
                fontWeight: "900",
                fontSize: {
                  md: "15px",
                  xs: "20px",
                },
              }}
            >
              Verify Your Account
            </Typography>
            <Box sx={{ padding: "20px 60px" }}>
              <Typography
                className={"active-tv-font"}
                fontSize={12}
                sx={{
                  lineHeight: "25px",
                  textAlign: "center",
                  margin: 0,
                  padding: 0,
                }}
                variant="p"
                align="center"
              >
                We send you the six digits code to example@gmail.com Enter the
                code below to confirm your email address
              </Typography>
            </Box>
          </Box>
          <Box sx={confirmStyles.formBox}>
            <form>
              <Box sx={{ ...confirmStyles.inputBlocks }}>
                <label style={{ ...confirmStyles.inputLabel }}>
                  {/* Email address */}
                </label>
                <Box sx={{ ...confirmStyles.input }}>
                  <input
                    name="email"
                    className={"confirmInput focusInput"}
                    value={formDetails.email}
                    onChange={handleFieldChange}
                    style={{ ...confirmStyles.inputElement }}
                    type={"text"}
                    placeholder="Enter Email address "
                  />
                  <Button>
                    <EmailIcon sx={confirmStyles.icon} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...confirmStyles.inputBlocks }}>
                <label style={{ ...confirmStyles.inputLabel }}>
                  {/* Email address */}
                </label>
                <Box sx={{ ...confirmStyles.input }}>
                  <input
                    name="code"
                    className={"confirmInput focusInput"}
                    value={formDetails.code}
                    onChange={handleFieldChange}
                    style={{ ...confirmStyles.inputElement }}
                    type={"number"}
                    placeholder="Enter Confirmation code"
                  />
                  <Button>
                    <ConfirmationNumberIcon sx={confirmStyles.icon} />
                  </Button>
                </Box>
              </Box>

              <Box sx={{ ...confirmStyles.buttonContainer }}>
                <Button
                  className={"active-tv-font"}
                  sx={{ ...confirmStyles.loginBtn }}
                  variant="contained"
                  color="warning"
                  type="Submit"
                  onClick={handleSubmitCode}
                >
                  <Typography className={"active-tv-font"} fontSize={12}>
                    Confirm code
                  </Typography>
                </Button>

                <Button
                  className={"active-tv-font"}
                  sx={{ ...confirmStyles.loginBtn }}
                  variant="contained"
                  color="warning"
                  type="Submit"
                  onClick={handleResendCode}
                >
                  <Typography className={"active-tv-font"} fontSize={12}>
                    resend code
                  </Typography>
                </Button>
              </Box>
              <span
                className="active-tv-font"
                style={{
                  color: "red",
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  fontSize: 10,
                  marginTop: 10,
                }}
              >
                {errorLogs}
              </span>
              <Box sx={{ padding: "0 50px" }}>
                <fieldset style={{ ...confirmStyles.fieldset }}>
                  <legend style={{ ...confirmStyles.legend }}>
                    <ConfirmationNumberIcon sx={confirmStyles.icon} />
                  </legend>
                </fieldset>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Confirm;
