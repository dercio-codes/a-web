import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const main = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0659/9281/8935/products/FridayEditedSHOPIFYPhotos.081.jpg?v=1668081113&width=750')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "600px",
  // display: "flex",
  // alignItems: "center",
  // justfifyContent: "center",
  // flexDirection: "column",
  // color: "white",
  // paddingTop: "150px",
  // lineHeight: "30px",
  // fontSize: "12px"
};

function MerchSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box style={main} className="active-tv-font">
      <Box
        style={{
          background: "rgba(0, 0, 0,0.6)",
          color: "white",
          width: "100%",
          height: "100%",
          fontFamily: "Arcade Normal",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          paddingTop: "150px",
          lineHeight: "30px",
          fontSize: "12px",
        }}
      >
        <Typography
          variant="h3"
          fontSize={30}
          className="active-tv-font"
          align="center"
          data-aos="fade-up"
        >
          ALL MERCH 15% OFF & FIRST DIBS
        </Typography>
        <Typography
          variant="p"
          fontSize={13}
          sx={{ mt: 2 }}
          className="active-tv-font"
          data-aos="fade-up"
        >
          Site members get 15% off all product and the first
        </Typography>
        <Typography
          variant="p"
          fontSize={13}
          sx={{ mt: 1, mb: 2 }}
          className="active-tv-font"
          data-aos="fade-up"
        >
          opportunity to buy new product before the general public.
        </Typography>
        <Link href="https://activetvstore.com/" passHref={true}>
          <a target="_blank">
            <button
              style={{
                border: "none",
                width: "250px",
                height: "50px",
                color: "#000",
                background: "#FFF203",
                fontWeight: "bold",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "10px",
              }}
              className="active-tv-font"
              data-aos="fade-up"
            >
              CHECK OUT MERCH
            </button>
          </a>
        </Link>
      </Box>
    </Box>
  );
}

export default MerchSection;
