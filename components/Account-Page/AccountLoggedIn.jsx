import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useState, useContext } from "react";
import { Grid } from "@mui/material";
import { USER_CONTEXT } from "../../context/MainContext";
import DeleteModal from "./deleteModal";
import AvaterPicChanger from "../AvaterProfile.js/AvaterPicChanger";
import Link from "next/link";

const AccountLoggedIn = () => {
  const { AuthenticatedUser, displayName } = useContext(USER_CONTEXT); //pulling out the current authenticated user

  const [subscribed, setSubscribed] = useState(false);

  const [open, setOpen] = React.useState(false);

  const AvaterPack = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box className={"active-tv-font"} sx={styles.container}>
      <DeleteModal open={open} setOpen={setOpen} />

      <Box sx={styles.contentBox}>
        {/* insert code here */}

        <Box
          style={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            letterSpacing: "2px",
            // borderTop: "1px solid #F2F2F2",
            height: "85px",
          }}
        >
          <p>Account</p>
        </Box>

        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                Profile photo
              </Typography>
              <Typography
                sx={{ margin: "10px 0" }}
                color="#999"
                className="active-tv-font"
                variant="h3"
                fontSize={9}
              >
                change image
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}></Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Box style={AvaterPack}>
                {
                  <Typography
                    variant="h1"
                    color="#fff"
                    fontSize={30}
                    style={{ marginTop: "45px" }}
                  >
                    <AvaterPicChanger />
                  </Typography>
                }
              </Box>

              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              ></Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                display name
              </Typography>
              <Typography
                sx={{ margin: "10px 0" }}
                className="active-tv-font"
                variant="h3"
                fontSize={10}
              >
                email
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                {displayName}
              </Typography>
              <Typography
                sx={{ margin: "10px 0" }}
                className="active-tv-font"
                variant="h3"
                fontSize={10}
              >
                {AuthenticatedUser.name}
              </Typography>
            </Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/ResetNamePassWord">Change user details</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/changepassword">Change password</Link>
              </Typography>
              <Typography
                onClick={() => setOpen(true)}
                sx={{
                  marginBottom: "10px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#df522b"}
              >
                <Link href="#">Delete account</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
          nknkm
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Subscription details
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
              <Typography
                sx={{ marginBottom: 1 }}
                className="active-tv-font"
                variant="h3"
                fontSize={10}
              >
                You {"don't"} seem to have a subscription!
              </Typography>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                Have an active Patreon membership?
              </Typography>
            </Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/subscribepayment">Payment method</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/subscribepayment">subscribe now</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Producer Points
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
              <Typography
                className="active-tv-font"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
                variant="h3"
                fontSize={10}
              >
                You have 0 Producer Points
                <img
                  style={{ margin: "0 5px" }}
                  src="coin.gif"
                  alt="coin"
                  width={18}
                  height={18}
                />
              </Typography>
              <Typography
                className="active-tv-font"
                sx={{ display: "flex", alignItems: "center"}}
                variant="h3"
                fontSize={10}
              >
                Since signing up {"you've"} earned 0 points
                <img
                  style={{marginBottom: "2px", paddingLeft:'2px' }}
                  src="coin.gif"
                  alt="coin"
                  width={18}
                  height={18}
                />
              </Typography>
            </Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/produce">Point History</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              ></Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Need help?
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}></Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/">FAQ</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  color: "#009ada",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={15}
                color={"#4d4df7"}
              >
                <Link href="/contact-us">Contact support</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default AccountLoggedIn;

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    background: "url('active-tv-login-test1.png')",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  contentBox: {
    width: "75%",
    background: "rgba(0,0,0,0.6)",
    height: "90%",
    padding: "20px 50px",
    flexDirection: "column",
  },
  gridItem: {
    minHeight: "80px",
    display: "flex",
    flexDirection: "column",
    padding: "20px 0 0 0",
    color: "#fff",
  },
  lastGrid: {
    alignItems: "flex-end",
    flexDirection: "column",
  },
};
