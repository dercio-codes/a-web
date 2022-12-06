import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import useRouter from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { handleBreakpoints } from "@mui/system";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from "@mui/icons-material/Person";
import { Auth } from "aws-amplify";
import Link from "next/link";
import signUp from "../../amplify/methods/amplifySdk"; // imported the fnction here
import Router from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import RiseLoader from "react-spinners/RiseLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";
import WcIcon from '@mui/icons-material/Wc';
import ScaleLoader from "react-spinners/ScaleLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import { TrendingUpRounded } from "@mui/icons-material";
import { USER_CONTEXT } from "../../context/MainContext";

import axios from "axios";

const LoginComp = () => {
  const [show, setShow] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [errorLogs, setErrorLogs] = useState("");
  const { AuthenticatedUser } = useContext(USER_CONTEXT);

  // form state
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
    check: "",
    gender:""
  });

  const handleFieldChange = (event) => {
    const field = event.currentTarget.name; //created an object that gets the name of inputs and store its value

    setFormDetails({
      ...formDetails,
      [field]: event.currentTarget.value,
    });
  };
  // password display
  const tooglePassword = () => {
    setShow(!show);
  };

  console.log("user", AuthenticatedUser);
  const endpoint = `http://127.0.0.1:3000/store-users`;
  const tokenHandler = async () => {
    const response = await axios.post(endpoint, AuthenticatedUser, {
      "Content-Type": "application/json",
    });
    console.log("RESPONSE=>", response);
  };

  //register user
  async function signUp(username, password, email, gender) {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email, // optional
          phone_number: null, // optional - E.164 number convention
          // other custom attributes
          "custom:display_name": username,
          name: username,
          picture:'',
          gender:gender
        },
      });

      console.log(user, "signup authclass running");

      if (user) {
        setRedirecting(true);
        setTimeout(() => {
          setRedirecting(false);
          Router.push("/confirm"); //redirecting the user to the confirm page inorder for us to insert the code sent from email
        }, 2000);
      }
    } catch (error) {
      console.log("error signing up:", error);
      setErrorLogs(error.message);
    }
  }

  const GoogleSignin = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Google" });
      console.log("using Google for federation");
    } catch (err) {
      console.log(`Google auth returns ${err.message}`);
    }
  };
  const FacebookSignin = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Facebook" });
      console.log("using facebook for federation");
    } catch (err) {
      console.log(`Facebook auth returns ${err.message}`);
    }
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formDetails.email, formDetails.password, formDetails.email, formDetails.gender);
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
    <Box sx={{ ...loginStyles.container }}>
      <Box sx={{ ...loginStyles.contentCover }}>
        <Box sx={{ ...loginStyles.formContainer }}>
          <Box sx={{ ...loginStyles.header }}>
            <img
              src="glitch-tv.gif"
              alt="logo"
              height="105px"
              style={{ marginBottom: "5" }}
            />
            <Typography
              variant="h4"
              align="center"
              className={"active-tv-font"}
              sx={{
                margin: "20px 0",
                fontWeight: "900",
                fontSize: {
                  md: "18px",
                  xs: "20px",
                },
              }}
            >
              Create your account
            </Typography>
            <Typography
              className={"active-tv-font"}
              sx={{ lineHeight: "25px", fontSize: "10px" }}
              variant="p"
              align="center"
            >
              Getting started is easy, just a few steps and you can immerse
              yourself with the latest Active TV content!
            </Typography>
          </Box>
          <Box sx={loginStyles.formBox}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel, fontSize: "10px" }}
                >
                  Display Name
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                    name="name"
                    value={formDetails.name}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={"text"}
                    placeholder="Enter display name"
                  />
                  <Button>
                    <PersonIcon sx={loginStyles.icon} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel, fontSize: "10px" }}
                >
                  Email address
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                    name="email"
                    value={formDetails.email}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={"email"}
                    placeholder="Enter email address"
                  />
                  <Button>
                    <EmailIcon sx={loginStyles.icon} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel, fontSize: "10px" }}
                >
                  Password
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                    name="password"
                    value={formDetails.password}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <Button onClick={tooglePassword}>
                    {show ? (
                      <VisibilityIcon sx={loginStyles.icon} />
                    ) : (
                      <VisibilityOffIcon sx={loginStyles.icon} />
                    )}
                  </Button>
                </Box>
              {/*gender*/}
               <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel, fontSize: "10px" }}
                >
                  Gender
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <select
                    name="gender"
                    value={formDetails.gender}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...loginStyles.inputElement, outline:'none', cursor:'pointer' }}
                    placeholder="Enter your Gender"
                  >
                  <option className={'gender-option'}>male</option>
                  <option className={'gender-option'}>female</option>
                  <option className={'gender-option'}>custom</option>

                  </select>
                  <Button >
                  
                      <WcIcon sx={loginStyles.icon} />
                  
                  </Button>
                </Box>
                </Box>



              </Box>
              {/* checkboxes */}
              <Box sx={{ ...loginStyles.checkboxContainer }}>
                <Box sx={{ display: "flex" }}>
                  <input
                    style={{ padding: "5px" }}
                    type="checkbox"
                    name="check"
                    value={formDetails.check}
                    onChange={handleFieldChange}
                  />
                  <Typography
                    fontSize={11}
                    className={"active-tv-font"}
                    variant=""
                    sx={{ ml: 2 }}
                  >
                    I have read and accept the Privacy Policy
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <input
                    style={{ padding: "5px" }}
                    type="checkbox"
                    name="check"
                    value={formDetails.check}
                    onChange={handleFieldChange}
                  />
                  <Typography
                    fontSize={11}
                    className={"active-tv-font"}
                    variant=""
                    sx={{ ml: 2 }}
                  >
                    I have read and accept the Terms and Conditions
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ...loginStyles.buttonContainer }}>
                <Button
                  className={"active-tv-font"}
                  sx={{ ...loginStyles.loginBtn }}
                  variant="contained"
                  color="warning"
                  type="Submit"
                  onClick={tokenHandler}
                >
                  Sign up
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
                }}
              >
                {errorLogs}
              </span>
              <Box sx={{ padding: "0 50px" }}>
                <fieldset style={{ ...loginStyles.fieldset }}>
                  <legend style={{ ...loginStyles.legend }}>OR</legend>
                </fieldset>
              </Box>
              {/* login with socials */}
              <Box
                sx={{
                  ...loginStyles.buttonContainer,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: {
                    md: "120px",
                    sm: "140px",
                    xs: "170px",
                  },
                }}
              >
                <Button
                  className={"active-tv-font"}
                  sx={{ ...loginStyles.socialBtn, fontSize: "12px" }}
                  variant="contained"
                  onClick={GoogleSignin}
                >
                  <GoogleIcon sx={{ margin: "0 10px" }} />
                  Continue with Google
                </Button>
                <Button
                  sx={{
                    ...loginStyles.socialBtn,
                    fontSize: "12px",
                    "&:hover": { background: "blue", border: "none" },
                  }}
                  className={"active-tv-font"}
                  variant="contained"
                  onClick={FacebookSignin}
                >
                  <FacebookIcon sx={{ margin: "0 10px" }} />
                  Continue with Facebook
                </Button>
              </Box>
            </form>
          </Box>
          <Box
            sx={{
              padding: "10px",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              className={"active-tv-font"}
              sx={{
                fontWeight: "600",
                marginTop: 2,
                fontSize: {
                  md: "10px",
                  sm: "10px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
            >
              Already have an account?
              <Box
                sx={{
                  display: "inline-block",
                  margin: "0 5px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href="/login">Login here</Link>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComp;

const loginStyles = {
  container: {
    minHeight: "145vh",
    width: "100%",
    background: "url('active-tv-login-test1.png')",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      md: 0,
      sm: 0,
      xs: 0,
    },
  },
  contentCover: {
    minHeight: {
      lg: "894px",
      md: "894px",
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
    fontSize: "15px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
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
    fontWeight: "",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    height: "100px",

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
