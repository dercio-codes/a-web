import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import data from "./test.json";
import ShowHeader from "./ShowsHeader";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Link from "next/link";
import axios from "axios";
import Whatlive from "../greenlight-components/greenlight-shows/Whatlive";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ShowsDisplay({
  shows,
  background,
  img,
  height,
  width,
  logo,
  title,
}) {
  //states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [empty, setEmpty] = useState(true);
  const [spinner, setSpinner] = useState(null);
  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FFFFFF");

  const getEpisodes = () => {
    setTimeout(() => {
      setEmpty(false);
    }, 3000);
  };
  return (
    <Box>
      <Box>
        {shows.map((show, index) => (
          <Box>
            {/* The shows header title */}
            <Box
              className="active-tv-font"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textTransform: "capitalize",
                paddingRight: "220px",
                marginBottom: "20px",
              }}
            >
              {show.Title.replace(/-/g, " ")}
            </Box>

            {/* The shows with available episodes */}
            <Box sx={{ display: "flex", width: "100%" }}>
              {/* The shows image */}
              <Box
                sx={{
                  position: "relative",
                  width: "290px",
                  border: "2px lightgrey solid",
                  borderRadius: "12px",
                  marginBottom: "70px",

                  // filter: "blur(0px)",

                  // "&:hover": {
                  //   cursor: "pointer",
                  //   border: "2px #757575 solid",
                  //   transition: "0.8s",
                  //   transform: "scale(0.9)",
                  //   backgroundRepeat: "repeat",
                  //   backgroundSize: "contain",
                  // },
                }}
              >
                <a>
                  <ShowCard
                    color={show.color}
                    openModal={handleOpen}
                    img={show.CoverArtLarge}
                    text={show.Title}
                  />

                  <Box
                    className="active-tv-font"
                    fontSize={10}
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px",
                      textTransform: "capitalize",
                      background: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      justifyContent: "space-between",
                      height: "43px",
                    }}
                  >
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                      src={show.CoverArtLarge}
                    />
                    {show.Title.replace(/-/g, " ")}
                  </Box>
                </a>
              </Box>

              {/* The shows Episodes */}
              <Box
                sx={{
                  border: "1px solid yellow",
                  width: "70%",
                  marginLeft: "30px",
                  height: "220px",
                  display:"flex",
                  // alignItems:"center",
                  // justifyContent:"center",
                  flexDirection:"column"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Link
                    passHref={true}
                    key={index}
                    href={`/shows-episodes/${show.Title}`}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        padding: "10px",
                        textTransform: "capitalize",
                        background: "#000",
                        borderRadius: "17px",
                        fontSize: "12px",
                        cursor: "pointer",
                        border:"1px solid red",

                        "&:hover": {
                          background: "white",
                          color: "#000",
                          transition: "1s",
                        },
                      }}
                    >
                      View more
                    </Typography>
                  </Link>
                </Box>

                {/* <Box sx={{border:"1px solid blue", height:"180px", display:"flex", alignItems:"center", justifyContent:"Center"}}>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                  >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                  </Swiper>
                </Box> */}

              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98%",
    height: "98%",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
  },
  topShowContainer: {
    height: "40%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "",
  },
  bottomShowContainer: {
    // border: 1,
    height: "60%",
    width: "100%",
  },
  emptyBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "#111",
  },
  episodesContainer: {
    width: "100%",
    height: "100%",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fadeContainer: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex: 100,
  },
  cancelBtn: {
    borderRadius: "50px",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: "15px",
    width: "50px",
    height: "60px",
    fontWeight: "bold",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px",
  },
};
