import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Box } from "@mui/material";
import BannerItem from "./banner-item";
import { USER_CONTEXT } from "../../context/MainContext";
import { Palette } from "@universemc/react-palette";
import FreeToWatch from "../free-to-watch";
import axios from "axios";

const HomeBanner = () => {
  const [banners, setBanners] = useState([]);
  const [haveBanners, setHaveBanners] = useState(false);

  const getShows = async () => {
    const endpoint = `https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-config`;
    const getShowsResponse = await axios.get(endpoint);
    const results = getShowsResponse.data;
    const copyOfBanners = results.BannerImageUrls;
    setBanners(copyOfBanners);
    setHaveBanners(true);
  };
  useEffect(() => {
    getShows();
  }, []);
  return (
    <Palette src={"top_banner_full.jpg"}>
      {({ data, loading, error }) => {
        return (
          <Box
            sx={{
              minHeight: "100vh",
              maxHeight: "107vh",
              zIndex: 1,
            }}
          >
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              style={{ zIndex: 0 }}
            >
              {haveBanners &&
                banners.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <BannerItem background={item} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>

            <Box
              sx={{
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.5) 90% , rgba(0,0,0,0) 100%)",
                width: "100%",
                transform: "translateY(-150px)",
                zIndex: "1",
                position: "relative",
              }}
            ></Box>
          </Box>
        );
      }}
    </Palette>
  );
};

export default HomeBanner;
//changedkk
