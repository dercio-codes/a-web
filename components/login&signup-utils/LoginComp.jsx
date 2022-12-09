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
import Link from "next/link";
import Router from "next/router";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Hub, Logger } from "aws-amplify";
import { USER_CONTEXT } from "../../context/MainContext";

const LoginComp = () => {
  const [show, setShow] = useState(false);
  const [errorLogs, setErrorLogs] = useState("");

  const { ForceReload, authorisedJWT, setAuthorisedJWT, getUserInfo } =
    useContext(USER_CONTEXT);

  // form state
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
    check: "",
  });

  const handleFieldChange = (event) => {
    const field = event.currentTarget.name; //created an object that gets the name of inputs and store its value

    setFormDetails({
      ...formDetails,
      [field]: event.currentTarget.value,
    });
  };

  const tooglePassword = () => {
    setShow(!show);
  };

  const GoogleSignin = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Google" });
      getUserInfo();
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

  async function signIn(username, password) {
    try {
      await Auth.signIn(username, password);
      await Router.push("/");
      ForceReload();
    } catch (error) {
      console.log("error signing in ", error);
      setErrorLogs(error.message);
    }
  }

  const endpoint = `https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/cognito_pool/get-shows`;
  const tokenHalndler = async () => {
    const response = await axios({
      method: "get",
      url: endpoint,
      Authorization: `Bearer ${authorisedJWT} `,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type",
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${authorisedJWT} `,
      },
    });
    console.log(response);
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formDetails.email, formDetails.password);
  };

  return (
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
              className={"active-tv-font"}
              variant="h4"
              align="center"
              sx={{
                margin: "15px 0",
                fontWeight: "900",
                fontSize: {
                  md: "20px",
                  xs: "20px",
                },
              }}
            >
              Welcome Back To Active TV
            </Typography>
            <Typography fontSize={10} className={"active-tv-font"} variant="p">
              Jump back in with the latest Active TV content!
            </Typography>
          </Box>
          <Box sx={loginStyles.formBox}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel }}
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
                  style={{ ...loginStyles.inputLabel }}
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
              </Box>
              <Box sx={{ ...loginStyles.buttonContainer }}>
                <Button
                  // onClick={tokenHalndler}
                  sx={{ ...loginStyles.loginBtn }}
                  variant="contained"
                  className={"active-tv-font"}
                  color="warning"
                  type="Submit"
                >
                  Login
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
                  onClick={() => {
                    GoogleSignin();
                  }}
                  sx={{ ...loginStyles.socialBtn }}
                  variant="contained"
                  className={"active-tv-font"}
                  // type="Submit"
                >
                  <GoogleIcon sx={{ margin: "0 10px" }} /> Continue with Google
                </Button>
                <Button
                  sx={{
                    ...loginStyles.socialBtn,
                    "&:hover": { background: "blue", border: "none" },
                  }}
                  variant="contained"
                  className={"active-tv-font"}
                  onClick={() => {
                    FacebookSignin();
                  }}
                >
                  <FacebookIcon sx={{ margin: "0 10px" }} />
                  Continue with Facebook
                </Button>
              </Box>
            </form>
          </Box>
          <Box
            sx={{
              padding: "20px",
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
                  md: "12px",
                  sm: "11px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
            >
              By logging in you accept the Terms and Conditions and Privacy
              Policy
            </Typography>

            <Typography
              variant="600"
              className={"active-tv-font"}
              sx={{
                fontWeight: "bolder",
                marginTop: 2,
                fontSize: {
                  md: "10px",
                  sm: "11px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
            >
              Forgot your password?
              <Box
                sx={{
                  display: "inline-block",
                  margin: "0 5px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href="https://ww.google.com">
                  <a href="/lostPassword">Forgotten password</a>
                </Link>
              </Box>
            </Typography>
            <Typography
              variant="h6"
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
              className={"active-tv-font"}
            >
              Don`t have an account?
              <Box
                sx={{
                  display: "inline-block",
                  margin: "0 5px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href="/signup">
                  <a>Signup here</a>
                </Link>
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
    minHeight: "125vh",
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
      lg: 0,
      md: 0,
      sm: "0 45px",
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
    padding: "20px 0",
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
    fontSize: 10,
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
    // border: "1px solid blue",
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
};
