import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Router from "next/router";

export default function SimpleBackdrop() {
  const [redirecting, setRedirecting] = React.useState(false);

  const handleClose = () => {
    setRedirecting(false);
  };
  const handleToggle = () => {
    setRedirecting(!open);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!redirecting) {
        setRedirecting(true);
        Router.push("/");
        console.log("redirecting with router");
      }
    }, 5000);
  }, []);

  return (
    <Box sx={styles.container}>
      <img
        src={"404.svg"}
        width={250}
        // height:''
      />
      <Typography
        sx={styles.notFoundText}
        variant="h3"
        fontSize={20}
        className={"active-tv-font"}
        color={"#fff"}
      >
        OOPS! URL NOT FOUND
      </Typography>

      {redirecting ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={redirecting}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Typography
          sx={styles.redirectText}
          variant="h3"
          fontSize={14}
          className={"active-tv-font"}
          color={"#999"}
        >
          {redirecting
            ? "Could not find the url you queried"
            : "Redirecting to the home page in 4..seconds"}
        </Typography>
      )}
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    background: "#111",
    minHeight: "calc(100vh - 70px)",
    width: "100%",
    gap: 5,
    background:
      'url("https://w0.peakpx.com/wallpaper/178/827/HD-wallpaper-abstract-black-light-s7-super.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    padding: "50px 0",
  },
  notFoundText: {
    fontSize: {
      md: "18px",
      sm: "",
      xs: "",
    },
  },
  redirectText: {
    fontSize: {
      md: "14px",
      sm: "12px",
      xs: "10px",
    },
  },
};
