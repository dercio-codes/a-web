import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { useEffect } from "react";

const Subscriptions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box
      className="active-tv-font"
      style={{
        width: "100%",
        background: "url('active-tv-login-test1.png')",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          minWidth: "100%",
          alignItems: "center",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <Box
          style={{
            border: "4px solid #FCFCFB",
            height: "400px",
            width: "300px",
            padding: "50px 30px",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <Typography
            variant="h6"
            align="center"
            className="active-tv-font"
            sx={{ marginBottom: "25px", fontSize: "21px" }}
          >
            MONTHLY MEMBERSHIP
          </Typography>
          <hr style={{ width: "70px" }} />
          <Typography
            className="active-tv-font"
            align="center"
            sx={{ margin: "25px 0", fontSize: "10px" }}
          >
            Flexible. Earn 2 Producer Points per month by going monthly.
          </Typography>
          <Typography sx={{ marginBottom: "25px" }}>
            <strong className="active-tv-font" style={{ fontSize: "10px" }}>
              $3.99 / month
            </strong>
          </Typography>
          <Link href="/signup" passHref={true}>
            <button
              className="active-tv-font card"
              style={{
                border: "1px black solid",
                backgroundColor: "white",
                width: "240px",
                borderRadius: "3px",
                height: "40px",
                textAlign: "center",
                fontFamily: "Arcade Normal",
                fontSize: "11px",
                cursor: "pointer",
              }}
            >
              GO MONTHLY
            </button>
          </Link>
        </Box>

        <Box
          style={{
            border: "4px solid #FCFCFB",
            height: "530px",
            width: "420px",
            margin: "-30px 0 0 0",
            padding: "150px 30px",
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="glitch-tv.gif"
            alt="active tv glitch tv"
            width={120}
            height={80}
            style={{ marginBottom: "25px" }}
          />
          <Typography
            variant="h6"
            className="active-tv-font"
            align="center"
            sx={{ marginBottom: "25px", fontSize: "21px" }}
          >
            ANNUAL <br /> MEMBERSHIP
          </Typography>
          <hr style={{ width: "70px" }} />
          <Typography
            sx={{ margin: "25px 0", fontSize: "10px" }}
            align="center"
            className="active-tv-font"
          >
            Flexible. Earn 2 Producer Points per month by going monthly.
          </Typography>
          <Typography
            sx={{ marginBottom: "25px", fontSize: "10px" }}
            className="active-tv-font"
          >
            <strong>$39.99 / year</strong>
          </Typography>
          <Link href="/signup" passHref={true}>
            <button
              className="active-tv-font card"
              style={{
                backgroundColor: "#fff203",
                width: "240px",
                borderRadius: "3px",
                cursor: "pointer",
                padding: "13px 0",
                border: "none",
                fontSize: "12px",
              }}
            >
              SAVE WITH ANNUAL
            </button>
          </Link>
        </Box>

        <Box
          style={{
            border: "4px solid #FCFCFB",
            height: "400px",
            width: "300px",
            padding: "50px 30px",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <Typography
            variant="h6"
            className="active-tv-font"
            style={{ marginBottom: "25px", fontSize: "21px" }}
            align="center"
          >
            FREE 14-DAY <br /> TRIAL
          </Typography>
          <hr style={{ width: "70px" }} />
          <Typography
            className="active-tv-font"
            sx={{ fontSize: "10px", marginTop: "25px" }}
          >
            Every subscription gets a {"14-day"} free trial!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscriptions;
