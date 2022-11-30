import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import {Typography} from '@mui/material'

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
        backgroundSize:'cover',
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        // background: "#121212",
        color: "white",
      }}
    >

  <Box style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth:'100%',
        alignItems: "center",
        background:'rgba(0,0,0,0.7)'
      }}>  
      <Box
        style={{
          border: "4px solid #FCFCFB",
          height: "400px",
          width: "300px",
          textAlign: "center",
          padding: "50px 30px",
          fontFamily: "Arcade Normal",
          fontSize: "13px",
        }}
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <h1>MONTHLY MEMBERSHIP</h1>
        <hr />
        <p>Flexible. Earn 2 Producer Points per month by going monthly.</p>
        <p>
          <strong>$3.99 / month</strong>
        </p>
        <Link href="/signup" passHref={true}>
          <button
            className="card"
            style={{
              border: "1px black solid",
              backgroundColor: "white",
              width: "240px",
              borderRadius: "5px",
              height: "40px",
              textAlign: "center",
              fontFamily: "Arcade Normal",
              fontSize: "11px",
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
          textAlign: "center",
          padding: "150px 30px",
          fontFamily: "Arcade Normal",
          fontSize: "13px",
        }}
      >
        <img src="glitch-tv.gif" alt="active tv glitch tv" width={100} height={60}/>
        <h1>ANNUAL MEMBERSHIP</h1>
        <hr />
        <p>Flexible. Earn 2 Producer Points per month by going monthly.</p>
        <p>
          <strong>$39.99 / year</strong>
        </p>
        <Link href="/signup" passHref={true}>
          <button
            className="card"
            style={{
              backgroundColor: "#fff203",
              width: "240px",
              borderRadius: "5px",
              height: "40px",
              textAlign: "center",
              margin: "0 0 0 0%",
              border: "none",
              fontFamily: "Arcade Normal",
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
          textAlign: "center",
          padding: "20px 30px",
          fontFamily: "Arcade Normal",
          fontSize: "10px",
        }}
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <Typography className={'active-tv-font'} variant="h6" fontSize={18}>FREE 14-DAY TRIAL</Typography>
        <hr />
        <p>Every subscription gets a {"14-day"} free trial!</p>
      </Box>
    </Box>

</Box>
  );
};

export default Subscriptions;
