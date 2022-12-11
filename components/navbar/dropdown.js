import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Auth } from "aws-amplify";
import Router from "next/router";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from '@mui/icons-material/Help';
import LoginIcon from "@mui/icons-material/Login";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AvaterPicChanger from "../AvaterProfile.js/AvaterPicChanger";
import StarsIcon from "@mui/icons-material/Stars";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useFavourite } from "../../context/addFavouriteContext";
// import LoginIcon from '@mui/icons-material/Login';
// import StarsIcon from '@mui/icons-material/Stars';
export default function PositionedPopper({ user, userInitial }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  // const [loggedIn , setLoggedIn]  = React.useState(true)


  const {
    loggedIn,
    setLoggedIn,
    setUser,
    ForceReload,
    setAvaters,
    imgProfile,
    setImgProfile,
    isContained,
    setIsContained,
    picture,
    setPicture
  } = useContext(USER_CONTEXT);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };


  async function signOut() {
    if (loggedIn) {
      try {
        await Auth.signOut();
        await Router.push("/login");
        setUser("Activetv@gmail.com");
        ForceReload();
      } catch (error) {
        console.log("error signing out: ", error);
      }
    } else {
      Router.push("/login");
      console.log("there is no user logged in at thr currentSeession");
    }
  }

  const item = useFavourite();

  return (
    <Box sx={{ width: 100, zIndex: 1000 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                background: "#222",
                minHeight: "250px",
                minWidth: "250px",
                padding: "5px 1px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                zIndex: 1000,
              }}
            >
              <Box
                sx={{
                  height: "140px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  style={{
                    background: imgProfile ? `url(${imgProfile})`: '#111',
                    backgroundSize: isContained ? "cover" : "contain",
                  }}
                  sx={styles.DropUser}
                >
                  {loggedIn ? (
                    <Typography
                      className={"active-tv-font"}
                      variant="h1"
                      color="#fff"
                      fontSize={30}
                    >
                      {!imgProfile && userInitial}
                    </Typography>
                  ) : (
                    <Box
                      sx={{
                        height: "60px",
                        width: "70px",
                        backgroundImage: 'url("ATV_logo.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                </Box>
              </Box>

              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                variant="text"
                onClick={() => {
                  Router.push("/account");
                }}
              >
                <AccountCircleIcon
                  sx={{ color: "#fff", marginRight: "16px" }}
                />
                <Typography
                  className={"active-tv-font"}
                  variant="p"
                  color="#fff"
                  fontSize={10}
                >
                  account
                </Typography>
              </Button>

              <Button
                variant="text"
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                onClick={() => {
                  Router.push("/Active-studio");
                }}
              >
                <Box
                  sx={{
                    height: "30px",
                    width: "30px",
                    marginRight: "12px",
                    backgroundImage: 'url("ATV_logo.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Typography
                  className={"active-tv-font"}
                  variant="p"
                  color="#fff"
                  fontSize={10}
                >
                  Active studio
                </Typography>
              </Button>

            { loggedIn &&  <Button
                             variant="text"
                              sx={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              "&:hover": {
                                background: "transparent",
                              },
                            }}
                            onClick={() => {
                              Router.push("/learn");
                            }}
                          >
                            <MenuBookIcon sx={{ color: "#fff", marginRight: "16px" }}  />
                            <Typography
                              className={"active-tv-font"}
                              variant="p"
                              color="#fff"
                              fontSize={10}
                            >
                              Learn more
                            </Typography>
                          </Button>}


              <Button
                variant="text"
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                onClick={() => {
                  Router.push("/contact-us");
                }}
              >
                <HelpOutlineIcon sx={{ color: "#fff", marginRight: "16px" }} />
                <Typography
                  className={"active-tv-font"}
                  variant="p"
                  color="#fff"
                  fontSize={10}
                >
                  Need help?
                </Typography>
              </Button>


              { loggedIn &&    <Button
                variant="text"
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                onClick={() => {
                  Router.push("/AddToFavourite");
                }}
              >
                <StarsIcon sx={{ color: "#fff", marginRight: "16px" }} />
                <Typography 
                className={"active-tv-font"}
                  variant="p"
                  color="#fff"
                  fontSize={10} >
                Favourites({item.length})
              </Typography>
              </Button>}
              


              {loggedIn ? (
                <Button
                  variant="text"
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={() => {
                    signOut();
                  }}
                >
                  <LogoutIcon sx={{ color: "#fff", marginRight: "16px" }} />
                  <Typography
                    className={"active-tv-font"}
                    variant="p"
                    color="#fff"
                    fontSize={10}
                  >
                    Sign out
                  </Typography>
                </Button>
              ) :
                 <Button
                  variant="text"
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={() => {
                    Router.push('/login')
                  }}
                >
                  <LoginIcon sx={{ color: "#fff", marginRight: "16px" }} />
                  <Typography
                    className={"active-tv-font"}
                    variant="p"
                    color="#fff"
                    fontSize={10}
                  >
                    Sign in
                  </Typography>
                </Button>

            }
             

            </Paper>
          </Fade>
        )}
      </Popper>
      {/* the user */}
      <Grid container justifyContent="center">
        <Grid item>
          <Button
            className={"active-tv-font"}
            onClick={handleClick("bottom-end")}
          >
            <Box
              className={"active-tv-font"}
             
            >
              {loggedIn ? (
                
                <Avatar
                    sx={{ 
                  
                  fontSize: 20 ,
                  background:  imgProfile ? `url(${imgProfile})`:'#333',
                  backgroundSize: isContained ? "cover" : "contain"
                }}
                >
              { !imgProfile && userInitial}
                        
                </Avatar>
              ) : (
                <Avatar sx={{ bgcolor:  "#333" }}></Avatar>
              )}
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  DropUser: {
    height: "100px",
    width: "100px",
    borderRadius: "100%",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex:"1px",
    // border: "1px solid white",
  },
};
