import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FreeToWatchItem } from "./free-to-watch-item";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../utils/SectionHeader";
import { allShows } from "../../state/allShows";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

export default function FreeToWatch() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 1, 1];
  const [shows, setShows] = useState(null);

  useEffect(() => {
    fetch(
      "https://kqurnl9cz4.execute-api.us-east-2.amazonaws.com/test/activetv/popular-shows"
    )
      .then((data) => data.json())
      .then((response) => setShows(response.body))
      .catch((err) => {
        console.log("failed to fetch freeshows");
      });
  }, [shows]);

  const parsedShows = JSON.parse(shows);
  // console.log(shows)
  return (
    <Box>
      <Box sx={{ padding: "18px 0px 0px 48px" }}>
        <SectionHeader text={"Free To Watch"} textColor={"#eee"} />
      </Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="freetowatchwiper"
        style={{ minHeight: "150px", maxHeight: "250px", padding: "0px 48px" }}
      >
        {parsedShows
          ? parsedShows.map((show, index) => {
              const showName = show["name"].replace(/<[^>]+>/g, "");
              if (index > 0) {
                return (
                  <SwiperSlide
                    key={index}
                    className={"show-item"}
                    style={{
                      maxHeight: "250px",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  >
                    <FreeToWatchItem
                      image={show.thumbnail_url}
                      showTitle={showName}
                    />
                  </SwiperSlide>
                );
              }
            })
          : ""}
      </Swiper>
    </Box>
  );
}
