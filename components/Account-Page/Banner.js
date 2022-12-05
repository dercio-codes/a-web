import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Box
      className="active-tv-font"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url('111.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <Box
        style={{
          background: "rgba(0, 0, 0,0.5)",
          color: "white",
          height: "100vh",
          padding: "40px 100px",
          fontFamily: "Arcade Normal",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          flexDirection: "column",
          fontSize: "11px",
        }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Typography variant="h3" className="active-tv-font" fontSize={35}>
          JOIN THE CREW
        </Typography>
        <ul>
          <li
            style={{ color: "#fff203", margin: "10px 0 0 0" }}
            className="active-tv-font"
          >
            <Typography
              tyle={{ color: "white" }}
              fontSize={10}
              className="active-tv-font"
            >
              Watch exclusive content ad-free
            </Typography>
          </li>
          <li
            style={{ color: "#fff203", margin: "10px 0 0 0" }}
            className="active-tv-font"
          >
            <Typography
              tyle={{ color: "white" }}
              fontSize={10}
              className="active-tv-font"
            >
              YOU decide what shows get made
            </Typography>
          </li>
          <li style={{ color: "#fff203", margin: "10px 0 0 0" }}>
            <Typography
              tyle={{ color: "white" }}
              fontSize={10}
              className="active-tv-font"
            >
              15% off on ALL merch
            </Typography>
          </li>
          <li style={{ color: "#fff203", margin: "10px 0 0 0" }}>
            <Typography
              style={{ color: "white" }}
              fontSize={10}
              className="active-tv-font"
            >
              Watch on ANY device
            </Typography>
          </li>
        </ul>
        <Link href="/signup">
          <button
            className={"active-tv-font card"}
            style={{
              backgroundColor: "#fff203",
              width: "423px",
              height: "50px",
              borderRadius: "5px",
              border: "none",
              margin: "35px 0 0 2px",
              fontFamily: "Arcade Normal",
              fontSize: "10px",
              cursor: "pointer",
            }}
          >
            START WITH A FREE TRAIL!
          </button>
        </Link>
        <Typography
          className="active-tv-font"
          style={{ margin: "20px 0 0 40px", fontSize: "10px" }}
        >
          Join in minutes. Cancel any time.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
